import React from "react";
import { Navbar } from "@/shared/components/navbar/navbar";
import { Footer } from "@/shared/components/footer/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
