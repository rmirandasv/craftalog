import CTASection from "@/components/cta-section";
import FeatureSection from "@/components/feature-section";
import FeaturedBrands from "@/components/featured-brands";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import HeroSection from "@/components/hero-section";
import AppLayout from "@/components/layouts/app-layout";
import { Brand, Category, Product } from "@/types";

export default function Home({
  categories,
  products,
  brands,
}: {
  categories: Category[];
  products: Product[];
  brands: Brand[];
}) {
  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />

        {/* Featured Categories */}
        <FeaturedCategories categories={categories} />

        {/* Featured Products */}
        <FeaturedProducts products={products} />

        {/* Featured Brands */}
        <FeaturedBrands brands={brands} />

        {/* CTA Section */}
        <CTASection />
      </div>
    </AppLayout>
  );
}
