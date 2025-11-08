import { NextRequest } from "next/server";
import { Resend } from "resend";
import { JobApplicationReceived } from "@/components/email/JobApplicationReceived";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      email,
      first_name: firstName,
      title: jobTitle,
    } = body || {};

    if (!email) {
      return new Response(JSON.stringify({ success: false, error: "Missing email" }), { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Zorfts Hiring <careers@zorfts.com>",
      to: [email],
      subject: `We received your application${jobTitle ? ` for ${jobTitle}` : ""}`,
      react: JobApplicationReceived({ firstName: firstName || "", jobTitle: jobTitle || "" }),
    });

    if (error) {
      return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "Unknown error" }), { status: 500 });
  }
}