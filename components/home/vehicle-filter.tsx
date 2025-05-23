"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal } from 'lucide-react';

const VehicleFilter = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [priceRange, setPriceRange] = useState([5000, 50000]);

  return (
    <div className="bg-black/90 border border-white/10 rounded-lg p-6 mt-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Марка</label>
          <Select>
            <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
              <SelectValue placeholder="Выберите марку" />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-white/20">
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="porsche">Porsche</SelectItem>
              <SelectItem value="ferrari">Ferrari</SelectItem>
              <SelectItem value="lamborghini">Lamborghini</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Модель</label>
          <Select>
            <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
              <SelectValue placeholder="Выберите модель" />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-white/20">
              <SelectItem value="model1">S-Class</SelectItem>
              <SelectItem value="model2">7 Series</SelectItem>
              <SelectItem value="model3">A8</SelectItem>
              <SelectItem value="model4">911</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Класс</label>
          <Select>
            <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
              <SelectValue placeholder="Выберите класс" />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-white/20">
              <SelectItem value="luxury">Люксовый</SelectItem>
              <SelectItem value="sport">Спортивный</SelectItem>
              <SelectItem value="suv">Внедорожник</SelectItem>
              <SelectItem value="sedan">Седан</SelectItem>
              <SelectItem value="cabriolet">Кабриолет</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Локация</label>
          <Select>
            <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-white/20">
              <SelectItem value="moscow">Москва</SelectItem>
              <SelectItem value="spb">Санкт-Петербург</SelectItem>
              <SelectItem value="sochi">Сочи</SelectItem>
              <SelectItem value="krasnodar">Краснодар</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black">
            <Search className="h-4 w-4 mr-2" />
            Найти
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-400 hover:text-[#C6A052]"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          {showAdvanced ? 'Скрыть фильтры' : 'Расширенный поиск'}
        </Button>
      </div>
      
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Стоимость в день (₽)
            </label>
            <div className="px-2">
              <Slider
                defaultValue={[5000, 50000]}
                max={100000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="[&_[role=slider]]:bg-[#C6A052] [&_[role=slider]]:border-[#C6A052] [&_[role=slider]]:focus:ring-[#C6A052]"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>{priceRange[0].toLocaleString()} ₽</span>
              <span>{priceRange[1].toLocaleString()} ₽</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Тип топлива</label>
            <Select>
              <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent className="bg-black/95 border-white/20">
                <SelectItem value="petrol">Бензин</SelectItem>
                <SelectItem value="diesel">Дизель</SelectItem>
                <SelectItem value="electric">Электро</SelectItem>
                <SelectItem value="hybrid">Гибрид</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Год выпуска</label>
            <div className="grid grid-cols-2 gap-2">
              <Select>
                <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
                  <SelectValue placeholder="От" />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/20">
                  {Array.from({ length: 10 }, (_, i) => 2016 + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="bg-black border-white/20 focus:ring-[#C6A052] focus:ring-offset-0 focus:border-[#C6A052]">
                  <SelectValue placeholder="До" />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/20">
                  {Array.from({ length: 10 }, (_, i) => 2016 + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleFilter;