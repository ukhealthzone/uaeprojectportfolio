import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable right-click
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
              });
              
              // Disable keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
                if (e.keyCode === 123 || 
                    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
                    (e.ctrlKey && e.keyCode === 85) ||
                    (e.ctrlKey && e.keyCode === 83)) {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Disable text selection
              document.addEventListener('selectstart', function(e) {
                e.preventDefault();
                return false;
              });
              
              // Disable drag
              document.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
              });
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`} style={{ userSelect: "none", WebkitUserSelect: "none" }}>
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
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/model-architecture">
                  <Button variant="ghost">Model Architecture</Button>
                </Link>
                <Link href="/production-code">
                  <Button variant="ghost">Production Level Code</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t bg-slate-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-600">Developed by Balaga Raghuram | 2023</p>
            <div className="mt-4">
              <Link href="https://linkedin.com" className="text-teal-600 hover:text-teal-700">
                LinkedIn Profile →
              </Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
