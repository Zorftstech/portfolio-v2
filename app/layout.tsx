import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TopAndBottomWrapper } from "@/components/shared/Wrappers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zorfts Technologies Ltd",
  description:
    "At Zorfts Technologies Ltd, our focus is on crafting bespoke software solutions aligned with the unique requirements and objectives of our clients. We thrive in conceptualizing and implementing groundbreaking software solutions that can grow with your business. ",
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
        <ToastContainer limit={1} />
        <Navbar />
        <TopAndBottomWrapper>{children}</TopAndBottomWrapper>
        <Footer />
      </body>
    </html>
  );
}
