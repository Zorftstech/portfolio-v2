import * as React from "react";

interface Props {
  firstName: string;
  jobTitle: string;
}

export function JobApplicationReceived({ firstName, jobTitle }: Props) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ color: "#004AAD" }}>Application received</h1>
      <p>
        Hi {firstName || "there"},
      </p>
      <p>
        Thanks for applying for the <strong>{jobTitle}</strong> role. Our team will
        review your application and get back to you soon.
      </p>
      <p>
        If you have any questions, just reply to this email.
      </p>
      <p>— Zorfts Hiring Team</p>
    </div>
  );
}