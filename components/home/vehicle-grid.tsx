"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { vehicles as defaultVehicles } from '@/lib/data';
import { ChevronLeft, ChevronRight, Calendar, Gauge, Fuel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/lib/data';
import { motion } from 'framer-motion';

interface VehicleGridProps {
  vehicles?: Vehicle[];
}

const VehicleGrid = ({ vehicles = defaultVehicles }: VehicleGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 6;
  
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  
  const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
    <div className="py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Наш автопарк</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Выберите идеальный автомобиль из нашей коллекции премиальных и люксовых моделей ведущих мировых производителей
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVehicles.map((vehicle, idx) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, type: 'spring' }}
            whileHover={{
              scale: 1.035,
              boxShadow: '0 8px 32px 0 rgba(198,160,82,0.15)',
              zIndex: 2,
            }}
            whileTap={{ scale: 0.97 }}
            className="h-full transition-colors duration-300 bg-black/60 border border-white/10 rounded-xl overflow-hidden group cursor-pointer"
          >
            <Link 
              href={`/vehicles/${vehicle.id}`} 
              className="group bg-black border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C6A052]/50 hover:shadow-lg hover:shadow-[#C6A052]/5 h-full flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#C6A052] text-black hover:bg-[#C6A052]/90">
                    {getCategoryName(vehicle.category)}
                  </Badge>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-[#C6A052] transition-colors">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <span className="text-[#C6A052] font-semibold">
                    {vehicle.price.toLocaleString()} ₽/день
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {vehicle.description}
                </p>
                <Button className="w-full mt-auto bg-transparent border border-[#C6A052] text-[#C6A052] hover:bg-[#C6A052]/10 group-hover:bg-[#C6A052] group-hover:text-black transition-all duration-300">
                  Подробнее
                </Button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center px-4 text-sm text-gray-400">
            Страница {currentPage} из {totalPages}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VehicleGrid;