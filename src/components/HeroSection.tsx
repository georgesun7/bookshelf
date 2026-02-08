import FluidWave from "./FluidWave";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <FluidWave />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          Journalist &amp; Writer
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Your Name
        </h1>
        <div className="w-16 h-px bg-foreground mx-auto mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-xl mx-auto">
          Telling stories that matter. Investigative journalism, long-form writing, and documentary video.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
