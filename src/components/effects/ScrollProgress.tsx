import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress, transformOrigin: 'left center' })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0"
        style={{ background: 'linear-gradient(90deg, #2240C2 0%, #7ED957 100%)' }}
      />
    </div>
  )
}
