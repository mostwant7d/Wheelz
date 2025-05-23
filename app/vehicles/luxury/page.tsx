import { vehicles } from '@/lib/data';
import VehicleGrid from '@/components/home/vehicle-grid';

export default function LuxuryVehiclesPage() {
  const luxuryVehicles = vehicles.filter(vehicle => vehicle.category === 'luxury');
  
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Люксовые автомобили</h1>
          <p className="text-gray-400 max-w-2xl text-center">
            Выберите идеальный люксовый автомобиль из нашей коллекции премиальных моделей
          </p>
        </div>
        
        <VehicleGrid vehicles={luxuryVehicles} />
      </div>
    </div>
  );
} 