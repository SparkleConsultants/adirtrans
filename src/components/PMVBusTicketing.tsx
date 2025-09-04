import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bus, MapPin, Clock, CreditCard, Smartphone, Users } from 'lucide-react';

const PMVBusTicketing: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  const townRoutes = [
    { id: '1', name: 'Bomana - Gordons', price: 2, duration: '25 min', operator: 'City PMV' },
    { id: '2', name: 'Gerehu - Boroko', price: 2, duration: '30 min', operator: 'Metro Bus' },
    { id: '3', name: 'Waigani - Gordons', price: 1, duration: '20 min', operator: 'Town PMV' },
    { id: '4', name: 'Waigani - Boroko', price: 1, duration: '15 min', operator: 'Express PMV' },
    { id: '5', name: 'Gerehu - Waigani', price: 1.5, duration: '18 min', operator: 'City Link' },
    { id: '6', name: 'Gordons - Boroko', price: 1.5, duration: '22 min', operator: 'Urban PMV' }
  ];

  const paymentOptions = [
    { id: 'mobile', name: 'Mobile Money', icon: Smartphone },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'cash', name: 'Cash on Board', icon: Bus }
  ];

  const selectedRouteData = townRoutes.find(route => route.id === selectedRoute);
  const totalPrice = selectedRouteData ? selectedRouteData.price * passengers : 0;

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Bus className="h-6 w-6 text-yellow-600" />
            PMV Town Routes
          </CardTitle>
          <p className="text-gray-600">Book tickets for local PMV bus routes in Port Moresby</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="route">Select Town Route</Label>
                <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your route" />
                  </SelectTrigger>
                  <SelectContent>
                    {townRoutes.map((route) => (
                      <SelectItem key={route.id} value={route.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{route.name}</span>
                          <Badge variant="secondary">K{route.price}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="passengers">Passengers</Label>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <Input
                    id="passengers"
                    type="number"
                    min="1"
                    max="5"
                    value={passengers}
                    onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                    className="w-20"
                  />
                </div>
              </div>
            </div>
            
            {selectedRouteData && (
              <Card className="bg-white border border-yellow-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 text-yellow-700">Route Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{selectedRouteData.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{selectedRouteData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bus className="h-4 w-4 text-gray-500" />
                      <span>{selectedRouteData.operator}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total:</span>
                    <span className="text-lg font-bold text-yellow-600">K{totalPrice}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div>
            <Label className="text-base font-medium mb-3 block">Payment Method</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {paymentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      paymentMethod === option.id 
                        ? 'ring-2 ring-yellow-500 bg-yellow-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setPaymentMethod(option.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                      <p className="text-sm font-medium">{option.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
              disabled={!selectedRoute || !paymentMethod}
            >
              Book Ticket - K{totalPrice}
            </Button>
            
            <Button variant="outline" className="px-6">
              Check Times
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PMVBusTicketing;