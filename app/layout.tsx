import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press_start",
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "ECOP 2026 - Encontro de Computação do Oeste Potiguar",
  description: "De 18 a 20 de Maio. Encontro de Computação do Oeste Potiguar. Descubra como se inscrever no mais inovador evento de tecnologia da região Oeste Potiguar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${pressStart.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
