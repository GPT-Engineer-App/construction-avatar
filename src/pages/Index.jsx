import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Construction Project Management</h1>
      <p className="text-xl text-muted-foreground">Your solution for detailed scheduling and real-time monitoring.</p>
      <Button onClick={() => navigate("/construction-management")} className="mt-4">
        Get Started
      </Button>
    </div>
  );
};

export default Index;