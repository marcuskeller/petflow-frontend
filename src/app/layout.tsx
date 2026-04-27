import React from "react";
import { Navbar } from "@/src/shared/components/navbar/navbar";
import { Footer } from "@/src/shared/components/footer/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={cn("font-sans", geist.variable)}>
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
