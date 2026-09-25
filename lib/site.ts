export const site = {
  name: "Herrera Gastronomia",
  shortName: "HERRERA",
  tagline: "Catering • Eventos • Do conceito à execução",
  chef: "Feito pelo Chef Gabriel Herrera",
  location: {
    city: "Curitiba — PR",
    address:
      "Av. Pres. Getúlio Vargas, 3896 - Rebouças, Curitiba - PR, 80240-041",
  },
  phone: "(41) 99523-8843",
  phoneHref: "tel:+5541995238843",
  whatsappHref: "https://wa.me/5541995238843",
  instagram: "@herreragastronomia",
  instagramHref: "https://instagram.com/herreragastronomia",
  proposalHref: "#contato",
} as const

export const navItems = [
  { label: "HERRERA", href: "#manifesto" },
  { label: "EXPERIÊNCIAS", href: "#experiencias" },
  { label: "EVENTOS", href: "#eventos" },
  { label: "CHEF", href: "#chef" },
  { label: "CONTATO", href: "#contato" },
] as const
