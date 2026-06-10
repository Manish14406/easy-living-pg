import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Living PG Accommodation | Yelahanka, Bengaluru",
  description:
    "Premium PG accommodation near Reva University in Yelahanka, Bengaluru. Fully furnished rooms with WiFi, nutritious meals, housekeeping and 24/7 security for students and professionals.",
  keywords:
    "PG accommodation Yelahanka, PG near Reva University, paying guest Bengaluru, student accommodation Bagalur Road, furnished PG Bengaluru",
  openGraph: {
    title: "Easy Living PG Accommodation",
    description:
      "Comfortable, secure and fully furnished accommodation for students and professionals in Yelahanka, Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
