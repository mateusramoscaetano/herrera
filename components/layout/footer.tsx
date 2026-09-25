import Image from "next/image"
import { brandLogo } from "@/lib/media"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer
      className="border-t border-cream/10 bg-ink px-6 py-16 text-cream md:px-10"
      data-header-theme="dark"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-5">
          <div className="relative h-12 w-12 overflow-hidden rounded-sm">
            <Image
              src={brandLogo.onDark}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <p className="font-serif text-2xl md:text-3xl">Herrera Gastronomia</p>
          <p className="max-w-md font-sans text-sm leading-relaxed text-cream/70">
            {site.tagline}
            <br />
            {site.chef}
          </p>
          <p className="font-sans text-sm text-cream/60">{site.location.city}</p>
        </div>

        <div className="grid gap-3 font-sans text-sm text-cream/75">
          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            {site.instagram}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            WhatsApp — {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            {site.phone}
          </a>
          <p className="max-w-sm text-cream/55">{site.location.address}</p>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[1400px] font-sans text-[0.65rem] tracking-[0.2em] text-cream/40">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
