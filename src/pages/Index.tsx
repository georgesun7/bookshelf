import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkList />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
