import PageLayout from "@/components/PageLayout";

const NBAShotQualityModel = () => {
  return (
    <PageLayout title="NBA Shot Quality Model" backTo="/projects">
      <article className="max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-6">
          2026
        </p>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          NBA Shot Quality Model
        </h1>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
          Using the NBA API, train a Gradient Boosting Model to predict if a player's shot will go in or not, considering distance, defender distance and more.
        </p>

        <div className="space-y-6 text-foreground font-body leading-relaxed">
          <p>
            Currently a work in progress... This machine learning model will generate a shot performance chart for players. 
          </p>

        </div>
      </article>
    </PageLayout>
  );
};

export default NBAShotQualityModel;