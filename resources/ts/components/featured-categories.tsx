import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { Category } from "@/types"

export default function FeaturedCategories({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Categorías Principales</h2>
          <Button variant="ghost" className="text-[#2C87CD] hover:text-[#1c6aa6]" asChild>
            <Link href="/categorias">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={category.image || "/assets/300x400.svg"}
                  alt={category.name}
                  className="object-cover group w-full hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.products_count} productos</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
