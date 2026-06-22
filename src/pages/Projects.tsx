import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  date: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "NBA Shot Quality Model",
    date: "2026",
    description:
      "Using the NBA API, train a Gradient Boosting Model to predict if a player's shot will go in or not, considering distance, defender distance and more.",
    href: "/projects/nba-shot-quality-model",
  },
  {
    title: "Measuring NBA Player Winning Impact using Advanced Statistics",
    date: "2026",
    description: "Trained a Ridge regression model involving a variable number of predictors, then used RMSE and MAE to evaluate accuracy of model.",
    href: "/projects/project-2",
  },
  {
    title: "Measuring NBA Player Performance using Advanced NBA Statistics",
    date: "2025",
    description: "Cleaned and prepared data then created various visualizations for analaysis, including a boxplot, regression plot, lineplot and heatmap.",
    href: "/projects/project-3",
  },
];

const Projects = () => {
  return (
    <PageLayout title="projects">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-10">
          projects
        </h1>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <Link to={p.href} key={i} className="block group">
              <article className="pb-10 border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors px-1 -mx-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body">
                    {p.date}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                      {p.title}
                    </h2>

                    <p className="text-muted-foreground font-body leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors mt-2 flex-shrink-0" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;