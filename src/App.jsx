import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Package2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
import ConstructionManagement from "./pages/ConstructionManagement.jsx";
import ThreeDVisualization from "./pages/ThreeDVisualization.jsx";
import WeLearn from "./pages/WeLearn.jsx";
import TrustedSuppliers from "./pages/TrustedSuppliers.jsx";
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
  {
    title: "We Learn",
    to: "/we-learn",
    icon: <Package2 className="h-4 w-4" />,
  },
  {
    title: "Trusted Suppliers",
    to: "/trusted-suppliers",
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
              <Route path="/we-learn" element={<WeLearn />} />
              <Route path="/trusted-suppliers" element={<TrustedSuppliers />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;