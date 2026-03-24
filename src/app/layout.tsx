import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Zekry Law Firm",
  description: "Al Zekry Law Firm and Legal Consultations",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
    other: {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16 32x32 64x64",
      url: "/logo.ico",
    },
  },
  openGraph: {
    title: "Al Zekry Law Firm",
    description: "Al Zekry Law Firm and Legal Consultations",
    images: [
      {
        url: "/logo.ico",
        width: 1200,
        height: 630,
        alt: "Al Zekry Law Firm",
      },
    ],
  },
  twitter: {
    title: "Al Zekry Law Firm",
    description: "Al Zekry Law Firm and Legal Consultations",
    images: [
      {
        url: "/logo.ico",
        width: 1200,
        height: 630,
        alt: "Al Zekry Law Firm",
      },
    ],
  },
  other: {
    "theme-color": "#1A7A43",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
