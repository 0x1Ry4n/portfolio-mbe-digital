import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const elRef = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = elRef.current
    if (!el || started) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        setStarted(true)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = prefix + Math.round(obj.val).toLocaleString('pt-BR') + suffix
          },
        })
      },
    })

    return () => trigger.kill()
  }, [value, prefix, suffix, duration, started])

  return (
    <span ref={elRef} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
