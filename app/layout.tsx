import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ALCC | SXC",
  description: "A Levels Computer Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/SelAshyn/ALCC/refs/heads/main/public/LogoWithoutBG.png" type="image/x-icon"/>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800&display=swap" rel="stylesheet"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=supreme@500&display=swap" rel="stylesheet"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=bespoke-sans@700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
