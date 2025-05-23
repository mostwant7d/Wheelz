import { vehicles } from '@/lib/data';
import VehicleGrid from '@/components/home/vehicle-grid';

export default function SuvVehiclesPage() {
  const suvVehicles = vehicles.filter(vehicle => vehicle.category === 'suv');
  
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Внедорожники</h1>
          <p className="text-gray-400 max-w-2xl text-center">
            Выберите идеальный внедорожник из нашей коллекции премиальных моделей
          </p>
        </div>
        
        <VehicleGrid vehicles={suvVehicles} />
      </div>
    </div>
  );
} 