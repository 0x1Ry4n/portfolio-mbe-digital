import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNavbarAnimation } from '@/animations/useNavbarAnimation'
import { useTheme } from '@/hooks/useTheme'
import { scrollToSection } from '@/hooks/useLenis'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#testimonials' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useNavbarAnimation()
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    scrollToSection(href)
  }

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'data-[scrolled]:bg-white/90 data-[scrolled]:backdrop-blur-md data-[scrolled]:border-b data-[scrolled]:border-dark/5',
        'dark:data-[scrolled]:bg-dark/80 dark:data-[scrolled]:border-white/10',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="MBE Digital — início">
            <Logo color="dark" size={38} />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-dark/65 hover:text-dark dark:text-white/65 dark:hover:text-white text-[15px] font-medium transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Fale conosco
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark dark:text-white p-2"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-t border-dark/5 dark:border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-dark dark:text-white text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-6 w-full bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Fale conosco
          </button>
        </div>
      )}
    </header>
  )
}
