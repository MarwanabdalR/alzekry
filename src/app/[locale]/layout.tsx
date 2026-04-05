/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { Tajawal, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Note: Tajawal supports weights 200, 300, 400, 500, 700, 800, 900 (It doesn't have 600)
const fontTajawal = Tajawal({
  variable: "--font-Tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"], 
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

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${fontTajawal.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
