import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { categories } = usePage<SharedData>().props;
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2C87CD] flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-[#2C87CD]">Purifasa</span>
            </div>
            <p className="text-sm text-gray-600">
              Distribuidora de productos de alta calidad para empresas y
              negocios.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-[#2C87CD]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-600 hover:text-[#2C87CD]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:info@purifasa.com"
                className="text-gray-600 hover:text-[#2C87CD]"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#2C87CD] text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-gray-600 hover:text-[#2C87CD] text-sm"
                >
                  Catálogo de Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-gray-600 hover:text-[#2C87CD] text-sm"
                >
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  href="/marcas"
                  className="text-gray-600 hover:text-[#2C87CD] text-sm"
                >
                  Marcas
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-[#2C87CD] text-sm"
                >
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-gray-600 hover:text-[#2C87CD] text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#2C87CD] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  Calle Principal #123, Ciudad, País
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#2C87CD] shrink-0" />
                <span className="text-sm text-gray-600">+123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#2C87CD] shrink-0" />
                <span className="text-sm text-gray-600">info@purifasa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Purifasa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
