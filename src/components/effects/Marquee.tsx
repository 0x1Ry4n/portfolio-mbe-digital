import { LogoMark } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const items = [
  'Gestão de Redes Sociais',
  'Tráfego Pago',
  'Branding',
  'Produção Audiovisual',
  'Landing Pages',
  'SEO',
  'Automação de Marketing',
  'Criação de Conteúdo',
]

interface MarqueeProps {
  reverse?: boolean
  dark?: boolean
  className?: string
}

export function Marquee({ reverse = false, dark = false, className }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={cn(
        'w-full overflow-hidden py-5 border-y',
        dark
          ? 'bg-dark border-white/[0.06]'
          : 'bg-white dark:bg-[var(--section-alt)] border-dark/[0.06] dark:border-white/10',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'flex gap-10 w-max',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <LogoMark
              color={dark ? 'white' : 'primary'}
              size={16}
              className="opacity-40 dark:opacity-60"
            />
            <span
              className={cn(
                'text-sm font-medium whitespace-nowrap tracking-wide',
                dark ? 'text-white/60' : 'text-dark/50 dark:text-white/60',
              )}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
