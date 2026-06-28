import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'full' | 'mark'
  color?: 'dark' | 'white' | 'primary'
  className?: string
  size?: number
}

export function LogoMark({ color = 'primary', size = 40, className }: Pick<LogoProps, 'color' | 'size' | 'className'>) {
  const fill = color === 'white' ? '#FFFFFF' : color === 'primary' ? '#2240C2' : '#201F2D'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Arco / bow */}
      <path
        d="M 12 58 Q 40 14 68 58"
        stroke={fill}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Haste vertical */}
      <line
        x1="40"
        y1="58"
        x2="40"
        y2="16"
        stroke={fill}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Ponta da seta */}
      <path
        d="M 31 28 L 40 13 L 49 28"
        stroke={fill}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Logo({ variant = 'full', color = 'dark', className, size = 36 }: LogoProps) {
  const textColor =
    color === 'white' ? 'text-white' : color === 'primary' ? 'text-primary' : 'text-dark dark:text-white'

  if (variant === 'mark') return <LogoMark color={color} size={size} className={className} />

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark color={color === 'dark' ? 'primary' : color} size={size} />
      <div className="flex flex-col leading-none">
        <span
          className={cn('font-black tracking-tight leading-none', textColor)}
          style={{ fontSize: size * 0.58, fontFamily: "'Moon Get', 'Archivo Black', sans-serif", letterSpacing: '-0.01em' }}
        >
          MBE
        </span>
        <span
          className={cn('font-medium tracking-[0.22em] leading-none mt-0.5', textColor, 'opacity-70')}
          style={{ fontSize: size * 0.24 }}
        >
          DIGITAL
        </span>
      </div>
    </div>
  )
}
