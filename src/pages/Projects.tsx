import PageLayout from "@/components/PageLayout";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  date: string;
  stack: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "newsroom analytics dashboard",
    date: "2025",
    stack: "React · TypeScript · D3",
    description:
      "A dashboard that helps small newsrooms track story performance, reader engagement, and source diversity across publications.",
    repoUrl: "#",
  },
  {
    title: "interview transcription tool",
    date: "2024",
    stack: "Python · Whisper · FastAPI",
    description:
      "An open-source tool that transcribes long-form interviews with speaker diarization, designed for journalists working with sensitive audio.",
    repoUrl: "#",
  },
  {
    title: "public records explorer",
    date: "2024",
    stack: "Next.js · Postgres",
    description:
      "A searchable interface for FOIA documents, allowing reporters to surface patterns across thousands of pages of public records.",
    repoUrl: "#",
    liveUrl: "#",
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
            <article key={i} className="pb-10 border-b border-border last:border-b-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                  {p.stack}
                </span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body">
                  {p.date}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
                {p.title}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex items-center gap-5 text-sm font-body">
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-3.5 h-3.5" /> code
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
