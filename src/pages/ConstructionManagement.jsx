import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, Gauge, Bell } from "lucide-react";

const ConstructionManagement = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Gerenciamento de Projetos de Construção</h1>
        <p className="text-xl text-muted-foreground">Agendamento Detalhado e Monitoramento em Tempo Real</p>
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
              <p>Interagindo com o Software de Gerenciamento de Projetos</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Planeje e agende tarefas de forma eficiente.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monitoramento em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <Gauge className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Monitore o progresso em tempo real.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <Bell className="h-16 w-16 mx-auto" />
            <p className="text-center mt-4">Receba atualizações e alertas.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold">Benefícios</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Reduzir erros</li>
          <li>Minimizar atrasos</li>
          <li>Melhorar a eficiência</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>Para mais detalhes sobre o software, entre em contato conosco em <a href="mailto:info@gerenciamentodeconstrucao.com" className="text-primary">info@gerenciamentodeconstrucao.com</a></p>
      </footer>
    </div>
  );
};

export default ConstructionManagement;