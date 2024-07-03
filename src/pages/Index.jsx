import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800">Bem-vindo ao Gerenciamento de Projetos de Construção</h1>
      <p className="text-2xl text-gray-600">Sua solução para agendamento detalhado e monitoramento em tempo real.</p>
      <Button onClick={() => navigate("/construction-management")} className="mt-4">
        Começar
      </Button>
    </div>
  );
};

export default Index;