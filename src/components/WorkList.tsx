import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

interface WrittenWorkItem {
  title: string;
  category: string;
  date: string;
  description: string;
  url?: string;
  pdfUrl?: string;
  type: "article" | "writing";
}

const writtenWorks: WrittenWorkItem[] = [
  {
    title: "the hidden cost of fast fashion in southeast asia",
    type: "article",
    category: "investigative",
    date: "jan 2025",
    description: "An investigative piece exploring the environmental and human impact of textile manufacturing across Cambodia and Vietnam.",
    url: "#",
  },
  {
    title: "inside the fight for clean water in rural america",
    type: "article",
    category: "investigative",
    date: "nov 2024",
    description: "A deep dive into the communities battling contaminated water supplies and the systemic failures that led to the crisis.",
    url: "#",
  },
  {
    title: "long-form feature: life on the border",
    type: "writing",
    category: "narrative",
    date: "sep 2024",
    description: "A 5,000-word narrative on families navigating daily life along the US-Mexico border.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "how ai is reshaping local newsrooms",
    type: "article",
    category: "feature",
    date: "sep 2024",
    description: "Examining the adoption of artificial intelligence tools in small-town newspapers.",
    url: "#",
  },
  {
    title: "opinion: the future of independent media",
    type: "writing",
    category: "essay",
    date: "jul 2024",
    description: "An essay on the evolving landscape of journalism funding and editorial independence.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "the migrant workers who built a city",
    type: "article",
    category: "narrative",
    date: "jul 2024",
    description: "Profiles of the laborers behind a booming metropolis, and the lives they've built far from home.",
    url: "#",
  },
];

const typeIcon: Record<"article" | "writing", React.ReactNode> = {
  article: <ExternalLink className="w-3.5 h-3.5" />,
  writing: <FileText className="w-3.5 h-3.5" />,
};

const WrittenWorkRow = ({ item, index }: { item: WrittenWorkItem; index: number }) => {
  const isLink = item.type === "article" && item.url;

  const content = (
    <div className="flex items-start justify-between py-7 md:py-9 border-b border-border hover:bg-secondary/50 transition-colors px-1 -mx-1 group">
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
            {item.category}
          </span>
          <span className="text-[10px] text-muted-foreground">•</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body">
            {item.date}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground group-hover:opacity-70 transition-opacity mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {item.description}
        </p>
      </div>
      <span className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0">
        {typeIcon[item.type]}
      </span>
    </div>
  );

  if (isLink) {
    return (
      <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="block"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={item.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="block"
    >
      {content}
    </motion.a>
  );
};

const WorkList = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
            written work
          </h2>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body">
            <span className="flex items-center gap-1.5"><ExternalLink className="w-3 h-3" /> article</span>
            <span className="flex items-center gap-1.5"><FileText className="w-3 h-3" /> writing</span>
          </div>
        </div>
        <div>
          {writtenWorks.map((item, index) => (
            <WrittenWorkRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
