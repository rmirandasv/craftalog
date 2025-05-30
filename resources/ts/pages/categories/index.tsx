import AppLayout from "@/components/layouts/app-layout";
import { Link } from "@inertiajs/react";

const categories = [
  {
    id: 1,
    name: "Limpieza",
    image: "/placeholder.svg?height=400&width=300",
    count: 120,
    slug: "limpieza",
    description:
      "Productos de limpieza para todo tipo de superficies y espacios",
  },
  {
    id: 2,
    name: "Hogar",
    image: "/placeholder.svg?height=400&width=300",
    count: 85,
    slug: "hogar",
    description: "Artículos para el hogar y la organización de espacios",
  },
  {
    id: 3,
    name: "Industrial",
    image: "/placeholder.svg?height=400&width=300",
    count: 95,
    slug: "industrial",
    description: "Productos industriales para fábricas y grandes instalaciones",
  },
  {
    id: 4,
    name: "Oficina",
    image: "/placeholder.svg?height=400&width=300",
    count: 110,
    slug: "oficina",
    description: "Artículos de oficina y papelería para empresas",
  },
  {
    id: 5,
    name: "Baño",
    image: "/placeholder.svg?height=400&width=300",
    count: 75,
    slug: "bano",
    description: "Productos para baños públicos y privados",
  },
  {
    id: 6,
    name: "Cocina",
    image: "/placeholder.svg?height=400&width=300",
    count: 60,
    slug: "cocina",
    description: "Artículos para cocinas industriales y comerciales",
  },
  {
    id: 7,
    name: "Seguridad",
    image: "/placeholder.svg?height=400&width=300",
    count: 45,
    slug: "seguridad",
    description: "Productos de seguridad y protección personal",
  },
  {
    id: 8,
    name: "Jardinería",
    image: "/placeholder.svg?height=400&width=300",
    count: 30,
    slug: "jardineria",
    description: "Artículos para el mantenimiento de jardines y áreas verdes",
  },
];

export default function CategoriesPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Categorías de Productos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nuestra amplia gama de categorías de productos para
            encontrar exactamente lo que necesita para su negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="group overflow-hidden rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-[#2C87CD] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 mb-2">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-[#2C87CD]">
                  {category.count} productos
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
