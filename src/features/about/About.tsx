import { CheckCircle } from 'lucide-react'
import { useRevealAnimation } from '@/animations/useRevealAnimation'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const differentials = [
  'Estratégias personalizadas para cada negócio',
  'Atendimento consultivo e próximo',
  'Foco em resultados mensuráveis',
  'Especialistas no setor da saúde',
  'Produção de conteúdo de alta qualidade',
  'Suporte durante todo o projeto',
]

export function About() {
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-section bg-white dark:bg-[var(--surface)]"
      style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-primary mb-6">
              <span className="w-6 h-px bg-primary" />
              Sobre a MBE Digital
            </div>

            <h2
              className="reveal font-bold text-dark dark:text-white leading-tight mb-8 text-balance"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Marketing especializado.<br />
              <span className="text-primary">Resultados consistentes.</span>
            </h2>

            <p className="reveal text-dark/60 dark:text-white/60 text-lg leading-relaxed mb-6">
              A MBE Digital é uma agência de marketing digital focada em profissionais
              e clínicas da área da saúde. Entendemos as particularidades do setor
              e desenvolvemos estratégias que geram resultado real.
            </p>

            <p className="reveal text-dark/60 dark:text-white/60 text-lg leading-relaxed mb-10">
              Priorizamos qualidade acima de volume. Cada cliente recebe atenção
              dedicada, com estratégias desenvolvidas especificamente para o seu negócio.
            </p>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="reveal inline-flex items-center gap-2 border border-dark/20 dark:border-white/20 text-dark dark:text-white font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Conhecer nosso trabalho
            </button>
          </div>

          <div className="reveal">
            <div className="bg-dark/[0.02] dark:bg-white/[0.05] border border-dark/[0.06] dark:border-white/10 rounded-3xl p-8 lg:p-10">
              <p className="text-sm font-medium text-dark/40 dark:text-white/40 mb-6 uppercase tracking-widest">
                Nossos diferenciais
              </p>
              <ul className="space-y-4">
                {differentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-dark/80 dark:text-white/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-dark/[0.06] dark:border-white/10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-black text-dark dark:text-white" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <AnimatedCounter value={50} suffix="+" />
                  </p>
                  <p className="text-sm text-dark/50 dark:text-white/50 mt-1">Clientes atendidos</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-dark dark:text-white" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <AnimatedCounter value={5} suffix=" anos" />
                  </p>
                  <p className="text-sm text-dark/50 dark:text-white/50 mt-1">De experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <AnimatedCounter value={300} prefix="+" suffix="%" />
                  </p>
                  <p className="text-sm text-dark/50 dark:text-white/50 mt-1">Crescimento médio</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-dark dark:text-white" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    <AnimatedCounter value={100} suffix="%" />
                  </p>
                  <p className="text-sm text-dark/50 dark:text-white/50 mt-1">Atendimento dedicado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
