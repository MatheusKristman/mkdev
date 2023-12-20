import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKDev",
  description: "Agencia de desenvolvimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(redHatDisplay.className, "bg-gray-primary")}>
        {children}
      </body>
    </html>
  );
}
