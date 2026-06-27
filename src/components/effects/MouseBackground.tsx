import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Orb {
  el: HTMLDivElement
  x: number
  y: number
  targetX: number
  targetY: number
}

export function MouseBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const orbBlueRef = useRef<HTMLDivElement>(null)
  const orbGreenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const orbBlue = orbBlueRef.current
    const orbGreen = orbGreenRef.current
    if (!container || !orbBlue || !orbGreen) return

    const orbs: Orb[] = [
      { el: orbBlue, x: window.innerWidth * 0.7, y: window.innerHeight * 0.3, targetX: 0, targetY: 0 },
      { el: orbGreen, x: window.innerWidth * 0.2, y: window.innerHeight * 0.7, targetX: 0, targetY: 0 },
    ]

    // Posiciona no estado inicial
    gsap.set(orbBlue, { x: orbs[0].x, y: orbs[0].y })
    gsap.set(orbGreen, { x: orbs[1].x, y: orbs[1].y })

    const onMove = (e: MouseEvent) => {
      const { clientX: mx, clientY: my } = e

      orbs[0].targetX = mx
      orbs[0].targetY = my

      // Orb verde fica levemente atrasado e deslocado
      orbs[1].targetX = mx - 80
      orbs[1].targetY = my + 60
    }

    // Loop de lerp suave via GSAP ticker
    const ticker = gsap.ticker.add(() => {
      for (const orb of orbs) {
        const lerpSpeed = orb.el === orbBlue ? 0.07 : 0.045
        orb.x += (orb.targetX - orb.x) * lerpSpeed
        orb.y += (orb.targetY - orb.y) * lerpSpeed
        gsap.set(orb.el, { x: orb.x, y: orb.y })
      }
    })

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      gsap.ticker.remove(ticker)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Orb principal — azul primário */}
      <div
        ref={orbBlueRef}
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          marginLeft: -350,
          marginTop: -350,
          background: 'radial-gradient(circle, rgba(34,64,194,0.10) 0%, rgba(34,64,194,0.04) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Orb secundário — verde accent, lag maior */}
      <div
        ref={orbGreenRef}
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          marginLeft: -250,
          marginTop: -250,
          background: 'radial-gradient(circle, rgba(126,217,87,0.10) 0%, rgba(126,217,87,0.04) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Grid estático sutil */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#201F2D 1px, transparent 1px), linear-gradient(90deg, #201F2D 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
