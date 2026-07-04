import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const helvetica = localFont({
  src: [
    {
      path: "./font/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Helvetica-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Helvetica-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const helotypo = localFont({
  src: "./font/Helotypo.woff2",
  variable: "--font-helotypo",
  display: "swap",
});

const higasper = localFont({
  src: "./font/Higasper.woff2",
  variable: "--font-higasper",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Human Paradox - Fisioterapia basada en rendimiento",
  description:
    "Clínica de fisioterapia especializada en rehabilitación y rendimiento. Desde 2015 transformamos la forma de hacer fisioterapia en México.",
  icons: {
    icon: "/icon.ico",
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
        className={`${helvetica.variable} ${jetbrainsMono.variable} ${helotypo.variable} ${higasper.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
