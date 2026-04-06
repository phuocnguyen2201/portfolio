const Footer = () => {
  return (
    <footer className="border-t-[3px] border-border bg-card" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-heading font-bold text-xl mb-2">
              <span className="text-primary">◆</span> Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Building bold digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">Contact</h4>
            <a href="mailto:hello@alexchen.dev" className="brutal-btn-primary text-xs">
              hello@alexchen.dev
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t-[2px] border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
