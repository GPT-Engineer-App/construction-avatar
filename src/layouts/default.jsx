import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-50">
      <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Construction Project Management</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-primary">Home</a>
          <a href="/3d-visualization" className="text-primary">3D Visualization</a>
          <a href="/we-learn" className="text-primary">We Learn</a>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;
