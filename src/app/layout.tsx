import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '301158454382371');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=301158454382371&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${helvetica.variable} ${jetbrainsMono.variable} ${helotypo.variable} ${higasper.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
