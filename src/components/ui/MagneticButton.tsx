import { type ReactNode } from 'react'
import { useMagneticButton } from '@/animations/useMagneticButton'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  strength?: number
}

export function MagneticButton({
  children,
  onClick,
  className,
  type = 'button',
  disabled,
  strength,
}: MagneticButtonProps) {
  const ref = useMagneticButton(strength)

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn('transition-colors', className)}
    >
      {children}
    </button>
  )
}
