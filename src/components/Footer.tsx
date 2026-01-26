export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">
              LD<span className="text-primary">.</span>
            </span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Leandro Drago
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Desenvolvido com <span className="text-primary">♥</span> e muito energético.
          </p>
        </div>
      </div>
    </footer>
  );
}
