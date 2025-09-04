import React, { useState } from 'react';
import { MapPin, Calendar, Users, Package, Clock, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const RideBooking: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState('ride-hailing');

  return (
    <Card className="w-full shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      <CardHeader className="pb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold mb-2">Book Your Transport</CardTitle>
            <p className="text-blue-100">Choose from our comprehensive transport services</p>
          </div>
          <Car className="h-12 w-12 text-white/80" />
        </div>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <Tabs value={serviceType} onValueChange={setServiceType} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg p-2 rounded-2xl border">
            <TabsTrigger value="ride-hailing" className="text-sm font-medium data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3">
              <div className="flex flex-col items-center gap-1">
                <Car className="h-4 w-4" />
                Taxi
              </div>
            </TabsTrigger>
            <TabsTrigger value="hire" className="text-sm font-medium data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3">
              <div className="flex flex-col items-center gap-1">
                <Clock className="h-4 w-4" />
                Hire
              </div>
            </TabsTrigger>
            <TabsTrigger value="lease" className="text-sm font-medium data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3">
              <div className="flex flex-col items-center gap-1">
                <Calendar className="h-4 w-4" />
                Lease
              </div>
            </TabsTrigger>
            <TabsTrigger value="freight" className="text-sm font-medium data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3">
              <div className="flex flex-col items-center gap-1">
                <Package className="h-4 w-4" />
                Freight
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ride-hailing" className="space-y-6 mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-green-500" />
                  <Input
                    placeholder="Enter pickup location (e.g., Port Moresby CBD)"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-12 h-14 border-2 focus:border-green-500 rounded-2xl text-base shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-red-500" />
                  <Input
                    placeholder="Enter destination (e.g., Jacksons Airport)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-12 h-14 border-2 focus:border-red-500 rounded-2xl text-base shadow-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-2">
                    <SelectValue placeholder="Passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-2">
                    <SelectValue placeholder="When?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Now</SelectItem>
                    <SelectItem value="later">Schedule Later</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Estimated Fare</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-bold">K 15-25</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="hire" className="space-y-6 mt-8">
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-2">
                  <SelectValue placeholder="Select hire duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly Hire - K 50/hour</SelectItem>
                  <SelectItem value="daily">Daily Hire - K 300/day</SelectItem>
                  <SelectItem value="weekly">Weekly Hire - K 1,800/week</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-2">
                  <SelectValue placeholder="Vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          
          <TabsContent value="lease" className="space-y-6 mt-8">
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-2">
                  <SelectValue placeholder="Select lease term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Lease - K 2,500/month</SelectItem>
                  <SelectItem value="quarterly">Quarterly Lease - K 7,000/quarter</SelectItem>
                  <SelectItem value="yearly">Yearly Lease - K 25,000/year</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-2">
                  <SelectValue placeholder="Vehicle category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          
          <TabsContent value="freight" className="space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-2">
                  <SelectValue placeholder="Cargo type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Cargo</SelectItem>
                  <SelectItem value="food">Food Items</SelectItem>
                  <SelectItem value="construction">Construction Materials</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                placeholder="Weight (kg)"
                className="h-14 rounded-2xl border-2 text-base"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Pickup address"
                className="h-14 rounded-2xl border-2 text-base"
              />
              
              <Input
                placeholder="Delivery address"
                className="h-14 rounded-2xl border-2 text-base"
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <Button className="w-full h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200">
          Find Available Transport
        </Button>
        
        <div className="text-center text-sm text-gray-600">
          <p>🚗 Available 24/7 • 📱 Real-time tracking • 💳 Multiple payment options</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RideBooking;