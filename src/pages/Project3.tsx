import PageLayout from "@/components/PageLayout";

const Project3 = () => {
  return (
    <PageLayout title="Project 3" backTo="/projects">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-6">
          2026
        </p>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Measuring NBA Player Performance using Advanced NBA Statistics
        </h1>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
          Cleaned and prepared data then created various visualizations for analaysis, including a boxplot, regression plot, lineplot and heatmap.
        </p>

        <div className="w-full h-[80vh] border border-border rounded-sm overflow-hidden bg-background">
          <iframe
            src={`${import.meta.env.BASE_URL}projects/project-3/Project-3.html`}
            title="Project 3"
            className="w-full h-full"
            />
        </div>
      </div>
    </PageLayout>
  );
};

export default Project3;