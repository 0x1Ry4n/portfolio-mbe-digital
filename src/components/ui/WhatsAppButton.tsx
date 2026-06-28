import { useCallback, useEffect, useRef, useState } from 'react'

const PHONE = '5511999999999'
const MESSAGE = 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços da MBE Digital.'
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

const SIZE = 50 // diâmetro do botão (px)
const MARGIN = 24 // distância mínima das bordas
const DRAG_THRESHOLD = 6 // px de movimento para diferenciar arraste de clique
const STORAGE_KEY = 'mbe-wpp-pos'

interface Pos {
  x: number
  y: number
}

function clamp(pos: Pos): Pos {
  const maxX = window.innerWidth - SIZE - MARGIN
  const maxY = window.innerHeight - SIZE - MARGIN
  return {
    x: Math.min(Math.max(MARGIN, pos.x), Math.max(MARGIN, maxX)),
    y: Math.min(Math.max(MARGIN, pos.y), Math.max(MARGIN, maxY)),
  }
}

function defaultPos(): Pos {
  return { x: window.innerWidth - SIZE - MARGIN, y: window.innerHeight - SIZE - MARGIN }
}

export function WhatsAppButton() {
  const [pos, setPos] = useState<Pos | null>(null)
  const [dragging, setDragging] = useState(false)
  const movedRef = useRef(false)
  const offsetRef = useRef<Pos>({ x: 0, y: 0 })

  // Posição inicial (persistida ou canto inferior direito)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      setPos(clamp(stored ? (JSON.parse(stored) as Pos) : defaultPos()))
    } catch {
      setPos(defaultPos())
    }
  }, [])

  // Mantém o botão dentro da viewport ao redimensionar
  useEffect(() => {
    const onResize = () => setPos((p) => (p ? clamp(p) : p))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    movedRef.current = false
    offsetRef.current = {
      x: e.clientX - (pos?.x ?? 0),
      y: e.clientY - (pos?.y ?? 0),
    }
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [pos])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return
    const next = clamp({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    })
    if (
      Math.abs(e.clientX - offsetRef.current.x - (pos?.x ?? 0)) > DRAG_THRESHOLD ||
      Math.abs(e.clientY - offsetRef.current.y - (pos?.y ?? 0)) > DRAG_THRESHOLD
    ) {
      movedRef.current = true
    }
    setPos(next)
  }, [dragging, pos])

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    setDragging(false)
    e.currentTarget.releasePointerCapture(e.pointerId)
    if (pos) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pos))
      } catch {
        /* ignora */
      }
    }
    // Só abre o WhatsApp se foi um clique (sem arraste significativo)
    if (!movedRef.current) {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
    }
  }, [pos])

  if (!pos) return null

  return (
    <button
      type="button"
      aria-label="Conversar no WhatsApp"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: SIZE,
        height: SIZE,
        touchAction: 'none',
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      className="z-[90] flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 select-none"
    >
      {/* Anel de pulso bem sutil (só quando parado) */}
      {!dragging && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-[0.08] animate-ping" style={{ animationDuration: '5s' }} />
      )}
      <svg
        viewBox="0 0 24 24"
        width={26}
        height={26}
        fill="currentColor"
        aria-hidden="true"
        className="relative z-10 pointer-events-none"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    </button>
  )
}
