import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <a
            href="#"
            className="text-sm font-body font-medium tracking-wide text-foreground"
          >
            your name
          </a>
          <button
            onClick={() => setInfoOpen(true)}
            className="text-sm font-body font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            info
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {infoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between h-14">
                <span className="text-sm font-body font-medium tracking-wide text-foreground">
                  your name
                </span>
                <button
                  onClick={() => setInfoOpen(false)}
                  className="text-sm font-body font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  close
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="pt-16 max-w-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  about
                </h2>
                <div className="space-y-5 mb-10">
                  <p className="text-base text-foreground font-body leading-relaxed">
                    I'm a journalist and writer based in New York City, specializing in investigative reporting and long-form narrative journalism. My work focuses on social justice, environmental issues, and the intersection of technology and society.
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Over the past decade, my reporting has appeared in publications including The Guardian, ProPublica, The New York Times, and Columbia Journalism Review. I've received recognition from the Society of Professional Journalists and was a finalist for the Livingston Award in 2023.
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    When I'm not chasing a story, I mentor aspiring journalists and teach a workshop on investigative techniques at Columbia University's Graduate School of Journalism.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
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

                <div className="flex items-center gap-6 text-sm font-body">
                  <a href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                    email
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                    twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                    linkedin
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
