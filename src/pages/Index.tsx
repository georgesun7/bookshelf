import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkList />
      <Footer />
    </div>
  );
};

export default Index;
