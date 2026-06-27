import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export function useMagneticButton(strength = 0.35) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: Event) => {
      const me = e as globalThis.MouseEvent
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (me.clientX - cx) * strength
      const dy = (me.clientY - cy) * strength
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
    }

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
