import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-50">
      <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Gerenciamento de Projetos de Construção</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-primary">Início</a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">More</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="/3d-visualization" className="text-primary">Visualização 3D</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/we-learn" className="text-primary">Nós Aprendemos</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/trusted-suppliers" className="text-primary">Fornecedores Confiáveis</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/historical-data-analysis" className="text-primary">Análise de Dados Históricos</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;