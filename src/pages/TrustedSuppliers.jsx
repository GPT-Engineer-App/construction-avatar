import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const suppliers = [
  {
    name: "Supplier A",
    materials: "Steel, Concrete",
    labor: "Certified Welders, Electricians",
  },
  {
    name: "Supplier B",
    materials: "Wood, Glass",
    labor: "Carpenters, Glaziers",
  },
  {
    name: "Supplier C",
    materials: "Bricks, Tiles",
    labor: "Masons, Tilers",
  },
];

const TrustedSuppliers = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Trusted Suppliers</h1>
        <p className="text-xl text-muted-foreground">Our trusted partner suppliers of subcontractors</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suppliers.map((supplier, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{supplier.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Materials:</strong> {supplier.materials}</p>
              <p><strong>Labor:</strong> {supplier.labor}</p>
              <Badge variant="outline" className="mt-2">Trusted</Badge>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <Button onClick={() => navigate("/")} className="mt-4">
          Back to Home
        </Button>
      </section>
    </div>
  );
};

export default TrustedSuppliers;