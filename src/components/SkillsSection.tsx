import { Code2, Palette, Layers, Zap, Shield, Layout } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    name: 'React',
    description: 'Hooks, componentes reutilizáveis, arquitetura escalável',
    level: 85,
  },
  {
    icon: Zap,
    name: 'JavaScript',
    description: 'ES6+, lógica avançada, fluxos assíncronos, APIs',
    level: 90,
  },
  {
    icon: Shield,
    name: 'TypeScript',
    description: 'Tipagem forte, manutenibilidade, segurança',
    level: 80,
  },
  {
    icon: Layers,
    name: 'HTML5',
    description: 'Semântica, acessibilidade, SEO',
    level: 95,
  },
  {
    icon: Layout,
    name: 'CSS3 / Tailwind',
    description: 'Layouts responsivos, design systems, animações',
    level: 90,
  },
  {
    icon: Palette,
    name: 'Figma',
    description: 'Fluxos UX, wireframes, sistemas de UI',
    level: 85,
  },
];

export function SkillsSection() {
  return (
    <section id="competencias" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(263_70%_58%/0.05)_0%,transparent_60%)]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Stack Técnica
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Competências Técnicas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar interfaces modernas, performáticas e escaláveis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group glass-card rounded-2xl p-6 hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiência</span>
                  <span className="text-foreground font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
