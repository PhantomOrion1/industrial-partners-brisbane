import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JohnLegg from "./pages/JohnLegg";

const queryClient = new QueryClient();

// Conditionally set basename for different deployment environments
const basename = import.meta.env.PROD && !import.meta.env.VITE_VERCEL 
  ? "/industrial-partners-brisbane" 
  : "";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-principle" element={<JohnLegg />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
