import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface WrittenWorkItem {
  title: string;
  date: string;
  description: string;
  href: string;
  external?: boolean;
}

const writtenWorks: WrittenWorkItem[] = [
  {
    title: "Artistic swimming’s beauty comes at a cost",
    date: "March 2026",
    description: "Athletes endure injuries, exhaustion and financial strain.",
    href: "/written/artistic-swimming",
  },
  {
    title: "Trinkets and Treasure",
    date: "June 2026",
    description: "Curating identity through collectibles.",
    href: "/written/trinkets-and-treasure",
  },

  {
    title: "Rallying Together",
    date: "March 2025",
    description: "Cultivating community across the net.",
    href: "https://nuazn.com/rallying-together",
    external: true,
  },

  {
    title: "By the Numbers: Defensive failures, lack of threes key to ’Cats men’s basketball losses",
    date: "January 2026",
    description: "by George Sun",
    href: "https://dailynorthwestern.com/2026/01/20/data-visualization/by-the-numbers-defensive-failures-lack-of-threes-key-to-cats-mens-basketball-losses/",
    external: true,
  },

  {
    title: "Sneakerheads at Northwestern collect, sell sneakers",
    date: "May 2025",
    description: "by George Sun",
    href: "https://dailynorthwestern.com/2025/05/28/ae/sneakerheads-at-northwestern-collect-sell-sneakers/",
    external: true,
  },
];

const WrittenWorkRow = ({ item, index }: { item: WrittenWorkItem; index: number }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-start justify-between py-7 md:py-9 border-b border-border hover:bg-secondary/50 transition-colors px-1 -mx-1 group"
    >
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-center gap-3 mb-2">
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
        <ExternalLink className="w-3.5 h-3.5" />
      </span>
    </motion.div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={item.href} className="block">
      {content}
    </Link>
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