import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  { label: "about", path: "/about" },
  { label: "written", path: "/written" },
  { label: "video", path: "/video" },
  { label: "visual", path: "/visual" },
  { label: "projects", path: "/projects" },
];

const phrases = [
  "storytell",
  "learn about people",
  "solve problems",
  "write",
  "be a journalist",
];

const Index = () => {
  const [mountKey] = useState(() => Date.now());

  const [rotatingText, setRotatingText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (rotatingText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setRotatingText(currentPhrase.slice(0, rotatingText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (rotatingText.length > 0) {
        timeout = setTimeout(() => {
          setRotatingText(rotatingText.slice(0, -1));
        }, 60);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [rotatingText, phraseIndex, isDeleting]);

  const georgeDelay = 0.5 + "george".length * 0.18 + 0.15;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-2xl font-body text-muted-foreground tracking-wide text-center mb-0 translate-y-5" >
        hi i'm
      </motion.p>

      <h1
        key={mountKey}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground leading-[0.9] text-center mb-2"
      >
        {"george".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5 + i * 0.18 }}
          >
            {char}
          </motion.span>
        ))}
{/*
        <motion.span
          key="cursor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1,
            delay: 0.5 + "george".length * 0.18,
            repeat: Infinity,
            repeatDelay: 0.3,
            times: [0, 0.2, 0.8, 1],
          }}
          className="inline-block w-[3px] h-[0.7em] bg-foreground ml-1 align-middle"
        />
*/}

      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: georgeDelay }}
        className="mt-8 text-lg md:text-2xl font-body text-muted-foreground tracking-wide text-center mb-12"
      >
        and i love to {rotatingText}
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
          }}
          className="inline-block w-[2px] h-[0.8em] bg-muted-foreground ml-0.5 align-middle"
        />
      </motion.p>

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
