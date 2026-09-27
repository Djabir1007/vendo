import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.scss";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Vendo",
  description: "Vendo — сервис объявлений",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
