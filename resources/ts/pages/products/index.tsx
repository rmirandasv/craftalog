import { Filter, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@inertiajs/react";
import AppLayout from "@/components/layouts/app-layout";
import { Brand, Category, Paginated, Product } from "@/types";
import { Pagination } from "@/components/pagination";

export default function ProductsPage({
  products,
  categories,
  brands,
}: {
  products: Paginated<Product>;
  categories: Category[],
  brands: Brand[];
}) {
  console.log(products.data);
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Catálogo de Productos</h1>
            <p className="text-gray-600 mt-2">
              Explore nuestra amplia gama de productos para su negocio
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Categorías</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`category-mobile-${category.id}`} />
                          <Label htmlFor={`category-mobile-${category.id}`}>
                            {category.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Marcas</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div
                          key={brand.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`brand-mobile-${brand.id}`} />
                          <Label htmlFor={`brand-mobile-${brand.id}`}>
                            {brand.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Limpiar Filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 w-full md:w-[250px]"
              />
              {true && (
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
                <SelectItem value="name-desc">Nombre (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Filtros</h3>

              <div className="space-y-4">
                <h4 className="font-medium">Categorías</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <Label htmlFor={`category-${category}`}>{category.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Marcas</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand.id}`} />
                      <Label htmlFor={`brand-${brand.id}`}>{brand.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Limpiar Filtros
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {/* {(selectedCategories.length > 0 ||
              selectedBrands.length > 0 ||
              searchTerm) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {searchTerm && (
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                    <span>Búsqueda: {searchTerm}</span>
                    <button onClick={() => setSearchTerm("")} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}

                {selectedCategories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                  >
                    <span>Categoría: {category}</span>
                    <button
                      onClick={() => toggleCategory(category)}
                      className="ml-2"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}

                {selectedBrands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                  >
                    <span>Marca: {brand}</span>
                    <button onClick={() => toggleBrand(brand)} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={clearFilters}
                  className="text-[#2C87CD] text-sm hover:underline"
                >
                  Limpiar todos
                </button>
              </div>
            )} */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.data.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <Link href={`/products/${product.slug}`} className="block">
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <img
                        src={
                          product.images
                            ? product.images[0]
                            : "/assets/400x400.svg"
                        }
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          {product?.categories?.map((category) => (
                            <p
                              className="text-sm text-[#2C87CD]"
                              key={category.id}
                            >
                              {category.name}
                            </p>
                          ))}

                          <p className="text-sm text-gray-600">
                            {product.brand?.name}
                          </p>
                        </div>
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
            <Pagination paginated={products} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
