import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#2C87CD] to-[#1c6aa6] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Distribuidora de Productos de Alta Calidad
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl">
            Ofrecemos una amplia gama de productos para empresas y negocios.
            Solicite una cotización personalizada según sus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-[#2C87CD] hover:bg-gray-100"
              asChild
            >
              <Link href="/productos">
                Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <img
              src="/assets/500.svg"
              alt="Productos Purifasa"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
