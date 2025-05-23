import HeroSection from '@/components/home/hero-section';
import VehicleFilter from '@/components/home/vehicle-filter';
import VehicleGrid from '@/components/home/vehicle-grid';
import FeaturedSection from '@/components/home/featured-section';
import ServiceSection from '@/components/home/service-section';
import TestimonialsSection from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <VehicleFilter />
        <VehicleGrid />
        <FeaturedSection />
        <ServiceSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}