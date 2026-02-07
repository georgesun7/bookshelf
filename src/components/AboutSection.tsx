import { Mail, Twitter, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 font-body">
          Background
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-12 h-px bg-foreground mb-16" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5">
            <p className="text-lg text-foreground font-body leading-relaxed">
              I'm a journalist and writer based in New York City, specializing in investigative reporting and long-form narrative journalism. My work focuses on social justice, environmental issues, and the intersection of technology and society.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Over the past decade, my reporting has appeared in publications including The Guardian, ProPublica, The New York Times, and Columbia Journalism Review. I've received recognition from the Society of Professional Journalists and was a finalist for the Livingston Award in 2023.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              When I'm not chasing a story, I mentor aspiring journalists and teach a workshop on investigative techniques at Columbia University's Graduate School of Journalism.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-body font-semibold mb-3">
                Expertise
              </h3>
              <ul className="space-y-1.5 text-sm text-foreground font-body">
                <li>Investigative Reporting</li>
                <li>Long-form Narrative</li>
                <li>Documentary Video</li>
                <li>Data Journalism</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-body font-semibold mb-3">
                Education
              </h3>
              <ul className="space-y-1.5 text-sm text-foreground font-body">
                <li>M.S. Journalism, Columbia University</li>
                <li>B.A. English, NYU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
