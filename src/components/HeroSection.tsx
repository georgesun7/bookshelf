import { motion } from "framer-motion";
import FluidWave from "./FluidWave";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
      <FluidWave />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4 font-body"
        >
          journalist &amp; writer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground leading-[0.9]"
        >
          your name
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
