import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Vision Digital | Premium Digital Marketing Agency",
  description:
    "Grow your business with Vision Digital. We offer SEO, social media marketing, web design, and paid advertising to help you dominate online.",
  keywords: "digital marketing, SEO, social media, web design, branding, paid ads",
  openGraph: {
    title: "Vision Digital | Premium Digital Marketing Agency",
    description: "Grow your business with Vision Digital.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col noise-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
