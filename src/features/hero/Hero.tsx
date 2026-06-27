import { ArrowRight, TrendingUp, Users, Award, Star } from 'lucide-react'
import { useHeroAnimation } from '@/animations/useHeroAnimation'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { LogoMark } from '@/components/ui/Logo'
import { MouseBackground } from '@/components/effects/MouseBackground'

const stats = [
  { icon: TrendingUp, value: 300, suffix: '%', prefix: '+', label: 'Crescimento médio' },
  { icon: Users, value: 50, suffix: '+', prefix: '', label: 'Clientes atendidos' },
  { icon: Award, value: 5, suffix: ' anos', prefix: '', label: 'De experiência' },
]

export function Hero() {
  const containerRef = useHeroAnimation()

  const handleCta = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{ paddingTop: 'var(--navbar-h)' }}
    >
      {/* Fundo interativo que segue o cursor */}
      <MouseBackground />

      {/* Logo mark decorativa — watermark discreta */}
      <div
        className="hero-bg-circle absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <LogoMark color="primary" size={480} className="opacity-[0.035]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl">

          {/* Badge animado com dot pulsante */}
          <div className="hero-eyebrow mb-8">
            <div className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/25 text-dark/75 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Vagas limitadas para novos clientes em 2026
            </div>
          </div>

          {/* Headline com word-by-word reveal */}
          <h1
            className="hero-title leading-[1.05] text-dark mb-7"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)' }}
          >
            {[
              { text: 'Resultados', accent: false },
              { text: 'reais.', accent: false },
              { text: 'Pacientes', accent: false },
              { text: 'reais.', accent: true },
            ].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <span className={`inline-block ${word.accent ? 'text-primary' : ''}`}>
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtítulo */}
          <p
            className="hero-subtitle text-dark/55 leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            Desenvolvemos estratégias de marketing digital específicas para clínicas,
            médicos e profissionais da saúde. Do conteúdo à conversão.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-3 mb-12">
            <button
              onClick={() => handleCta('#contact')}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleCta('#portfolio')}
              className="inline-flex items-center justify-center gap-2 border border-dark/12 text-dark/80 font-medium px-7 py-3.5 rounded-full hover:border-dark/25 hover:bg-dark/[0.02] transition-all text-sm"
            >
              Ver projetos
            </button>
          </div>

          {/* Stats com contadores animados */}
          <div className="flex flex-wrap gap-6 sm:gap-10 pb-10">
            {stats.map(({ icon: Icon, value, suffix, prefix, label }) => (
              <div key={label} className="hero-stats flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-black text-dark leading-none">
                    <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
                  </p>
                  <p className="text-xs text-dark/45 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prova social */}
          <div className="hero-stats flex flex-wrap items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {['#2240C2', '#7ED957', '#201F2D', '#2240C2', '#7ED957'].map((bg, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[11px] font-bold"
                  style={{ backgroundColor: bg }}
                  aria-hidden="true"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-accent text-accent" />
              ))}
              <span className="text-sm text-dark/50 ml-1">
                <span className="text-dark font-semibold">4.9</span>
                {' '}· 50+ clientes satisfeitos
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
