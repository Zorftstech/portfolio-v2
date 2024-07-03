import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/navbar/navbar";
import { ContextWrapper } from "@/lib/context";
import LayoutRequests from "@/lib/apis/layoutRequest";

export const metadata: Metadata = {
  title: "Zorfts Technologies Ltd",
  description:
    "At Zorfts Technologies Ltd, our focus is on crafting bespoke software solutions aligned with the unique requirements and objectives of our clients. We thrive in conceptualizing and implementing groundbreaking software solutions that can grow with your business. ",
  category: "technology",
  openGraph: {
    title: "Zorfts Technologies Ltd",
    description:
      "At Zorfts Technologies Ltd, our focus is on crafting bespoke software solutions aligned with the unique requirements and objectives of our clients. We thrive in conceptualizing and implementing groundbreaking software solutions that can grow with your business. ",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dj25aashz/image/upload/v1713199707/Frame_629312_zdcvs1.jpg",
        alt: "Zorfts Technologies - Ltd",
        width: 720,
        height: 565.5,
      },
    ],
    siteName: "Zorfts Technologies - Ltd",
    locale: "en_US",
  },
  twitter: {
    title: "Zorfts Technologies Ltd",
    description:
      "At Zorfts Technologies Ltd, our focus is on crafting bespoke software solutions aligned with the unique requirements and objectives of our clients. We thrive in conceptualizing and implementing groundbreaking software solutions that can grow with your business. ",
    images: [
      {
        url: "https://res.cloudinary.com/dj25aashz/image/upload/v1713199707/Frame_629312_zdcvs1.jpg",
        alt: "Zorfts Technologies - Web",
        width: 720,
        height: 565.5,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextWrapper>
          <LayoutRequests>
            <ToastContainer limit={1} />
            <Navbar />
            {children}
            <Footer />
          </LayoutRequests>
        </ContextWrapper>
      </body>
    </html>
  );
}
