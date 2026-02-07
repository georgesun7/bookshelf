import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import WritingSection from "@/components/WritingSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ArticlesSection />
      <WritingSection />
      <VideoSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
