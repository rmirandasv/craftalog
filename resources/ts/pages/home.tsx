import FeaturedBrands from "@/components/featured-brands";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import AppLayout from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Page } from "@/types";
import { Link } from "@inertiajs/react";
import { ArrowRight, Package, Truck, Users } from "lucide-react";

export default function Home({ page }: { page: Page }) {
  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2C87CD] to-[#1c6aa6] text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Distribuidora de Productos de Alta Calidad
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-xl">
                Ofrecemos una amplia gama de productos para empresas y negocios.
                Solicite una cotización personalizada según sus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#2C87CD] hover:bg-gray-100"
                  asChild
                >
                  <Link href="/productos">
                    Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Productos Purifasa"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué elegir Purifasa?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-[#2C87CD]/10 text-[#2C87CD]">
                      <Package className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">Amplio Catálogo</h3>
                    <p className="text-gray-600">
                      Ofrecemos una extensa variedad de productos de las mejores
                      marcas del mercado.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-[#2C87CD]/10 text-[#2C87CD]">
                      <Truck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">Entrega Rápida</h3>
                    <p className="text-gray-600">
                      Contamos con un sistema logístico eficiente para entregas
                      puntuales.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-[#2C87CD]/10 text-[#2C87CD]">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Atención Personalizada
                    </h3>
                    <p className="text-gray-600">
                      Brindamos asesoría y cotizaciones adaptadas a las
                      necesidades de cada cliente.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <FeaturedCategories />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">
                ¿Listo para hacer su pedido?
              </h2>
              <p className="text-lg text-gray-600">
                Contáctenos para obtener una cotización personalizada según sus
                necesidades específicas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#2C87CD] hover:bg-[#1c6aa6]"
                  asChild
                >
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/productos">Ver Catálogo Completo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
