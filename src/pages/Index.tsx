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
        className="text-base md:text-xl font-body text-muted-foreground tracking-wide text-center mb-4"
      >
        hi i'm
      </motion.p>

      <h1
        key={Date.now()}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground leading-[0.9] text-center mb-16"
      >
        {"george".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5 + i * 0.25 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          key="cursor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1,
            delay: 0.5 + "george".length * 0.25,
            repeat: Infinity,
            repeatDelay: 0.3,
            times: [0, 0.2, 0.8, 1],
          }}
          className="inline-block w-[3px] h-[0.7em] bg-foreground ml-1 align-middle"
        />
      </h1>

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
