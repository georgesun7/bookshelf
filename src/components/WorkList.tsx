import { motion } from "framer-motion";
import { ExternalLink, FileText, Play } from "lucide-react";
import { useState } from "react";

type WorkType = "article" | "writing" | "video";

interface WorkItem {
  title: string;
  type: WorkType;
  category: string;
  date: string;
  description: string;
  url?: string;
  pdfUrl?: string;
  videoSrc?: string;
}

const works: WorkItem[] = [
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
    title: "voices from the valley",
    type: "video",
    category: "documentary",
    date: "oct 2024",
    description: "A short documentary exploring the agricultural communities of California's Central Valley.",
    videoSrc: "/videos/voices-from-the-valley.mp4",
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
    title: "the last print shop",
    type: "video",
    category: "documentary",
    date: "aug 2024",
    description: "Following the final days of a family-owned newspaper printing operation in the Midwest.",
    videoSrc: "/videos/the-last-print-shop.mp4",
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

const typeIcon: Record<WorkType, React.ReactNode> = {
  article: <ExternalLink className="w-3.5 h-3.5" />,
  writing: <FileText className="w-3.5 h-3.5" />,
  video: <Play className="w-3.5 h-3.5" />,
};

const WorkRow = ({ item, index }: { item: WorkItem; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (item.type === "article" && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={handleClick}
        className="w-full text-left group"
      >
        <div className="flex items-center justify-between py-4 md:py-5 border-b border-border hover:bg-secondary/50 transition-colors px-1 -mx-1">
          <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body w-20 flex-shrink-0 hidden md:block">
              {item.category}
            </span>
            <h3 className="text-base md:text-lg font-display font-semibold text-foreground group-hover:opacity-70 transition-opacity truncate">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 ml-4">
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body hidden sm:block">
              {item.date}
            </span>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {typeIcon[item.type]}
            </span>
          </div>
        </div>
      </button>

      {expanded && item.type === "writing" && item.pdfUrl && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-4 px-1">
            <p className="text-sm text-muted-foreground font-body mb-4">{item.description}</p>
            <iframe
              src={item.pdfUrl}
              className="w-full h-[500px] border border-border rounded-sm"
              title={item.title}
            />
          </div>
        </motion.div>
      )}

      {expanded && item.type === "video" && item.videoSrc && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-4 px-1">
            <p className="text-sm text-muted-foreground font-body mb-4">{item.description}</p>
            <video
              src={item.videoSrc}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video rounded-sm bg-secondary"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const WorkList = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
            selected work
          </h2>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body">
            <span className="flex items-center gap-1.5"><ExternalLink className="w-3 h-3" /> article</span>
            <span className="flex items-center gap-1.5"><FileText className="w-3 h-3" /> writing</span>
            <span className="flex items-center gap-1.5"><Play className="w-3 h-3" /> video</span>
          </div>
        </div>
        <div>
          {works.map((item, index) => (
            <WorkRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
