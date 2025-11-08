import * as React from "react";

type Props = {
  subject: string;
  message: string;
  senderEmail: string;
};

export default function ContactMessageReceived({ subject, message, senderEmail }: Props) {
  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif", margin: "0 auto", padding: "24px", maxWidth: "600px" }}>
      <h2>Thanks for reaching out</h2>
      <p>Hi {senderEmail},</p>
      <p>
        We received your message with the subject "{subject}". Our team will review it and get back to you shortly.
      </p>
      <p>Here’s a copy of your message:</p>
      <div style={{ backgroundColor: "#f8fafc", padding: "12px", borderRadius: 6 }}>
        <p>{message}</p>
      </div>
      <p>If you have more details to add, simply reply to this email.</p>
      <p>— The Team</p>
    </div>
  );
}