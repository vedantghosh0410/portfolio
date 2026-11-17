import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedant Ghosh | CSE Student & Developer",
  description: "Personal portfolio of Vedant Ghosh, pursuing CSE at BIT Bangalore. Passionate about software engineering, web development, and problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
