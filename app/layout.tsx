import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import Link from "next/link"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UAE Real Estate ML Platform",
  description: "Advanced machine learning platform for UAE real estate investment analytics",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' fontSize='90'>🏢</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RE</span>
                </div>
                <span className="font-bold text-xl text-slate-900">UAE Real Estate ML model - 2023</span>
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <span className="px-3 py-2 rounded-md hover:bg-slate-100">Dashboard</span>
                </Link>
                <Link href="/model-architecture">
                  <span className="px-3 py-2 rounded-md hover:bg-slate-100">Model Architecture</span>
                </Link>
                <Link href="/production-code">
                  <span className="px-3 py-2 rounded-md hover:bg-slate-100">Production Level Code</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

