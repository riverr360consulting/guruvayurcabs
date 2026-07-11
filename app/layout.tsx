import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guruvayur Cabs | Safe, Reliable Taxi Service in Guruvayur",
  description:
    "Book reliable and comfortable cabs in Guruvayur for local rides, airport transfers, outstation trips, temple visits and pilgrimage tours. Clean cars, professional drivers, 24/7 support.",
  keywords: [
    "Guruvayur taxi",
    "Guruvayur cabs",
    "Guruvayur airport taxi",
    "Kochi airport to Guruvayur taxi",
    "Guruvayur temple taxi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
