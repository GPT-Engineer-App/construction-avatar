import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, Gauge, Bell } from "lucide-react";

const ConstructionManagement = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Construction Project Management</h1>
        <p className="text-xl text-muted-foreground">Detailed Scheduling and Real-Time Monitoring</p>
      </header>

      <section className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Avatar className="w-32 h-32">
                <AvatarImage src="/images/construction-worker.png" alt="Construction Worker" />
                <AvatarFallback>Worker</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Interacting with Project Management Software</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Plan and schedule tasks efficiently.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <Gauge className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Monitor progress in real-time.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Bell className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Receive updates and alerts.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Reduce errors</li>
          <li>Minimize delays</li>
          <li>Improve efficiency</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>For more details about the software, contact us at <a href="mailto:info@constructionmanagement.com" className="text-primary">info@constructionmanagement.com</a></p>
      </footer>
    </div>
  );
};

export default ConstructionManagement;