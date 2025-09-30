import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Paradox - Fisioterapia basada en rendimiento",
  description:
    "Clínica de fisioterapia especializada en rehabilitación y rendimiento. Desde 2015 transformamos la forma de hacer fisioterapia en México.",
  icons: {
    icon: "/images/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
