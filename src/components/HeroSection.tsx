import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(263_70%_58%/0.08)_0%,transparent_50%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Leandro Drago</span>
          </h1>

          {/* Title */}
          <h2 className="animate-fade-in-up-delay-2 font-display text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
            Desenvolvedor Front-End  & <span className="text-foreground">UX/UI Designer</span>
          </h2>

          {/* Statement */}
          <p className="animate-fade-in-up-delay-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Construindo interfaces escaláveis com foco em performance, código limpo e design centrado no usuário. 
            Transformando ideias em experiências digitais memoráveis.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos">
                Ver Projetos
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contato">
                Entrar em Contato
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#sobre" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs font-medium uppercase tracking-widest">Explorar</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
