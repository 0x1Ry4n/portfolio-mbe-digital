import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Instância única para que Navbar/Footer/CTAs disparem scroll suave
// pelo mesmo motor (Lenis), evitando conflito com o scrollIntoView nativo.
let lenisInstance: Lenis | null = null

const NAVBAR_OFFSET = 80

/**
 * Faz scroll suave até uma seção (ex.: '#about') usando o Lenis.
 * Faz fallback para scrollIntoView caso o Lenis ainda não exista.
 */
export function scrollToSection(target: string) {
  const el = document.querySelector(target)
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, {
      offset: -NAVBAR_OFFSET,
      duration: 1.2,
    })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

/** Scroll suave até o topo da página. */
export function scrollToTop() {
  if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisInstance = lenis

    // Sincroniza Lenis com ScrollTrigger para que todos os triggers
    // leiam a posição correta do scroll suave.
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Recalcula posições dos triggers depois que fontes/imagens carregam,
    // evitando reveals disparando na posição errada.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshTimeout = window.setTimeout(refresh, 500)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(refreshTimeout)
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
