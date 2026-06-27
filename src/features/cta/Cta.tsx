import { ArrowRight, Mail, Phone, CheckCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRevealAnimation } from '@/animations/useRevealAnimation'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { LogoMark } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  specialty: z.string().min(2, 'Especialidade é obrigatória'),
  message: z.string().optional(),
})

type ContactForm = z.infer<typeof contactSchema>

export function Cta() {
  const containerRef = useRevealAnimation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Form data:', data)
    reset()
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="bg-dark relative overflow-hidden"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #2240C2 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7ED957 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Logo mark decorativa */}
      <div className="absolute bottom-0 right-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <LogoMark color="white" size={380} className="opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xl font-medium text-accent mb-6">
              <span className="w-6 h-px bg-accent" />
              Vamos conversar
            </div>
            <h2
              className="reveal font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Solicite um diagnóstico{' '}
              <span className="text-accent">gratuito.</span>
            </h2>
            <p className="reveal text-white/60 text-lg leading-relaxed mb-10">
              Entendemos sua situação atual e mostramos o que é possível alcançar.
              Sem compromisso. Sem pressão.
            </p>

            <div className="reveal space-y-3 mb-10">
              {[
                'Diagnóstico gratuito e sem compromisso',
                'Resposta em até 24 horas úteis',
                'Estratégia personalizada para sua área',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="reveal space-y-4">
              <a
                href="mailto:contato@mbedigital.com.br"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} className="text-accent" />
                contato@mbedigital.com.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} className="text-accent" />
                (11) 99999-9999
              </a>
            </div>
          </div>

          <div className="reveal">
            {isSubmitSuccessful ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={24} className="text-accent" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                <p className="text-white/50 text-sm">Retornaremos em breve.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
                noValidate
              >
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                    Nome completo
                  </label>
                  <input
                    {...register('name')}
                    placeholder="Dr. João Silva"
                    className={cn(
                      'w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-primary transition-colors',
                      errors.name ? 'border-red-400/60' : 'border-white/10',
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="joao@clinica.com.br"
                    className={cn(
                      'w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-primary transition-colors',
                      errors.email ? 'border-red-400/60' : 'border-white/10',
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                    Especialidade / Área
                  </label>
                  <input
                    {...register('specialty')}
                    placeholder="Ex: Dermatologia, Psicologia..."
                    className={cn(
                      'w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-primary transition-colors',
                      errors.specialty ? 'border-red-400/60' : 'border-white/10',
                    )}
                  />
                  {errors.specialty && (
                    <p className="text-red-400 text-xs mt-1">{errors.specialty.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    {...register('message')}
                    placeholder="Conte um pouco sobre sua situação atual..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  strength={0.2}
                  className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Solicitar diagnóstico gratuito
                      <ArrowRight size={16} />
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
