import { Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { scrollToSection, scrollToTop } from '@/hooks/useLenis'

const footerLinks = {
  navegacao: [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Processo', href: '#process' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  servicos: [
    { label: 'Redes Sociais', href: '#services' },
    { label: 'Tráfego Pago', href: '#services' },
    { label: 'Branding', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'Automação', href: '#services' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mbedigital', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/mbedigital', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@mbedigital.com.br', label: 'E-mail' },
]

export function Footer() {
  const handleNavClick = (href: string) => scrollToSection(href)

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" aria-label="MBE Digital — início">
              <Logo color="white" size={36} />
            </a>
            <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
              Marketing digital especializado para profissionais e clínicas da área da saúde.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  <Icon size={15} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white/40 text-xs font-medium uppercase tracking-widest mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/40 text-xs font-medium uppercase tracking-widest mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/40 text-xs font-medium uppercase tracking-widest mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@mbedigital.com.br"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  contato@mbedigital.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                >
                  Solicitar diagnóstico
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} MBE Digital. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
          >
            <ArrowUp size={15} className="text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  )
}
