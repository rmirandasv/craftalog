import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { Brand } from "@/types"

export default function FeaturedBrands({ brands }: { brands: Brand[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Marcas Destacadas</h2>
          <Button variant="ghost" className="text-[#2C87CD] hover:text-[#1c6aa6]" asChild>
            <Link href="/marcas">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/marcas/${brand.slug}`}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow group"
            >
              <img
                src={brand.logo || "/assets/200x100.svg"}
                alt={brand.name}
                width={200}
                height={100}
                className="object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
