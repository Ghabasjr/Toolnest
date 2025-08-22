import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "ToolNest - Professional Calculator Tools",
  description:
    "A comprehensive suite of calculator tools for professionals and students. BMI Calculator, Age Calculator, Currency Converter and more.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: "calculator, BMI calculator, age calculator, currency converter, tools, professional tools",
  authors: [{ name: "ToolNest" }],
  creator: "ToolNest",
  publisher: "ToolNest",
  robots: "index, follow",
  openGraph: {
    title: "ToolNest - Professional Calculator Tools",
    description: "A comprehensive suite of calculator tools for professionals and students",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolNest - Professional Calculator Tools",
    description: "A comprehensive suite of calculator tools for professionals and students",
  },
  other: {
    "google-adsense-account": "ca-pub-8493316210982445"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2316a34a' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect width='16' height='20' x='4' y='2' rx='2' ry='2'/><line x1='8' x2='16' y1='6' y2='6'/><line x1='8' x2='16' y1='10' y2='10'/><line x1='8' x2='16' y1='14' y2='14'/><line x1='8' x2='16' y1='18' y2='18'/></svg>"
        />
      </head>
      <body className="font-serif">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
