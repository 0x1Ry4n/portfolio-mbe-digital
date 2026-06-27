import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealAnimation(selector = '.reveal') {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector)
      if (!targets.length) return

      // Estado inicial: invisível e levemente deslocado
      gsap.set(targets, { opacity: 0, y: 40 })

      // Reveal disparado ao entrar na viewport, com stagger
      ScrollTrigger.batch(targets, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            overwrite: true,
          }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector])

  return containerRef
}
