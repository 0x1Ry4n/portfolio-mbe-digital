import { useLenis } from '@/hooks/useLenis'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { Marquee } from '@/components/effects/Marquee'
import { Navbar } from '@/features/navbar/Navbar'
import { Hero } from '@/features/hero/Hero'
import { About } from '@/features/about/About'
import { Services } from '@/features/services/Services'
import { Process } from '@/features/process/Process'
import { Portfolio } from '@/features/portfolio/Portfolio'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Faq } from '@/features/faq/Faq'
import { Cta } from '@/features/cta/Cta'
import { Footer } from '@/features/footer/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <ScrollProgress />
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Marquee reverse dark />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
      </main>
    </>
  )
}
