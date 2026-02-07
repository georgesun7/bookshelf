const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-body">
          Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
