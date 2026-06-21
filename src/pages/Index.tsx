import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  { label: "about me", path: "/about" },
  { label: "written work", path: "/written" },
  { label: "video work", path: "/video" },
  { label: "visual work", path: "/visual" },
  { label: "projects", path: "/projects" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm md:text-base font-body text-muted-foreground tracking-wide text-center mb-4"
      >
        hi i'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground leading-[0.9] text-center mb-16"
      >
        (your name)
      </motion.h1>

      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-2xl"
      >
        {sections.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className="text-sm md:text-base font-body text-muted-foreground hover:text-foreground transition-colors underline-offset-8 hover:underline"
          >
            {s.label}
          </Link>
        ))}
      </motion.nav>
    </div>
  );
};

export default Index;
