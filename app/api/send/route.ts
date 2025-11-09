import { NextRequest } from "next/server";
import { Resend } from "resend";
import { JobApplicationReceived } from "@/components/email/JobApplicationReceived";
import ContactMessageReceived from "@/components/email/ContactMessageReceived";
import NewsletterWelcome from "@/components/email/NewsletterWelcome";
import { addContactMessage, addNewsletterSubscriber } from "@/lib/admin/firestore";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = (body?.type || "").toLowerCase();
    const email: string | undefined = body?.email;

    if (!email) {
      return new Response(JSON.stringify({ success: false, error: "Missing email" }), { status: 400 });
    }

    // Route by template type
    if (type === "contact") {
      const subject: string = body?.subject || "";
      const message: string = body?.message || "";
      if (!subject || !message) {
        return new Response(JSON.stringify({ success: false, error: "Missing subject or message" }), { status: 400 });
      }

      const { data, error } = await resend.emails.send({
        from: "Yusuf from Zorfts <hello@zorfts.agency>",
        to: [email],
        subject: "We received your message",
        react: ContactMessageReceived({ subject, message, senderEmail: email }),
      });

      if (error) {
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
      }

      // Log to Firestore
      try {
        const id = await addContactMessage({ subject, email, message });
        return new Response(JSON.stringify({ success: true, data, loggedId: id }), { status: 200 });
      } catch (logErr: any) {
        return new Response(JSON.stringify({ success: true, data, logError: logErr?.message || "Failed to log" }), { status: 200 });
      }
    }

    if (type === "newsletter") {
      const { data, error } = await resend.emails.send({
        from: "Tolu from Zorfts <hello@zorfts.agency>",
        to: [email],
        subject: "Welcome to our newsletter",
        react: NewsletterWelcome({ email }),
      });

      if (error) {
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
      }

      // Log to Firestore
      try {
        const id = await addNewsletterSubscriber({ email });
        return new Response(JSON.stringify({ success: true, data, loggedId: id }), { status: 200 });
      } catch (logErr: any) {
        return new Response(JSON.stringify({ success: true, data, logError: logErr?.message || "Failed to log" }), { status: 200 });
      }
    }

    // Default: job application acknowledgement
    const firstName: string = body?.first_name || "";
    const jobTitle: string = body?.title || "";

    const { data, error } = await resend.emails.send({
      from: "Amina from Zorfts <careers@zorfts.agency>",
      to: [email],
      subject: `We received your application${jobTitle ? ` for ${jobTitle}` : ""}`,
      react: JobApplicationReceived({ firstName, jobTitle }),
    });

    if (error) {
      return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "Unknown error" }), { status: 500 });
  }
}