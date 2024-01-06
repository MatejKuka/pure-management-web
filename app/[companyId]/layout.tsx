import React from "react";
import Navigation from "@/components/common/Navigation";
import Sidebar from "@/components/common/sidebar/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className={"grid grid-cols-12"}>
          <Sidebar />
          <main className={"col-span-10"}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
