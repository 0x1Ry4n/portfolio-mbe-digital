import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

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
    }
  }, [])
}
