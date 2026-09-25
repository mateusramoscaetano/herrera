export interface HerreraImage {
  jpg: string
  placeholder: string
  alt: string
  aspect: "portrait" | "landscape" | "square" | "wide" | "tall"
}

export const herreraImages: Record<string, HerreraImage> = {
  event01: {
    jpg: "/621575456_17980744448959816_932224175033390120_n.jpg",
    placeholder: "/images/placeholders/herrera-event-01.svg",
    alt: "Mesa e montagem de evento Herrera Gastronomia",
    aspect: "landscape",
  },
  event02: {
    jpg: "/476644773_18482905528005561_4880463778198121528_n.jpg",
    placeholder: "/images/placeholders/herrera-event-02.svg",
    alt: "Ambiente de celebração gastronômica",
    aspect: "portrait",
  },
  event03: {
    jpg: "/469893000_18471810439005561_6602451590904828577_n.jpg",
    placeholder: "/images/placeholders/herrera-event-03.svg",
    alt: "Detalhe de serviço em evento",
    aspect: "square",
  },
  food01: {
    jpg: "/625050503_18339941311243122_4512817914778821377_n.jpg",
    placeholder: "/images/placeholders/herrera-food-01.svg",
    alt: "Composição gastronômica com vegetais e lentilhas",
    aspect: "portrait",
  },
  food02: {
    jpg: "/626034946_18073285067120533_6909573174701762371_n.jpg",
    placeholder: "/images/placeholders/herrera-food-02.svg",
    alt: "Prato e detalhe culinário",
    aspect: "landscape",
  },
  food03: {
    jpg: "/637199777_1250077577079186_4757918138349976732_n.jpg",
    placeholder: "/images/placeholders/herrera-food-01.svg",
    alt: "Detalhe de gastronomia Herrera",
    aspect: "square",
  },
  chef01: {
    jpg: "/503873454_10029308347162467_6180383855740978750_n.jpg",
    placeholder: "/images/placeholders/herrera-chef-01.svg",
    alt: "Produção na cozinha Herrera",
    aspect: "portrait",
  },
  backstage01: {
    jpg: "/469966871_18471825031005561_966805270392882324_n.jpg",
    placeholder: "/images/placeholders/herrera-backstage-01.svg",
    alt: "Bastidores da equipe em produção",
    aspect: "landscape",
  },
  detail01: {
    jpg: "/502986609_1070480254969795_6781750568672111544_n.jpg",
    placeholder: "/images/placeholders/herrera-detail-01.svg",
    alt: "Recorte editorial de prato",
    aspect: "square",
  },
  detail02: {
    jpg: "/503217032_1222087466051540_1142360062392270181_n.jpg",
    placeholder: "/images/placeholders/herrera-detail-02.svg",
    alt: "Detalhe de montagem gastronômica",
    aspect: "tall",
  },
  team01: {
    jpg: "/503811191_723534557294050_9013429561501995785_n.jpg",
    placeholder: "/images/placeholders/herrera-team-01.svg",
    alt: "Equipe Herrera em execução",
    aspect: "wide",
  },
  kitchen01: {
    jpg: "/503270124_1810031626532074_5835504252293924580_n.jpg",
    placeholder: "/images/placeholders/herrera-backstage-01.svg",
    alt: "Cozinha e produção Herrera",
    aspect: "landscape",
  },
}

export const galleryLayout: Array<{
  key: string
  span: string
}> = [
  { key: "food01", span: "col-span-12 md:col-span-7 row-span-2 min-h-[420px]" },
  { key: "event01", span: "col-span-6 md:col-span-5 min-h-[280px]" },
  { key: "detail01", span: "col-span-6 md:col-span-5 min-h-[280px]" },
  { key: "event02", span: "col-span-7 md:col-span-4 min-h-[360px]" },
  { key: "food02", span: "col-span-5 md:col-span-8 min-h-[320px]" },
  { key: "backstage01", span: "col-span-12 md:col-span-6 min-h-[300px]" },
  { key: "detail02", span: "col-span-6 md:col-span-3 min-h-[400px]" },
  { key: "kitchen01", span: "col-span-6 md:col-span-3 min-h-[400px]" },
  { key: "event03", span: "col-span-12 md:col-span-5 min-h-[280px]" },
  { key: "team01", span: "col-span-12 md:col-span-7 min-h-[280px]" },
]

export function getImage(key: string): HerreraImage {
  const img = herreraImages[key]
  if (!img) return herreraImages.event01
  return img
}
