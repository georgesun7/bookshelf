import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  backTo?: string;
}

const PageLayout = ({ title, children, backTo = "/" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <Link
            to={backTo}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            back
          </Link>
{/*
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body">
            {title}
          </span>
*/}
        </div>
      </nav>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PageLayout;
