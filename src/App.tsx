import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppCreator from "./pages/AppCreator";
import Workflow from "./pages/Workflow";
import Communication from "./pages/Communication";
import BotBuilder from "./pages/BotBuilder";
import MISBuilder from "./pages/MISBuilder";
import DigitalLearning from "./pages/DigitalLearning";
import VideoAnalytics from "./pages/VideoAnalytics";
import DataAnalytics from "./pages/DataAnalytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app-creator" element={<AppCreator />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/bot-builder" element={<BotBuilder />} />
          <Route path="/mis-builder" element={<MISBuilder />} />
          <Route path="/learning" element={<DigitalLearning />} />
          <Route path="/video-analytics" element={<VideoAnalytics />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
