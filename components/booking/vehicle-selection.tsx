import { useState } from 'react';
import Image from 'next/image';
import { vehicles } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Gauge, Fuel, Search } from 'lucide-react';

interface VehicleSelectionProps {
  onVehicleSelect: (id: string) => void;
}

const VehicleSelection = ({ onVehicleSelect }: VehicleSelectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      searchTerm === '' ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || vehicle.category === selectedCategory;
    const matchesBrand = selectedBrand === '' || vehicle.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });
  
  const brands = Array.from(new Set(vehicles.map((v) => v.brand)));
  
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
    <div>
      <div className="bg-black/90 border border-white/10 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Поиск</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-black border-white/20 focus:ring-[#C6A052] focus:border-[#C6A052]"
                placeholder="Найти автомобиль..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Категория</label>
            <Select value={selectedCategory} onValueChange={v => setSelectedCategory(v === 'all' ? '' : v)}>
              <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:border-[#C6A052]">
                <SelectValue placeholder="Все категории" />
              </SelectTrigger>
              <SelectContent className="bg-black/95 border-white/20">
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="luxury">Люксовые</SelectItem>
                <SelectItem value="sport">Спортивные</SelectItem>
                <SelectItem value="suv">Внедорожники</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Марка</label>
            <Select value={selectedBrand} onValueChange={v => setSelectedBrand(v === 'all' ? '' : v)}>
              <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:border-[#C6A052]">
                <SelectValue placeholder="Все марки" />
              </SelectTrigger>
              <SelectContent className="bg-black/95 border-white/20">
                <SelectItem value="all">Все марки</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-black border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C6A052]/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[#C6A052] text-black text-xs font-semibold px-2 py-1 rounded">
                  {getCategoryName(vehicle.category)}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <span className="text-[#C6A052] font-semibold">
                    {vehicle.price.toLocaleString()} ₽/день
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
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
                  className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black"
                  onClick={() => onVehicleSelect(vehicle.id)}
                >
                  Выбрать
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-2">Автомобили не найдены</div>
            <Button
              variant="outline"
              className="border-[#C6A052] text-[#C6A052]"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedBrand('');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSelection;