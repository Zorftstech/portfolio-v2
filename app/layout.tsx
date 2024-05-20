import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Zorfts Technologies",
    default: "Zorfts Technologies ",
  },
  description: "Zorfts Technologies - Web",

  category: "technology",
  openGraph: {
    title: "Zorfts Technologies - Web",
    description: "Zorfts Technologies - Web",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dj25aashz/image/upload/v1713199707/Frame_629312_zdcvs1.jpg",
        alt: "Zorfts Technologies - Web",
        width: 720,
        height: 565.5,
      },
    ],
    siteName: "Zorfts Technologies - Web",
    locale: "en_US",
  },
  twitter: {
    title: "Zorfts Technologies - Web",
    description: "Zorfts Technologies - Web",
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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
