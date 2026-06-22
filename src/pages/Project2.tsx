import PageLayout from "@/components/PageLayout";

const Project2 = () => {
  return (
    <PageLayout title="Project 2" backTo="/projects">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-6">
          2026
        </p>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Measuring NBA Player Winning Impact using Advanced Statistics
        </h1>

        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
          Trained a Ridge regression model involving a variable number of predictors, then used RMSE and MAE to evaluate accuracy of model.
        </p>

        <div className="w-full h-[80vh] border border-border rounded-sm overflow-hidden bg-background">
          <iframe
            src={`${import.meta.env.BASE_URL}projects/project-2/Project-2.html`}
            title="Project 2"
            className="w-full h-full"
            />
        </div>
      </div>
    </PageLayout>
  );
};

export default Project2;