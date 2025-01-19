import type { Metadata } from "next";
import "./globals.css";
import Aside from "./components/Aside";
import PageHeader from "./components/PageHeader";

export const metadata: Metadata = {
  title: "Multiple Admin Dashboard",
  description: "A multi vendor admin dashboard by woo-company?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Aside />
        <div className="w-full bg-slate-50">
          <PageHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
