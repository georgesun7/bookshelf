import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Written from "./pages/Written";
import Video from "./pages/Video";
import Visual from "./pages/Visual";
import Projects from "./pages/Projects";
import ArtisticSwimming from "./pages/ArtisticSwimming";
import TrinketsTreasure from "./pages/TrinketsTreasure";
import NBAShotQualityModel from "./pages/NBAShotQualityModel";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/written" element={<Written />} />
          <Route path="/video" element={<Video />} />
          <Route path="/visual" element={<Visual />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/written/artistic-swimming" element={<ArtisticSwimming />} />
          <Route path="/written/trinkets-and-treasure" element={<TrinketsTreasure />} />

          <Route path="/projects/nba-shot-quality-model" element={<NBAShotQualityModel />} />
          <Route path="/projects/project-2" element={<Project2 />} />
          <Route path="/projects/project-3" element={<Project3 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;