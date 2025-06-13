import AppLayout from "@/components/layouts/app-layout";
import { Pagination } from "@/components/pagination";
import { Category, Paginated } from "@/types";
import { Link } from "@inertiajs/react";

export default function CategoriesPage({ categories }: { categories: Paginated<Category> }) {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {categories.data.map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="group overflow-hidden rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image || "/assets/400x300.svg"}
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
                  {category?.products_count} productos
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Pagination paginated={categories} />
      </div>
    </AppLayout>
  );
}
