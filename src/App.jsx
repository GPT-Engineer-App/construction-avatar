import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
import ConstructionManagement from "./pages/ConstructionManagement.jsx";
import { ThreeDVisualization } from "./pages/ThreeDVisualization.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "3D Visualization",
    to: "/3d-visualization",
    icon: <Package2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/construction-management" element={<ConstructionManagement />} />
              <Route path="/3d-visualization" element={<ThreeDVisualization />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;