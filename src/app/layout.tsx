import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Gotop from "@/components/Gotop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TkCoder",
  description: "A blog about web development and programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="background">
        <Header />
        <Gotop />
        <main className="p-5 pt-28 pb-10 lg:ml-80 lg:py-12 lg:mr-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
