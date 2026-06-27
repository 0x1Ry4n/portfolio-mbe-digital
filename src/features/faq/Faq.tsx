import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useRevealAnimation } from '@/animations/useRevealAnimation'
import { cn } from '@/lib/utils'
import type { FaqItem } from '@/types'

const faqs: FaqItem[] = [
  {
    question: 'Vocês trabalham com qualquer profissional da saúde?',
    answer:
      'Sim. Atendemos clínicas, médicos, dentistas, psicólogos, nutricionistas, fisioterapeutas e demais profissionais da saúde. Nossa expertise é específica para esse setor.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer:
      'Os primeiros resultados geralmente aparecem entre 30 e 90 dias, dependendo da estratégia. Tráfego pago tende a ser mais rápido, enquanto SEO e conteúdo orgânico têm crescimento progressivo e mais duradouro.',
  },
  {
    question: 'Como funciona o investimento mínimo?',
    answer:
      'Trabalhamos com pacotes personalizados de acordo com as necessidades e objetivos de cada cliente. Após o diagnóstico, apresentamos uma proposta específica para o seu negócio.',
  },
  {
    question: 'Vocês entendem as restrições éticas do setor da saúde?',
    answer:
      'Sim. Conhecemos e respeitamos as normas do CFM, CRO, CFN e demais conselhos profissionais. Todo conteúdo é produzido dentro das diretrizes éticas do setor.',
  },
  {
    question: 'Qual é o modelo de contrato?',
    answer:
      'Trabalhamos com contratos mensais recorrentes para serviços de gestão, e contratos por projeto para demandas específicas como branding e desenvolvimento de sites.',
  },
  {
    question: 'Como acompanho os resultados?',
    answer:
      'Entregamos relatórios periódicos com métricas relevantes para o seu objetivo. Além disso, mantemos contato próximo via reuniões regulares para discutir a evolução da estratégia.',
  },
]

interface FaqItemProps {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

function FaqAccordion({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-dark/[0.08] last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className={cn('font-medium text-base transition-colors', isOpen ? 'text-primary' : 'text-dark')}>
          {item.question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-dark/10 flex items-center justify-center">
          {isOpen ? (
            <Minus size={14} className="text-primary" />
          ) : (
            <Plus size={14} className="text-dark/50" />
          )}
        </span>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0',
        )}
      >
        <p className="text-dark/60 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const containerRef = useRevealAnimation()

  return (
    <section
      ref={containerRef}
      id="faq"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
        backgroundColor: '#F8F8FB',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-primary mb-6">
              <span className="w-6 h-px bg-primary" />
              Perguntas frequentes
            </div>
            <h2
              className="reveal font-bold text-dark leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Dúvidas?<br />
              <span className="text-primary">Respondemos.</span>
            </h2>
            <p className="reveal text-dark/60 text-lg leading-relaxed mb-8">
              Se tiver outras dúvidas, entre em contato.
              Atendemos de forma consultiva e sem compromisso.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="reveal inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Falar com especialista
            </button>
          </div>

          <div className="reveal bg-white rounded-3xl p-8 border border-dark/[0.06]">
            {faqs.map((faq, index) => (
              <FaqAccordion
                key={faq.question}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
