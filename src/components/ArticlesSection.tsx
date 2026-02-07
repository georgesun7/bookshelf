import { ExternalLink } from "lucide-react";

interface Article {
  title: string;
  publication: string;
  date: string;
  description: string;
  url: string;
}

const sampleArticles: Article[] = [
  {
    title: "The Hidden Cost of Fast Fashion in Southeast Asia",
    publication: "The Guardian",
    date: "January 2025",
    description: "An investigative piece exploring the environmental and human impact of textile manufacturing across Cambodia and Vietnam.",
    url: "#",
  },
  {
    title: "Inside the Fight for Clean Water in Rural America",
    publication: "ProPublica",
    date: "November 2024",
    description: "A deep dive into the communities battling contaminated water supplies and the systemic failures that led to the crisis.",
    url: "#",
  },
  {
    title: "How AI is Reshaping Local Newsrooms",
    publication: "Columbia Journalism Review",
    date: "September 2024",
    description: "Examining the adoption of artificial intelligence tools in small-town newspapers and what it means for the future of local journalism.",
    url: "#",
  },
  {
    title: "The Migrant Workers Who Built a City",
    publication: "The New York Times",
    date: "July 2024",
    description: "Profiles of the laborers behind a booming metropolis, and the lives they've built far from home.",
    url: "#",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 font-body">
          Published Work
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Articles
        </h2>
        <div className="w-12 h-px bg-foreground mb-16" />

        <div className="space-y-0 divide-y divide-border">
          {sampleArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 first:pt-0 last:pb-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-body font-semibold">
                      {article.publication}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground font-body">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:opacity-70 transition-opacity duration-200 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
