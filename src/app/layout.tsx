import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rồng Thần Đại Chiến",
  description: "Game nhập vai mới nhất và hot nhất cốt truyện 7 viên ngọc rồng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontInter.variable} antialiased`}>
        <NextTopLoader height={5} color="red" />
        {children}
      </body>
    </html>
  );
}
