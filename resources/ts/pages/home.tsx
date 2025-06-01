import CTASection from "@/components/cta-section";
import FeatureSection from "@/components/feature-section";
import FeaturedBrands from "@/components/featured-brands";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import HeroSection from "@/components/hero-section";
import AppLayout from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />

        {/* Featured Categories */}
        <FeaturedCategories />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* CTA Section */}
        <CTASection />
      </div>
    </AppLayout>
  );
}
