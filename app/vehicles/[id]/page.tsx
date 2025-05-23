import { vehicles } from '@/lib/data';
import { notFound } from 'next/navigation';
import VehicleDetails from '@/components/vehicles/vehicle-details';

interface VehiclePageProps {
  params: {
    id: string;
  };
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = vehicles.find((v) => v.id === params.id);
  
  if (!vehicle) {
    notFound();
  }
  
  return <VehicleDetails vehicle={vehicle} />;
}

export function generateStaticParams() {
  return vehicles.map(vehicle => ({
    id: vehicle.id,
  }));
}