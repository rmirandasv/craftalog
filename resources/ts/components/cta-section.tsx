import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">¿Listo para hacer su pedido?</h2>
          <p className="text-lg text-gray-600">
            Contáctenos para obtener una cotización personalizada según sus
            necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="/productos">Ver Catálogo Completo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
