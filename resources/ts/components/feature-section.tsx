import { Package, Truck, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function FeatureSection() {
  return (
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
                  Brindamos asesoría y cotizaciones adaptadas a las necesidades
                  de cada cliente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
