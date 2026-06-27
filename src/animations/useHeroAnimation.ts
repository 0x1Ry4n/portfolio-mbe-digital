import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })

      // Entrada sequencial dos elementos
      tl.fromTo(
        '.hero-eyebrow',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      )
        .fromTo(
          '.hero-title > span > span',
          { y: '110%' },
          { y: '0%', duration: 0.85, ease: 'power4.out', stagger: 0.07 },
          '-=0.2',
        )
        .fromTo(
          '.hero-subtitle',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.35',
        )
        .fromTo(
          '.hero-cta',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
          '-=0.3',
        )
        .fromTo(
          '.hero-stats',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: 0.08 },
          '-=0.2',
        )

      // Parallax suave da logo mark ao scrollar
      gsap.to('.hero-bg-circle', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}
