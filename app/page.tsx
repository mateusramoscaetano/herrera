import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { Hero } from "@/components/sections/hero"
import { Manifesto } from "@/components/sections/manifesto"
import { CateringExperience } from "@/components/sections/catering-experience"
import { EditorialGallery } from "@/components/sections/editorial-gallery"
import { Events } from "@/components/sections/events"
import { Chef } from "@/components/sections/chef"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <CateringExperience />
        <EditorialGallery />
        <Events />
        <Chef />
        <Process />
        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
