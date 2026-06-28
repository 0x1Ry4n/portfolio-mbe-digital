import { Quote } from 'lucide-react'
import { useRevealAnimation } from '@/animations/useRevealAnimation'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    name: 'Dra. Ana Beatriz',
    role: 'Dermatologista',
    company: 'Clínica AB Dermatologia',
    content:
      'A MBE Digital transformou minha presença online. Em 6 meses, minha agenda estava completamente lotada e eu tinha filas de espera. O atendimento é próximo e estratégico.',
  },
  {
    name: 'Dr. Marcos Oliveira',
    role: 'Psicólogo Clínico',
    company: 'Instituto MO',
    content:
      'Antes da MBE Digital eu tinha dificuldade em atrair novos pacientes. Hoje tenho uma presença digital sólida e consistente. O investimento se paga em poucos meses.',
  },
  {
    name: 'Dra. Fernanda Lima',
    role: 'Nutricionista Esportiva',
    company: 'FL Nutrição',
    content:
      'O diferencial da MBE é entender o setor da saúde. Eles sabem o que pode e o que não pode ser dito. O resultado é uma comunicação profissional e eficiente.',
  },
  {
    name: 'Dr. Rafael Santos',
    role: 'Ortopedista',
    company: 'Clínica Ortopédica Santos',
    content:
      'Triplicamos os agendamentos online em 4 meses. A equipe é comprometida, transparente e entrega o que promete. Recomendo a qualquer colega da área da saúde.',
  },
]

export function Testimonials() {
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="bg-white dark:bg-[#1c1b26]"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-primary mb-6">
            <span className="w-6 h-px bg-primary" />
            Depoimentos
          </div>
          <h2
            className="reveal font-bold text-dark dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            O que dizem nossos{' '}
            <span className="text-primary">clientes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="reveal bg-dark/[0.02] dark:bg-white/[0.02] border border-dark/[0.06] dark:border-white/[0.06] rounded-3xl p-8 flex flex-col"
            >
              <Quote
                size={28}
                className="text-primary/20 mb-5 shrink-0"
                aria-hidden="true"
              />

              <p className="text-dark/70 dark:text-white/70 text-base leading-relaxed mb-8">
                {t.content}
              </p>

              <footer className="flex items-center gap-4 mt-auto">
                <div
                  className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base shrink-0"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-dark dark:text-white text-sm">
                    {t.name}
                  </cite>
                  <p className="text-dark/50 dark:text-white/50 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
