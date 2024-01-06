import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import './globals.css'
import React from "react";
import Navigation from "@/components/common/Navigation";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { Toaster } from "@/components/ui/toaster"
import {ReduxProvider} from "@/redux/Provider";
import QueryProvider from "@/API/QueryProvider";

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
      <QueryProvider>
        <ReduxProvider>
          <Navigation />
          <div className={"grid grid-cols-12"}>
            <Sidebar />
            <main className={"col-span-10"}>
              {children}
            </main>
          </div>
          <Toaster data-testid={"action-toast"} />
        </ReduxProvider>
      </QueryProvider>
      </body>
    </html>
  )
}
