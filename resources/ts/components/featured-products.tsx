import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { Product } from "@/types";

export default function FeaturedProducts({
  products,
}: {
  products: Product[];
}) {
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
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden group hover:shadow-md transition-shadow"
            >
              <Link href={`/productos/${product.id}`} className="block">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img
                    src={
                      product.images?.length ? product.images[0] : "/assets/400x400.svg"
                    }
                    alt={product.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-[#2C87CD]">
                      {product.categories ? product.categories[0]?.name : null}
                    </p>
                    <h3 className="font-semibold text-lg group-hover:text-[#2C87CD] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.short_description}
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
