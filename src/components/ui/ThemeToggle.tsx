import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Theme } from '@/hooks/useTheme'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  className?: string
}

/**
 * Botão moderno de alternância de tema: trilho deslizante com
 * transição suave entre os ícones de sol e lua.
 */
export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      onClick={onToggle}
      className={cn(
        'relative inline-flex h-9 w-[68px] items-center rounded-full p-1',
        'border transition-colors duration-300 focus:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',
        isDark
          ? 'border-white/10 bg-white/10 focus-visible:ring-offset-dark'
          : 'border-dark/10 bg-dark/5 focus-visible:ring-offset-white',
        className,
      )}
    >
      {/* Ícones de fundo */}
      <Sun
        size={15}
        className={cn(
          'absolute left-[9px] transition-opacity duration-300',
          isDark ? 'text-white/30 opacity-100' : 'text-accent opacity-0',
        )}
      />
      <Moon
        size={15}
        className={cn(
          'absolute right-[9px] transition-opacity duration-300',
          isDark ? 'text-primary opacity-0' : 'text-dark/30 opacity-100',
        )}
      />

      {/* Knob deslizante */}
      <span
        className={cn(
          'relative z-10 flex h-7 w-7 items-center justify-center rounded-full shadow-sm',
          'transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isDark ? 'translate-x-[32px] bg-dark' : 'translate-x-0 bg-white',
        )}
      >
        <Sun
          size={15}
          className={cn(
            'absolute text-accent transition-all duration-300',
            isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
          )}
        />
        <Moon
          size={15}
          className={cn(
            'absolute text-white transition-all duration-300',
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0',
          )}
        />
      </span>
    </button>
  )
}
