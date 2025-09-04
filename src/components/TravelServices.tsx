import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plane, Hotel, Car } from 'lucide-react';
import AirlineBooking from './AirlineBooking';
import AccommodationBooking from './AccommodationBooking';
import CarHireTransfer from './CarHireTransfer';

const TravelServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-white shadow-lg rounded-xl p-1">
          <TabsTrigger 
            value="flights" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-lg"
          >
            <Plane className="h-4 w-4" />
            Flights
          </TabsTrigger>
          <TabsTrigger 
            value="accommodation" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg"
          >
            <Hotel className="h-4 w-4" />
            Hotels
          </TabsTrigger>
          <TabsTrigger 
            value="cars" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white rounded-lg"
          >
            <Car className="h-4 w-4" />
            Cars & Transfers
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="flights">
          <AirlineBooking />
        </TabsContent>
        
        <TabsContent value="accommodation">
          <AccommodationBooking />
        </TabsContent>
        
        <TabsContent value="cars">
          <CarHireTransfer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TravelServices;