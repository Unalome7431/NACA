import type { Metadata } from "next";
import { Elsie, Quicksand, Poiret_One, Bellota_Text, Lato } from "next/font/google";
import "./globals.css";

const elsie = Elsie({
  variable: "--font-elsie",
  subsets: ["latin"],
  weight: "400"
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});

const poiretOne = Poiret_One({
  variable: "--font-poiret",
  subsets: ["latin"],
  weight: "400"
});

const bellotaText = Bellota_Text({
  variable: "--font-bellota",
  subsets: ["latin"],
  weight: "400"
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NACA",
  description: "A matcha brand located in Tangerang. Selling imported matcha powder from Japan, shipping through South East Asia continent. (A personal project, all content are fictional)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elsie.variable} ${quicksand.variable} ${poiretOne.variable} ${bellotaText.variable} ${lato.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
