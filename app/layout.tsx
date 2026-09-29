import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"

const bigilla = localFont({
  src: [
    {
      path: "./fonts/Bigilla.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Bigilla-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bigilla",
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
      className={`${bigilla.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  )
}
