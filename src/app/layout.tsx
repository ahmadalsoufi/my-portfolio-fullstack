import { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ahmad Alsoufi | portfolio",
  description: "Welcome to my Next.js application.",
  icons: { icon: "/profile.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b-2 border-b-blue-300 bg-slate-700 text-slate-100 shadow-md dark:bg-slate-900 print:hidden">
          <Navbar />
        </header>
        <main className="">{children}</main>
        <footer className="print:hidden mt-auto ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
