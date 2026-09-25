import { Libre_Bodoni, Montserrat } from "next/font/google"
import { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Herrera Gastronomia | Catering e eventos em Curitiba",
  description:
    "Catering, eventos e experiências gastronômicas do conceito à execução. Chef Gabriel Herrera — Curitiba, PR.",
  openGraph: {
    title: "Herrera Gastronomia",
    description:
      "Catering • Eventos • Do conceito à execução. Feito pelo Chef Gabriel Herrera.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${libreBodoni.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  )
}
