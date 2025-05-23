import Link from 'next/link';
import Image from 'next/image';
import { vehicles, Vehicle } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Calendar, Gauge, Fuel } from 'lucide-react';

interface SimilarVehiclesProps {
  currentVehicleId: string;
  category: string;
}

const SimilarVehicles = ({ currentVehicleId, category }: SimilarVehiclesProps) => {
  const similarVehicles = vehicles
    .filter((v) => v.id !== currentVehicleId && v.category === category)
    .slice(0, 3);
  
  if (similarVehicles.length === 0) {
    // If no vehicles in the same category, get vehicles from other categories
    const otherVehicles = vehicles
      .filter((v) => v.id !== currentVehicleId)
      .slice(0, 3);
    
    return <VehicleList vehicles={otherVehicles} />;
  }
  
  return <VehicleList vehicles={similarVehicles} />;
};

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList = ({ vehicles }: VehicleListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <Link 
          href={`/vehicles/${vehicle.id}`} 
          key={vehicle.id}
          className="group bg-black border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C6A052]/50 hover:shadow-lg hover:shadow-[#C6A052]/5"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold group-hover:text-[#C6A052] transition-colors">
                {vehicle.brand} {vehicle.model}
              </h3>
              <span className="text-[#C6A052] font-semibold text-sm">
                {vehicle.price.toLocaleString()} ₽/день
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1 text-[#C6A052]" />
                {vehicle.year}
              </div>
              <div className="flex items-center">
                <Gauge className="h-3 w-3 mr-1 text-[#C6A052]" />
                {vehicle.specifications.power}
              </div>
              <div className="flex items-center">
                <Fuel className="h-3 w-3 mr-1 text-[#C6A052]" />
                {vehicle.specifications.fuelType}
              </div>
            </div>
            
            <Button
              size="sm"
              className="w-full bg-transparent border border-[#C6A052] text-[#C6A052] hover:bg-[#C6A052]/10 group-hover:bg-[#C6A052] group-hover:text-black transition-all duration-300"
            >
              Подробнее
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarVehicles;