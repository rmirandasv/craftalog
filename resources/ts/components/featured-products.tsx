import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@inertiajs/react";

const featuredProducts = [
  {
    id: 1,
    name: "Limpiador Multiusos",
    category: "Limpieza",
    image: "/placeholder.svg?height=300&width=300",
    description: "Limpiador concentrado para múltiples superficies",
  },
  {
    id: 2,
    name: "Dispensador de Papel",
    category: "Baño",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dispensador de papel toalla de alta capacidad",
  },
  {
    id: 3,
    name: "Desinfectante Industrial",
    category: "Industrial",
    image: "/placeholder.svg?height=300&width=300",
    description: "Desinfectante de alto rendimiento para áreas industriales",
  },
  {
    id: 4,
    name: "Organizador de Escritorio",
    category: "Oficina",
    image: "/placeholder.svg?height=300&width=300",
    description: "Organizador modular para mantener el orden en la oficina",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Productos Destacados</h2>
          <Button
            variant="ghost"
            className="text-[#2C87CD] hover:text-[#1c6aa6]"
            asChild
          >
            <Link href="/productos">
              Ver todos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden group hover:shadow-md transition-shadow"
            >
              <Link href={`/productos/${product.id}`} className="block">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-[#2C87CD]">{product.category}</p>
                    <h3 className="font-semibold text-lg group-hover:text-[#2C87CD] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
