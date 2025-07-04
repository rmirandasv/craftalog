import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePage } from "@inertiajs/react";
import { SharedData } from "@/types";

export default function Navbar() {
  const { brands, categories } = usePage<SharedData>().props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2C87CD] flex items-center justify-center text-white font-bold">
            P
          </div>
          <span className="text-xl font-bold text-[#2C87CD]">Purifasa</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-sm font-medium hover:text-[#2C87CD] transition-colors"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-[#2C87CD] transition-colors p-0"
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link href={`/categories/${category.slug}`}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/categories">Ver todas</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-[#2C87CD] transition-colors p-0"
              >
                Marcas <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {brands.map((brand) => (
                <DropdownMenuItem key={brand.id} asChild>
                  <Link href={`/brands/${brand.slug}`}>{brand.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/brands">Ver todas</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/products"
            className="text-sm font-medium hover:text-[#2C87CD] transition-colors"
          >
            Catálogo
          </Link>

          <Link
            href="/contaact"
            className="text-sm font-medium hover:text-[#2C87CD] transition-colors"
          >
            Contáctenos
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2C87CD] flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-[#2C87CD]">Purifasa</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container mx-auto px-4 py-6 grid gap-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-[#2C87CD]"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <div className="grid gap-2 pl-4">
              <div className="font-medium">Categorías</div>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="text-sm hover:text-[#2C87CD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-2 pl-4">
              <div className="font-medium">Marcas</div>
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brands/${brand.slug}`}
                  className="text-sm hover:text-[#2C87CD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {brand.name}
                </Link>
              ))}
            </div>
            <Link
              href="/productos"
              className="text-lg font-medium hover:text-[#2C87CD]"
              onClick={() => setIsMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="text-lg font-medium hover:text-[#2C87CD]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctenos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
