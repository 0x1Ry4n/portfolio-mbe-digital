import { useRevealAnimation } from '@/animations/useRevealAnimation'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Analisamos sua presença digital atual, seus concorrentes e as oportunidades do mercado para entender o ponto de partida.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description:
      'Desenvolvemos um plano personalizado com metas claras, canais prioritários e ações específicas para o seu negócio.',
  },
  {
    number: '03',
    title: 'Execução',
    description:
      'Implementamos as ações com agilidade e qualidade, mantendo você atualizado em cada etapa do processo.',
  },
  {
    number: '04',
    title: 'Análise e Evolução',
    description:
      'Monitoramos resultados continuamente e ajustamos a estratégia para garantir crescimento consistente.',
  },
]

export function Process() {
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="process"
      className="bg-white"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-primary mb-6">
            <span className="w-6 h-px bg-primary" />
            Como trabalhamos
          </div>
          <h2
            className="reveal font-bold text-dark leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Processo claro.<br />
            <span className="text-primary">Resultados previsíveis.</span>
          </h2>
          <p className="reveal text-dark/60 text-lg leading-relaxed">
            Seguimos um método estruturado que garante eficiência, transparência
            e resultados mensuráveis em cada projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="reveal relative">
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-black text-primary/15 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <h3 className="font-bold text-dark text-xl mb-3">{step.title}</h3>
                <p className="text-dark/55 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
