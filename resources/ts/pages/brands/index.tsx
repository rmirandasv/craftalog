import AppLayout from "@/components/layouts/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@inertiajs/react";

const brands = [
  {
    id: 1,
    name: "3M",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "3m",
    description: "Innovación en productos industriales y de consumo",
    productCount: 85,
  },
  {
    id: 2,
    name: "Kimberly-Clark",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "kimberly-clark",
    description: "Productos de higiene personal y profesional",
    productCount: 65,
  },
  {
    id: 3,
    name: "Clorox",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "clorox",
    description: "Soluciones de limpieza y desinfección",
    productCount: 45,
  },
  {
    id: 4,
    name: "Rubbermaid",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "rubbermaid",
    description: "Productos de organización y almacenamiento",
    productCount: 70,
  },
  {
    id: 5,
    name: "Diversey",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "diversey",
    description: "Soluciones de limpieza e higiene profesional",
    productCount: 55,
  },
  {
    id: 6,
    name: "Georgia-Pacific",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "georgia-pacific",
    description: "Productos de papel y celulosa",
    productCount: 40,
  },
  {
    id: 7,
    name: "Procter & Gamble",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "procter-gamble",
    description: "Productos de limpieza y cuidado personal",
    productCount: 60,
  },
  {
    id: 8,
    name: "Unilever",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "unilever",
    description: "Productos de consumo masivo",
    productCount: 50,
  },
  {
    id: 9,
    name: "Johnson & Johnson",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "johnson-johnson",
    description: "Productos de salud y cuidado personal",
    productCount: 35,
  },
  {
    id: 10,
    name: "Colgate-Palmolive",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "colgate-palmolive",
    description: "Productos de higiene oral y personal",
    productCount: 30,
  },
  {
    id: 11,
    name: "SC Johnson",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "sc-johnson",
    description: "Productos de limpieza y cuidado del hogar",
    productCount: 45,
  },
  {
    id: 12,
    name: "Reckitt Benckiser",
    logo: "/placeholder.svg?height=100&width=200",
    slug: "reckitt-benckiser",
    description: "Productos de salud, higiene y hogar",
    productCount: 55,
  },
];

export default function BrandsPage() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card
              key={brand.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/marcas/${brand.slug}`}>
                <div className="p-6 flex justify-center items-center h-32 bg-gray-50">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={150}
                    height={75}
                    className="object-contain max-h-16"
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
                    {brand.productCount} productos
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
