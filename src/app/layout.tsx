import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Alsoufi | portfolio",
  description: "Welcome to my Next.js application.",
  icons: { icon: "/profile.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
