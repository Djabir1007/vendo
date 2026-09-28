import type { Metadata } from "next";
import { sourceSans } from "@/shared/fonts/fonts";
import "./globals.scss";

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
