import Footer from "components/Footer";
import Header from "components/Header";
import "app/globals.css";
import type { Metadata } from "next";
import { AnalyticsWrapper } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://onlook.dev"),
  title: {
    default: "Onlook | Demo Portfolio",
    template: "Onlook | %s",
  },
  description:
    "Onlook portfolio demo",
  openGraph: {
    title: "Onlook | Demo Portfolio",
    description:
      "Onlook demo",
    url: "https://onlook.dev",
    siteName: "Onlook",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Onlook",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-[#121212] text-black'>
        <Header />
        {children}
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  );
}
