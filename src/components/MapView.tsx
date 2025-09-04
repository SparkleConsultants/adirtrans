import React, { useState } from 'react';
import { MapPin, Navigation, Zap, AlertTriangle, Phone, Shield, Car, Truck, Bus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MapView: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const nearbyVehicles = [
    { id: '1', type: 'taxi', driver: 'John Kila', rating: 4.8, distance: '2 min', location: 'Port Moresby CBD', verified: true, price: 'K 15', icon: Car },
    { id: '2', type: 'car', driver: 'Mary Temu', rating: 4.9, distance: '5 min', location: 'Boroko', verified: true, price: 'K 20', icon: Car },
    { id: '3', type: 'truck', driver: 'Peter Namaliu', rating: 4.7, distance: '8 min', location: 'Gerehu', verified: true, price: 'K 200', icon: Truck },
    { id: '4', type: 'bus', driver: 'Sarah Wanma', rating: 4.6, distance: '12 min', location: 'Waigani', verified: true, price: 'K 8', icon: Bus },
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="flex items-center space-x-3 text-2xl">
            <Navigation className="h-8 w-8" />
            <span>Live Transport Tracking</span>
          </CardTitle>
          <p className="text-blue-100 mt-2">Real-time vehicle locations across Papua New Guinea</p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="bg-gradient-to-br from-blue-100 via-green-50 to-purple-100 rounded-2xl p-12 mb-8 relative overflow-hidden border-2 border-blue-200">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="relative z-10 text-center">
              <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="bg-blue-500 p-4 rounded-full animate-pulse">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="bg-green-500 p-4 rounded-full animate-pulse delay-75">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div className="bg-purple-500 p-4 rounded-full animate-pulse delay-150">
                  <Bus className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Port Moresby Transport Hub</h3>
              <p className="text-gray-600 text-lg mb-6">Interactive GPS tracking system - Coming Soon</p>
              <div className="flex justify-center space-x-6">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">12 Available Vehicles</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Your Location</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Live Tracking</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Active Vehicles</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600">On-Time Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-2xl border-0">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <Car className="h-6 w-6 text-blue-600" />
            <span>Available Vehicles Near You</span>
          </CardTitle>
          <p className="text-gray-600">Select a vehicle to view details and book</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {nearbyVehicles.map((vehicle) => {
            const IconComponent = vehicle.icon;
            return (
              <div 
                key={vehicle.id}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer transform hover:scale-105 ${
                  selectedVehicle === vehicle.id 
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-lg'
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-lg">{vehicle.driver}</span>
                        {vehicle.verified && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-gray-600 mb-1">{vehicle.location}</div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          ⭐ {vehicle.rating}
                        </span>
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          🚗 {vehicle.distance} away
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{vehicle.price}</div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-xl"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="shadow-2xl bg-gradient-to-r from-green-50 to-blue-50 border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-green-700">
            <Shield className="h-8 w-8" />
            <span className="text-2xl">Safety & Security Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Real-time GPS tracking',
              'Emergency SOS button',
              'Driver verification system', 
              'Route monitoring',
              '24/7 support hotline',
              'Insurance coverage'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertDescription className="text-orange-800 font-medium">
              <strong>PNG Safety Initiative:</strong> All drivers undergo comprehensive background checks and vehicle inspections to ensure maximum passenger safety and security.
            </AlertDescription>
          </Alert>
          
          <div className="flex space-x-4">
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-bold rounded-xl">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: 111
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold rounded-xl">
              <Phone className="h-5 w-5 mr-2" />
              Support: 180 0123
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapView;