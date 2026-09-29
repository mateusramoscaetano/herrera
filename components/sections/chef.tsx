import Image from "next/image"
import { SectionLabel } from "@/components/ui/section-label"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { copy } from "@/lib/copy"
import { chefPortrait, texturePatterns } from "@/lib/media"
import { site } from "@/lib/site"

export function Chef() {
  const { chef } = copy

  return (
    <section
      id="chef"
      className="relative min-h-svh overflow-hidden bg-ink text-cream"
      data-header-theme="dark"
      data-section="chef"
    >
      <div className="absolute inset-0 md:left-[38%]">
        <Image
          src={chefPortrait.src}
          alt={chefPortrait.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
          className="object-cover object-[center_15%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent md:from-ink md:via-ink/55 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${texturePatterns.wine})`,
          backgroundSize: "480px auto",
        }}
      />

      <div className="relative mx-auto flex min-h-svh max-w-350 flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:px-10 md:pb-24 md:pt-28">
        <div className="max-w-xl md:max-w-2xl">
          <SectionLabel tone="gold">{chef.label}</SectionLabel>
          <h2 className="mt-6 font-serif text-[clamp(3.25rem,11vw,7rem)] leading-[0.88]">
            {chef.titleLine1}
            <br />
            <span className="text-gold">{chef.titleLine2}</span>
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-cream/80 md:text-base">
            {chef.lead}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-10 font-sans text-xs uppercase tracking-[0.22em] text-cream/60">
            {chef.pillars.map((pillar) => (
              <div key={pillar.term}>
                <dt className="text-gold">{pillar.term}</dt>
                <dd className="mt-2 normal-case tracking-normal text-cream/85">
                  {pillar.detail}
                </dd>
              </div>
            ))}
          </dl>

          <p
            className="mt-14 font-serif text-3xl italic text-gold/95 md:text-4xl"
            aria-label={`Assinatura ${chef.signature}`}
          >
            {chef.signature}
          </p>

          <div className=" ">
           <h2 className='font-serif mt-10 text-cream text-xl uppercase'> Da Gastronomia aos grandes eventos.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10  gap-10 font-sans">
             <div className="text-sm col-span-1 gap-4 flex flex-col leading-relaxed text-cream">
             <span>  A trajetória de Gabriel Herrera começa na gastronomia e encontra nos eventos o ponto de conexão entre as duas áreas. 
                </span>
                <span>  Em 2019, levou essa busca ainda mais longe no Bosque Culinary Center, em San Sebastián, na Espapanha. Foi também no país que aprofundou sua experiência em catering, com a Alabardero, onde vivenciou de perto a escala, a precisão e a complexidade que os grandes eventos exigem. 

                </span>

                <span>
                Sua formação gastronômica teve inicio no Centro Europeu, em Curitiba, e passou pelas cozinhas do D.O.M e do Dalva e Dito, ao lado de Alex Atala, além do Buffet Capim Sato, com Morena Leite.

                </span>
              </div>
              
              <div className="text-sm col-span-1 gap-4 flex flex-col">
                 <span>  
                  De volta ao Brasil, atuou como sócio e chef executivo no Ópera Concept Hall e, posteriormente, na La Orana Gastronomia, participando da realização de centenas de eventos e atendendo milhares de convidados.
                </span>
                <span> 
                  Agora à frente da HErrera, Gabriel inicia uma nova fase de sua trajetória.
                </span>

                <span>
                  Uma marca que reúne sua experiência em gastronomia, gestão e eventos para criar experiências gastronômicas à altura de cada ocasião, respeitando sua escala, seu contexto e, principalmente, sua singularidade.
                </span>
              </div>
            </div>

          </div>

          <div className="mt-12">
            <MagneticButton href={site.proposalHref} variant="outline">
              Criar uma experiência
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
