import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dusky-delta-25.vercel.app"),
  title: "Ishan Maheshwari | Portfolio",
  description:
    "CS undergrad and SDE intern building full-stack, AI-powered products. Projects, experience, and ways to get in touch.",
  openGraph: {
    title: "Ishan Maheshwari | Portfolio",
    description:
      "CS undergrad and SDE intern building full-stack, AI-powered products.",
    url: "/",
    siteName: "Ishan Maheshwari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Maheshwari | Portfolio",
    description:
      "CS undergrad and SDE intern building full-stack, AI-powered products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, mono.variable, "font-sans antialiased bg-background text-foreground no-scrollbar")}>
        {children}
      </body>
    </html>
  );
}
