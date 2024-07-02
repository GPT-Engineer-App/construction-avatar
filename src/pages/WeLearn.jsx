import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WeLearn = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">We Learn</h1>
        <p className="text-xl text-muted-foreground">Advanced Techniques for Project Planning and Execution</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p className="text-lg">
          Welcome to We Learn, your go-to resource for mastering advanced techniques in project planning and execution. Our goal is to provide you with the knowledge and tools you need to take your project management skills to the next level.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Key Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Agile Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn how to implement Agile practices to improve flexibility and responsiveness in your projects.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lean Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover Lean techniques to minimize waste and maximize value in your project workflows.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Critical Path Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Understand the Critical Path Method to identify the most important tasks and ensure timely project completion.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Enhanced project efficiency</li>
          <li>Improved team collaboration</li>
          <li>Better risk management</li>
          <li>Increased project success rates</li>
        </ul>
      </section>

      <section className="text-center">
        <Button onClick={() => navigate("/contact")} className="mt-4">
          Contact Us to Learn More
        </Button>
      </section>
    </div>
  );
};

export default WeLearn;