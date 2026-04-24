import "../globals.css";
import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Public</h1>
      {children}
    </div>
  );
}
