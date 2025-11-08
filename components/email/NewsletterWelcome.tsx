import * as React from "react";

type Props = {
  email: string;
};

export default function NewsletterWelcome({ email }: Props) {
  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif", margin: "0 auto", padding: "24px", maxWidth: "600px" }}>
      <h2>Welcome aboard</h2>
      <p>Hi {email},</p>
      <p>
        Thanks for subscribing to our newsletter. You’ll receive occasional updates on new articles, product news, and events.
      </p>
      <p>If this wasn’t you, you can ignore this email.</p>
      <p>— The Team</p>
    </div>
  );
}