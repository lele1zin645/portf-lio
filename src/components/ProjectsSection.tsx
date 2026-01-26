import { ExternalLink, Github, Layers, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Dashboard',
    context: 'Plataforma de gestão para lojistas online com métricas em tempo real',
    problem: 'Lojistas precisavam de uma visão unificada de vendas, estoque e clientes',
    solution: 'Dashboard interativo com gráficos dinâmicos, filtros avançados e notificações',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    highlights: [
      { icon: Zap, label: 'Performance otimizada' },
      { icon: Users, label: 'UX centrada no usuário' },
      { icon: Layers, label: 'Arquitetura escalável' },
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'App de Produtividade',
    context: 'Aplicação para gestão de tarefas e projetos pessoais',
    problem: 'Usuários precisavam de uma forma simples de organizar suas atividades diárias',
    solution: 'Interface minimalista com drag-and-drop, categorias e lembretes',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    highlights: [
      { icon: Zap, label: 'Interações fluidas' },
      { icon: Users, label: 'Design intuitivo' },
      { icon: Layers, label: 'Componentes modulares' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Landing Page SaaS',
    context: 'Página de conversão para startup de tecnologia',
    problem: 'Empresa precisava comunicar valor e converter visitantes em leads',
    solution: 'Design premium com animações sutis, seções estratégicas e formulários otimizados',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    highlights: [
      { icon: Zap, label: 'Carregamento rápido' },
      { icon: Users, label: 'Alta conversão' },
      { icon: Layers, label: 'SEO otimizado' },
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.05)_0%,transparent_60%)]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cases que demonstram minha capacidade de resolver problemas reais com soluções técnicas e design de qualidade.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Placeholder */}
                <div className={`relative h-64 md:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.3)_100%)]" />
                  <div className="relative text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-background/20 backdrop-blur flex items-center justify-center">
                      <Layers className="w-10 h-10 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">
                      Projeto {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Contexto</span>
                      <p className="text-muted-foreground mt-1">{project.context}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Problema</span>
                      <p className="text-muted-foreground mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Solução</span>
                      <p className="text-muted-foreground mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight.label}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <highlight.icon className="w-4 h-4 text-primary" />
                        {highlight.label}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="default" size="sm">
                      Ver Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      GitHub
                      <Github className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
