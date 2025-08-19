import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "H&N Aircraft Cleaning Spa - Servicios Profesionales de Limpieza Aeronáutica",
  description:
    "Servicios especializados de limpieza aeronáutica para flotas comerciales, ejecutivas y militares. Productos certificados, equipo profesional y disponibilidad 24/7.",
  keywords: "limpieza aeronáutica, aircraft cleaning, limpieza aviones, servicios aeroportuarios, limpieza profesional",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
