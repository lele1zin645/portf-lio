import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.03)_0%,transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Minha Jornada
            </h2>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Iniciei minha trajetória profissional aos 14 anos, desenvolvendo desde cedo habilidades em vendas, comunicação e relacionamento interpessoal, atuando na comercialização de produtos como aromatizadores automotivos e itens da Hinode. Essa experiência foi essencial para a construção da minha mentalidade empreendedora, senso de responsabilidade e foco em resultados.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aos 17 anos, ingressei no programa Jovem Aprendiz do SENAC, atuando como Auxiliar Administrativo na Renault, onde tive contato direto com o ambiente corporativo, organização de processos, trabalho em equipe e disciplina profissional, fortalecendo minha postura e visão de mercado.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Após essa etapa, iniciei minha transição definitiva para a área de Tecnologia e Marketing, onde descobri minha verdadeira vocação. Comecei criando artes no Canva e trabalhando com tráfego pago, o que despertou meu interesse por estratégias digitais, performance e criatividade aplicada a resultados reais.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Atualmente, aos 19 anos, curso Análise e Desenvolvimento de Sistemas, ampliando significativamente meus conhecimentos técnicos. Nesse período, aprofundei minhas habilidades em Figma, Canva e linguagens de programação, integrando design, tecnologia e marketing de forma estratégica.
              </p>
              
              <p className="text-foreground leading-relaxed font-medium">
                Sou movido por aprendizado constante, com facilidade de adaptação, visão criativa e forte compromisso com crescimento profissional. Busco oportunidades onde eu possa gerar impacto real, criando soluções modernas, funcionais e centradas no usuário por meio da tecnologia e do marketing digital.
              </p>
            </div>

            {/* Education Card */}
            <div className="mt-10 pt-10 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      Análise e Desenvolvimento de Sistemas
                    </h3>
                    <p className="text-muted-foreground">UniSenac</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 md:ml-auto text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pelotas/RS
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Em andamento
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
