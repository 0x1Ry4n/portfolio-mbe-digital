import { ArrowUpRight } from 'lucide-react'
import { useRevealAnimation } from '@/animations/useRevealAnimation'

const projects = [
  {
    category: 'Branding + Redes Sociais',
    title: 'Clínica Dermatológica Premium',
    description:
      'Reposicionamento de marca, criação de identidade visual e gestão completa das redes sociais. +240% de seguidores em 6 meses.',
    tags: ['Branding', 'Instagram', 'Conteúdo'],
    highlight: '+240%',
    highlightLabel: 'crescimento',
  },
  {
    category: 'Tráfego Pago + Landing Page',
    title: 'Consultório de Psicologia',
    description:
      'Campanha no Meta Ads com landing page de alta conversão. Agenda lotada em menos de 30 dias.',
    tags: ['Meta Ads', 'Landing Page', 'Conversão'],
    highlight: '30 dias',
    highlightLabel: 'para lotar agenda',
  },
  {
    category: 'SEO + Conteúdo',
    title: 'Clínica de Nutrição Esportiva',
    description:
      'Estratégia de SEO e conteúdo orgânico que triplicou o tráfego do site e aumentou as consultas.',
    tags: ['SEO', 'Blog', 'Google'],
    highlight: '3x',
    highlightLabel: 'mais tráfego',
  },
  {
    category: 'Gestão Completa',
    title: 'Hospital Dia Particular',
    description:
      'Gestão integrada de todas as plataformas digitais, tráfego pago e produção audiovisual.',
    tags: ['Gestão Completa', 'Vídeo', 'Ads'],
    highlight: '+180%',
    highlightLabel: 'em agendamentos',
  },
]

export function Portfolio() {
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="portfolio"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
        backgroundColor: '#F8F8FB',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-primary mb-6">
              <span className="w-6 h-px bg-primary" />
              Portfólio
            </div>
            <h2
              className="reveal font-bold text-dark leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Projetos que geram{' '}
              <span className="text-primary">resultados reais.</span>
            </h2>
          </div>
          <p className="reveal text-dark/60 text-base max-w-sm leading-relaxed">
            Cada projeto é único. Cada estratégia é desenvolvida
            do zero para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal group bg-white rounded-3xl p-8 border border-dark/[0.06] hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium text-primary/80 uppercase tracking-widest">
                  {project.category}
                </span>
                <div className="w-9 h-9 rounded-full border border-dark/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-black text-primary/12 leading-none mb-2 select-none">
                  {project.highlight}
                </div>
                <p className="text-xs text-dark/40 uppercase tracking-widest">
                  {project.highlightLabel}
                </p>
              </div>

              <h3 className="font-bold text-dark text-xl mb-3">{project.title}</h3>
              <p className="text-dark/55 text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-dark/50 border border-dark/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
