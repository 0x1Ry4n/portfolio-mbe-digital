import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useNavbarAnimation() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    // Entrada inicial
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 },
    )

    let prevScroll = 0

    // Lenis chama ScrollTrigger.update a cada frame de scroll,
    // então ouvimos o evento 'scroll' do window que Lenis despacha.
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const scrollingDown = currentScroll > prevScroll && currentScroll > 100

      gsap.to(nav, {
        y: scrollingDown ? -100 : 0,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
      })

      if (currentScroll > 48) {
        nav.setAttribute('data-scrolled', 'true')
      } else {
        nav.removeAttribute('data-scrolled')
      }

      prevScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return navRef
}
