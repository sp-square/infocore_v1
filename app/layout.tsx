import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import bgImgDark from "@/public/bg.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | InfoCore",
    default: "InfoCore",
  },
  description: "An informational blog based on data analyses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url(../public/bg.jpg)] bg-no-repeat bg-fixed bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
