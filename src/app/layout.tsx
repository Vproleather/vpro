import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vproleather.com'),
  title: {
    default: "Premier Leather Repair Woodstock GA | V-Pro Leather",
    template: "%s | V-Pro Leather Repair"
  },
  description: "Professional leather repair, upholstery, and furniture restoration services in Woodstock, GA. Serving Cherokee County with expert craftsmanship since 2005.",
  keywords: "leather repair Woodstock GA, upholstery shop, furniture repair, leather restoration, Cherokee County, furniture regluing, leather sofa repair, car seat repair",
  authors: [{ name: "V-Pro Leather Repair" }],
  creator: "V-Pro Leather Repair",
  publisher: "V-Pro Leather Repair",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vproleather.com',
    siteName: 'V-Pro Leather Repair',
    title: 'Premier Leather Repair Woodstock GA | V-Pro Leather',
    description: 'Professional leather repair, upholstery, and furniture restoration services in Woodstock, GA. Serving Cherokee County with expert craftsmanship since 2005.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'V-Pro Leather Repair - Woodstock GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Leather Repair Woodstock GA | V-Pro Leather',
    description: 'Professional leather repair, upholstery, and furniture restoration services in Woodstock, GA.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Schema includeLocalBusiness={true} includeOrganization={true} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
