import React from 'react';
import { Car, Truck, Ship, Users, Clock, Shield, Star, Bus, CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RideOptions: React.FC = () => {
  const transportOptions = [
    {
      id: 'taxi',
      name: 'Taxi Service',
      icon: Car,
      price: 'K 15-25',
      time: '5-10 min',
      capacity: '1-4 passengers',
      features: ['GPS Tracking', 'Licensed Driver', 'Safe & Secure', 'Cashless Payment'],
      color: 'from-blue-500 to-blue-600',
      available: true,
      rating: 4.8,
      description: 'Quick and reliable taxi service across PNG'
    },
    {
      id: 'car-hire',
      name: 'Car Hire',
      icon: Car,
      price: 'K 80-150/day',
      time: '30 min pickup',
      capacity: '5-7 passengers',
      features: ['Self Drive', 'Full Insurance', 'Fuel Included', '24/7 Support'],
      color: 'from-green-500 to-green-600',
      available: true,
      rating: 4.7,
      description: 'Rent a car for your convenience'
    },
    {
      id: 'car-lease',
      name: 'Car Lease',
      icon: Car,
      price: 'K 300-800/week',
      time: '1-2 hours setup',
      capacity: '5-7 passengers',
      features: ['Long Term', 'Maintenance Included', 'Flexible Terms', 'Business Rates'],
      color: 'from-indigo-500 to-indigo-600',
      available: true,
      rating: 4.6,
      description: 'Long-term vehicle solutions'
    },
    {
      id: 'pmv-bus',
      name: 'PMV Bus',
      icon: Bus,
      price: 'K 5-50',
      time: '15-30 min',
      capacity: '15-25 passengers',
      features: ['City Routes', 'Regular Schedule', 'Affordable', 'Multiple Stops'],
      color: 'from-yellow-500 to-yellow-600',
      available: true,
      rating: 4.5,
      description: 'Public motor vehicle service'
    },
    {
      id: 'truck',
      name: 'Freight Service',
      icon: Truck,
      price: 'K 200-500',
      time: '1-2 hours',
      capacity: '2-10 tonnes',
      features: ['Cargo Insurance', 'Professional Driver', 'Loading Service', 'Tracking'],
      color: 'from-orange-500 to-orange-600',
      available: true,
      rating: 4.9,
      description: 'Heavy cargo and freight transport'
    },
    {
      id: 'boat',
      name: 'Boat Transport',
      icon: Ship,
      price: 'K 50-200',
      time: '45 min - 2 hours',
      capacity: '10-50 passengers',
      features: ['Island Routes', 'Life Jackets', 'Weather Updates', 'Scenic Views'],
      color: 'from-cyan-500 to-blue-500',
      available: true,
      rating: 4.4,
      description: 'Inter-island transportation'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Available Transport Options</h3>
        <p className="text-gray-600">Choose from our comprehensive range of transport services</p>
      </div>
      
      <div className="grid gap-6">
        {transportOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <Card 
              key={option.id} 
              className={`transition-all duration-300 hover:shadow-2xl border-0 bg-gradient-to-r ${option.color} text-white overflow-hidden ${
                option.available ? 'hover:scale-105 cursor-pointer' : 'opacity-60'
              }`}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{option.name}</h4>
                        <p className="text-white/90 text-sm mb-2">{option.description}</p>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span className="text-white/80 text-sm">{option.capacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-2xl mb-1">{option.price}</div>
                      <div className="text-white/80 text-sm flex items-center justify-end mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {option.time}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{option.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {option.features.map((feature, index) => (
                      <Badge 
                        key={index} 
                        className="bg-white/20 text-white border-white/30 text-xs font-medium px-3 py-1 backdrop-blur-sm"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">Verified & Insured</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">GPS Tracked</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg"
                      disabled={!option.available}
                      className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 py-2 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                    >
                      {option.available ? 'Book Now' : 'Unavailable'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white border-0 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
            <Star className="h-8 w-8 mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold mb-2">Business Partnership Program</CardTitle>
          <p className="text-purple-100">Join our network of transport providers and grow your business</p>
        </CardHeader>
        <CardContent className="text-center pb-8">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-purple-100">Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-purple-100">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm text-purple-100">Revenue Share</div>
            </div>
          </div>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            Become a Partner
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RideOptions;