import PageLayout from "@/components/PageLayout";
import { Mail, Twitter, Linkedin } from "lucide-react";

// Add photo URLs to display in the gallery below
const photos: string[] = [
  // "/about/photo-1.jpg",
];

const About = () => {
  return (
    <PageLayout title="about me">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-10">
          about me
        </h1>

        <div className="space-y-5 mb-12">
          <p className="text-lg text-foreground font-body leading-relaxed">
            I'm a journalist and writer based in New York City, specializing in investigative reporting and long-form narrative journalism.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Over the past decade, my reporting has appeared in publications including The Guardian, ProPublica, The New York Times, and Columbia Journalism Review.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            When I'm not chasing a story, I mentor aspiring journalists and teach a workshop on investigative techniques.
          </p>
        </div>

        {photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full aspect-square object-cover rounded-sm"
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body font-semibold mb-3">
              expertise
            </h3>
            <ul className="space-y-1.5 text-sm text-foreground font-body">
              <li>investigative reporting</li>
              <li>long-form narrative</li>
              <li>documentary video</li>
              <li>data journalism</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body font-semibold mb-3">
              education
            </h3>
            <ul className="space-y-1.5 text-sm text-foreground font-body">
              <li>M.S. Journalism, Columbia University</li>
              <li>B.A. English, NYU</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-body pt-6 border-t border-border">
          <a href="mailto:your@email.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" /> email
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" /> twitter
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" /> linkedin
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
