import { useState } from "react";
import { ChevronRight, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import AppLayout from "@/components/layouts/app-layout";

const products = [
  {
    id: "1",
    name: "Limpiador Multiusos",
    category: "Limpieza",
    brand: "Clorox",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Limpiador concentrado para múltiples superficies. Elimina la suciedad y desinfecta en un solo paso. Ideal para uso en hogares, oficinas y espacios comerciales.",
    features: [
      "Fórmula concentrada de alto rendimiento",
      "Elimina el 99.9% de bacterias y virus",
      "Aroma fresco y duradero",
      "No deja residuos",
      "Biodegradable y amigable con el medio ambiente",
    ],
    specifications: {
      Contenido: "1 galón",
      Tipo: "Líquido concentrado",
      Rendimiento: "Hasta 20 litros diluido",
      "Usos recomendados": "Pisos, superficies de cocina, baños, vidrios",
      "Ingredientes activos": "Amonio cuaternario, tensioactivos",
    },
    relatedProducts: [2, 5, 7],
  },
];

// Sample related products
const relatedProductsData = [
  {
    id: 2,
    name: "Dispensador de Papel",
    category: "Baño",
    brand: "Kimberly-Clark",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dispensador de papel toalla de alta capacidad",
  },
  {
    id: 5,
    name: "Jabón Líquido",
    category: "Limpieza",
    brand: "Diversey",
    image: "/placeholder.svg?height=300&width=300",
    description: "Jabón líquido para manos con propiedades antibacteriales",
  },
  {
    id: 7,
    name: "Escoba Industrial",
    category: "Limpieza",
    brand: "Rubbermaid",
    image: "/placeholder.svg?height=300&width=300",
    description: "Escoba resistente para uso industrial",
  },
];

export default function ProductPage({
  params = { id: "1" },
}: {
  params: { id: string };
}) {
  const [activeImage, setActiveImage] = useState(0);

  // Find the product by ID
  const product = products.find((p) => p.id === params.id);

  // If product not found, show error message
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p className="mb-6">
          Lo sentimos, el producto que está buscando no existe.
        </p>
        <Button asChild>
          <Link href="/productos">Volver al catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#2C87CD]">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/productos" className="hover:text-[#2C87CD]">
            Productos
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/categorias/${product.category.toLowerCase()}`}
            className="hover:text-[#2C87CD]"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border">
              <img
                src={product.images[activeImage] || "/placeholder.svg"}
                alt={product.name}
                className="object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImage === index
                      ? "border-[#2C87CD]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Vista ${index + 1}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link
                  href={`/marcas/${product.brand.toLowerCase()}`}
                  className="text-sm font-medium text-[#2C87CD]"
                >
                  {product.brand}
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href={`/categorias/${product.category.toLowerCase()}`}
                  className="text-sm text-gray-600"
                >
                  {product.category}
                </Link>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">
                Características principales
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-[#2C87CD]/10 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-[#2C87CD]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#2C87CD] hover:bg-[#1c6aa6]"
                  asChild
                >
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Añadir a favoritos
                </Button>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Compartir</span>
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                * Los precios se proporcionan mediante cotización personalizada
                según volumen y necesidades específicas.
              </p>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="additional">Información Adicional</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="additional" className="pt-4">
            <div className="space-y-4">
              <p>
                Este producto está disponible para entrega en todo el país. Los
                tiempos de entrega pueden variar según la ubicación y la
                disponibilidad.
              </p>
              <p>
                Para obtener más información sobre este producto, incluyendo
                hojas de seguridad, certificaciones y manuales de uso, por favor
                contáctenos.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProductsData.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="overflow-hidden group hover:shadow-md transition-shadow"
              >
                <Link
                  href={`/productos/${relatedProduct.id}`}
                  className="block"
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-[#2C87CD]">
                          {relatedProduct.category}
                        </p>
                        <p className="text-sm text-gray-600">
                          {relatedProduct.brand}
                        </p>
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-[#2C87CD] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
