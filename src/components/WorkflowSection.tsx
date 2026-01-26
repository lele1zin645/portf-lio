import { Search, Lightbulb, PenTool, Code, TestTube } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Análise do Problema',
    description: 'Compreendo profundamente o contexto, os objetivos do negócio e as necessidades reais dos usuários.',
  },
  {
    icon: Lightbulb,
    title: 'Pesquisa e UX',
    description: 'Defino a estratégia de experiência, mapeio jornadas e identifico oportunidades de melhoria.',
  },
  {
    icon: PenTool,
    title: 'Wireframes e Protótipos',
    description: 'Crio protótipos no Figma para validar soluções antes do desenvolvimento.',
  },
  {
    icon: Code,
    title: 'Desenvolvimento React',
    description: 'Implemento interfaces com código limpo, componentes reutilizáveis e boas práticas.',
  },
  {
    icon: TestTube,
    title: 'Testes e Otimização',
    description: 'Realizo testes, otimizo performance e garanto qualidade antes da entrega.',
  },
];

export function WorkflowSection() {
  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(263_70%_58%/0.05)_0%,transparent_50%)]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Metodologia
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Processo de Trabalho
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma abordagem estruturada que combina pensamento estratégico, design centrado no usuário e desenvolvimento de qualidade.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 glass-card rounded-2xl p-6 md:max-w-md ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
