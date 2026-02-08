const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground font-body">
          built with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
