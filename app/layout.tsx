import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inria_Sans({weight: ["300", "400", "700"], style: ["normal", "italic"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pure Management',
  description: 'Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}