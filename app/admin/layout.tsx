import { Suspense } from "react"
import Navbar from "./Navbar/page"

export default function AdminLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
      
        <Navbar />
        {children}
        </body>
    </html>
  )
}
