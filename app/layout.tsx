import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { FacebookPixel } from "./components/facebook-pixel";

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
      <body
        className={cn(
          redHatDisplay.className,
          "bg-gray-primary scrollbar scrollbar-thumb-slate-700 scrollbar-thumb-rounded-lg scrollbar-w-2"
        )}
      >
        <Toaster position="top-center" />
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
