import {
  Share2,
  PenTool,
  Palette,
  Video,
  BarChart2,
  Globe,
  Search,
  Zap,
} from 'lucide-react'
import { useRevealAnimation } from '@/animations/useRevealAnimation'

const services = [
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description:
      'Planejamento editorial, produção de conteúdo e gestão completa das suas redes sociais.',
  },
  {
    icon: PenTool,
    title: 'Criação de Conteúdo',
    description:
      'Conteúdo estratégico que posiciona sua autoridade e conecta com seus pacientes.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Identidade visual profissional que transmite credibilidade e diferencia sua marca.',
  },
  {
    icon: Video,
    title: 'Produção Audiovisual',
    description:
      'Vídeos e fotos de alta qualidade para fortalecer sua presença digital.',
  },
  {
    icon: BarChart2,
    title: 'Tráfego Pago',
    description:
      'Campanhas no Meta Ads e Google Ads focadas em atrair pacientes qualificados.',
  },
  {
    icon: Globe,
    title: 'Landing Pages',
    description:
      'Páginas de alta conversão desenvolvidas para transformar visitas em consultas.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Posicionamento orgânico para que pacientes encontrem você no momento certo.',
  },
  {
    icon: Zap,
    title: 'Automação de Marketing',
    description:
      'Fluxos automáticos que nutrem relacionamentos e aumentam retenção.',
  },
]

export function Services() {
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="services"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
        backgroundColor: '#F8F8FB',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="reveal inline-flex items-center gap-2 text-xl  font-medium text-primary mb-6">
            <span className="w-6 h-px bg-primary" />
            O que fazemos
          </div>
          <h2
            className="reveal font-bold text-dark leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Serviços pensados para{' '}
            <span className="text-primary">profissionais da saúde.</span>
          </h2>
          <p className="reveal text-dark/60 text-lg leading-relaxed">
            Cada serviço é desenvolvido com a realidade do setor da saúde em mente.
            Entendemos suas demandas e restrições.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="reveal group bg-white rounded-2xl p-6 border border-dark/[0.06] hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-dark mb-3 text-base">{title}</h3>
              <p className="text-dark/55 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
