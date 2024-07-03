import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WeLearn = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Nós Aprendemos</h1>
        <p className="text-xl text-muted-foreground">Técnicas Avançadas para Planejamento e Execução de Projetos</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Introdução</h2>
        <p className="text-lg">
          Bem-vindo ao Nós Aprendemos, seu recurso para dominar técnicas avançadas de planejamento e execução de projetos. Nosso objetivo é fornecer a você o conhecimento e as ferramentas necessárias para levar suas habilidades de gerenciamento de projetos ao próximo nível.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Técnicas Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Metodologia Ágil</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aprenda a implementar práticas Ágeis para melhorar a flexibilidade e a capacidade de resposta em seus projetos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Projetos Lean</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descubra técnicas Lean para minimizar desperdícios e maximizar o valor em seus fluxos de trabalho de projetos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Método do Caminho Crítico</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Entenda o Método do Caminho Crítico para identificar as tarefas mais importantes e garantir a conclusão pontual do projeto.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Benefícios</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Maior eficiência do projeto</li>
          <li>Melhoria na colaboração da equipe</li>
          <li>Melhor gerenciamento de riscos</li>
          <li>Aumento nas taxas de sucesso do projeto</li>
        </ul>
      </section>

      <section className="text-center">
        <Button onClick={() => navigate("/contact")} className="mt-4">
          Entre em Contato para Saber Mais
        </Button>
      </section>
    </div>
  );
};

export default WeLearn;