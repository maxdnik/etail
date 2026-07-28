import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { EtaIlProvider } from "@/lib/EtaIlContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.israel-entrypiba.com";
const defaultTitle = "ETA-IL para viajar a Israel | Asistencia en español";
const defaultDescription =
  "Información y asistencia privada en español para preparar tu solicitud ETA-IL para viajar a Israel. Requisitos, tiempos, vigencia y revisión personalizada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "ETA-IL Ayuda",
  title: {
    default: defaultTitle,
    template: "%s | ETA-IL Ayuda",
  },
  description: defaultDescription,
  keywords: [
    "ETA-IL",
    "ETA Israel",
    "permiso para viajar a Israel",
    "ETA-IL Argentina",
    "requisitos para viajar a Israel",
    "autorización electrónica Israel",
  ],
  authors: [{ name: "ETA-IL Ayuda" }],
  creator: "ETA-IL Ayuda",
  publisher: "ETA-IL Ayuda",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "ETA-IL Ayuda",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Información y asistencia en español para la autorización ETA-IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172554",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <EtaIlProvider>{children}</EtaIlProvider>
        <Script
          src="https://sdk.mercadopago.com/js/v2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
