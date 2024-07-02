import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to Construction Project Management</h1>
      <p className="text-2xl text-gray-600">Your solution for detailed scheduling and real-time monitoring.</p>
      <Button onClick={() => navigate("/construction-management")} className="mt-4">
        Get Started
      </Button>
    </div>
  );
};

export default Index;