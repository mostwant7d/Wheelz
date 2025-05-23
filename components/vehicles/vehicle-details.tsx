"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Gauge,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Fuel,
  Repeat,
  Zap,
  Car,
  Check,
  X,
} from 'lucide-react';
import SimilarVehicles from '@/components/vehicles/similar-vehicles';

interface VehicleDetailsProps {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.gallery.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.gallery.length) % vehicle.gallery.length);
  };
  
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'luxury':
        return 'Люксовый';
      case 'sport':
        return 'Спортивный';
      case 'suv':
        return 'Внедорожник';
      default:
        return category;
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
          <button
            className="absolute top-6 right-6 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 z-50"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Закрыть"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 z-50"
            onClick={prevImage}
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <Image
            src={vehicle.gallery[currentImageIndex]}
            alt={`Фото ${currentImageIndex + 1}`}
            width={1200}
            height={800}
            className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            priority
          />
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 z-50"
            onClick={nextImage}
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
          <div>
            <Link 
              href="/vehicles" 
              className="inline-flex items-center text-gray-400 hover:text-[#C6A052] transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Назад к автомобилям
            </Link>
          </div>
          <div>
            <Badge variant="gold">{getCategoryName(vehicle.category)}</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
              <Image
                src={vehicle.gallery[currentImageIndex]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-[#C6A052]/50 hover:text-white hover:border-[#C6A052]"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-[#C6A052]/50 hover:text-white hover:border-[#C6A052]"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Thumbnails */}
            <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
              {vehicle.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentImageIndex(index); setIsLightboxOpen(true); }}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-[#C6A052]'
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${vehicle.brand} ${vehicle.model} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Vehicle Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {vehicle.brand} {vehicle.model}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#C6A052]" />
                {vehicle.year}
              </div>
              <div className="flex items-center">
                <Gauge className="h-4 w-4 mr-1 text-[#C6A052]" />
                {vehicle.specifications.power}
              </div>
              <div className="flex items-center">
                <Fuel className="h-4 w-4 mr-1 text-[#C6A052]" />
                {vehicle.specifications.fuelType}
              </div>
            </div>
            
            <div className="bg-[#C6A052]/10 border border-[#C6A052]/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Стоимость в день</p>
                  <p className="text-2xl font-bold text-[#C6A052]">
                    {vehicle.price.toLocaleString()} ₽
                  </p>
                </div>
                <Link href={`/booking?vehicleId=${vehicle.id}`}>
                  <Button className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black">
                    Забронировать <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Описание</h2>
              <p className="text-gray-300 leading-relaxed">
                {vehicle.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Характеристики</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Car className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Двигатель</p>
                    <p className="font-medium">{vehicle.specifications.engine}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Мощность</p>
                    <p className="font-medium">{vehicle.specifications.power}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Разгон до 100 км/ч</p>
                    <p className="font-medium">{vehicle.specifications.acceleration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gauge className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Максимальная скорость</p>
                    <p className="font-medium">{vehicle.specifications.topSpeed}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Repeat className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Трансмиссия</p>
                    <p className="font-medium">{vehicle.specifications.transmission}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#C6A052] mr-2 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Привод</p>
                    <p className="font-medium">{vehicle.specifications.drivetrain}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Fuel className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Тип топлива</p>
                    <p className="font-medium">{vehicle.specifications.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#C6A052] mr-2 mt-0.5"
                  >
                    <path d="M9 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
                    <path d="M19 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
                    <path d="M8 17H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v.5" />
                    <path d="M5 12V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3" />
                    <path d="M10.5 5v12" />
                    <path d="M22 11v4a2 2 0 0 1-2 2h-1" />
                    <path d="M22 11H19" />
                    <path d="M15 17h-5" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Расход топлива</p>
                    <p className="font-medium">{vehicle.specifications.fuelConsumption}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">Особенности</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#C6A052] mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Похожие автомобили</h2>
          <SimilarVehicles currentVehicleId={vehicle.id} category={vehicle.category} />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;