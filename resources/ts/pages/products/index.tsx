import { useState } from "react";
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

// Sample product data
const products = [
  {
    id: 1,
    name: "Limpiador Multiusos",
    category: "Limpieza",
    brand: "Clorox",
    image: null,
    description: "Limpiador concentrado para múltiples superficies",
  },
  {
    id: 2,
    name: "Dispensador de Papel",
    category: "Baño",
    brand: "Kimberly-Clark",
    image: null,
    description: "Dispensador de papel toalla de alta capacidad",
  },
  {
    id: 3,
    name: "Desinfectante Industrial",
    category: "Industrial",
    brand: "3M",
    image: null,
    description: "Desinfectante de alto rendimiento para áreas industriales",
  },
  {
    id: 4,
    name: "Organizador de Escritorio",
    category: "Oficina",
    brand: "Rubbermaid",
    image: null,
    description: "Organizador modular para mantener el orden en la oficina",
  },
  {
    id: 5,
    name: "Jabón Líquido",
    category: "Limpieza",
    brand: "Diversey",
    image: null,
    description: "Jabón líquido para manos con propiedades antibacteriales",
  },
  {
    id: 6,
    name: "Papel Higiénico Industrial",
    category: "Baño",
    brand: "Georgia-Pacific",
    image: null,
    description: "Papel higiénico de alta resistencia para uso industrial",
  },
  {
    id: 7,
    name: "Escoba Industrial",
    category: "Limpieza",
    brand: "Rubbermaid",
    image: null,
    description: "Escoba resistente para uso industrial",
  },
  {
    id: 8,
    name: "Archivador",
    category: "Oficina",
    brand: "3M",
    image: null,
    description: "Archivador de documentos con sistema de fácil acceso",
  },
];

// Filter options
const categories = ["Limpieza", "Baño", "Industrial", "Oficina"];
const brands = [
  "3M",
  "Kimberly-Clark",
  "Clorox",
  "Rubbermaid",
  "Diversey",
  "Georgia-Pacific",
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("name-asc");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter products based on search term, categories, and brands
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesCategory && matchesBrand;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortOption("name-asc");
  };

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
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
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
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`category-mobile-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-mobile-${category}`}>
                            {category}
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
                          key={brand}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`brand-mobile-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <Label htmlFor={`brand-mobile-${brand}`}>
                            {brand}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearFilters}
                  >
                    Limpiar Filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-[250px]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>

            <Select value={sortOption} onValueChange={setSortOption}>
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
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Marcas</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={clearFilters}
              >
                Limpiar Filtros
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedCategories.length > 0 ||
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
            )}

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No se encontraron productos que coincidan con los filtros
                  seleccionados.
                </p>
                <Button
                  variant="link"
                  onClick={clearFilters}
                  className="mt-2 text-[#2C87CD]"
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden group hover:shadow-md transition-shadow"
                  >
                    <Link href={`/productos/${product.id}`} className="block">
                      <div className="aspect-square relative overflow-hidden bg-gray-100">
                        <img
                          src={product.image || "/assets/400x400.svg"}
                          alt={product.name}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm text-[#2C87CD]">
                              {product.category}
                            </p>
                            <p className="text-sm text-gray-600">
                              {product.brand}
                            </p>
                          </div>
                          <h3 className="font-semibold text-lg group-hover:text-[#2C87CD] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                          </p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-[#2C87CD]"
                          >
                            Solicitar cotización
                          </Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
