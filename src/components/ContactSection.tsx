import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'leandroldl49@gmail.com',
    href: 'mailto:leandroldl49@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 53 99175-6041',
    href: 'https://wa.me/5553991756041',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leandro-lemes-095318244',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/lele1zin645?tab=overview&from=2025-12-01&to=2025-12-31',
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(217_91%_60%/0.08)_0%,transparent_60%)]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estou disponível para novos projetos, oportunidades e colaborações. Entre em contato e vamos criar algo incrível juntos.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl p-6 hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-muted-foreground">{contact.label}</span>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Pelotas, RS - Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
