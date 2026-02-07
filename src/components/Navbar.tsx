const navItems = [
  { label: "Work", href: "#articles" },
  { label: "Writing", href: "#writing" },
  { label: "Video", href: "#video" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-semibold tracking-tight text-foreground">
          Your Name
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:your@email.com"
          className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
