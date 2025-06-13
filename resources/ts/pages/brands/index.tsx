import AppLayout from "@/components/layouts/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { Brand, Paginated } from "@/types";
import { Pagination } from "@/components/pagination";

export default function BrandsPage({ brands }: { brands: Paginated<Brand> }) {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Nuestras Marcas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las mejores marcas del mercado para ofrecerle
            productos de alta calidad para su negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {brands.data.map((brand) => (
            <Card
              key={brand.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/marcas/${brand.slug}`}>
                <div className="p-6 flex justify-center items-center h-32 bg-gray-50">
                  <img
                    src={brand.logo || "/assets/200x100.svg"}
                    alt={brand.name}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold hover:text-[#2C87CD] transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 mb-2">
                    {brand.description}
                  </p>
                  <p className="text-sm font-medium text-[#2C87CD]">
                    {brand.products_count} productos
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <Pagination paginated={brands} />
      </div>
    </AppLayout>
  );
}
