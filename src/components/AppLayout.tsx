import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import RideBooking from './RideBooking';
import RideOptions from './RideOptions';
import MapView from './MapView';
import PMVBusTicketing from './PMVBusTicketing';
import AirlineBooking from './AirlineBooking';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapIcon, List, Clock, Shield, Bus, Plane } from 'lucide-react';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('book');

  return (
    <div className="min-h-screen bg-gradient-to-br from-png-yellow/10 via-white to-png-red/10">
      <Header onMenuClick={toggleSidebar} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete Transport Solutions</h2>
          <p className="text-gray-600 text-lg">Book rides, flights, buses and more across Papua New Guinea</p>
        </div>
        
        {isMobile ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-white shadow-xl rounded-2xl p-2 border">
              <TabsTrigger value="book" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <List className="h-5 w-5" />
                Book
              </TabsTrigger>
              <TabsTrigger value="map" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <MapIcon className="h-5 w-5" />
                Map
              </TabsTrigger>
              <TabsTrigger value="pmv" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <Bus className="h-5 w-5" />
                PMV
              </TabsTrigger>
              <TabsTrigger value="airline" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <Plane className="h-5 w-5" />
                Flight
              </TabsTrigger>
              <TabsTrigger value="rides" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <Clock className="h-5 w-5" />
                Rides
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex flex-col items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl text-xs py-3">
                <Shield className="h-5 w-5" />
                Safety
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="book" className="space-y-6">
              <RideBooking />
              <RideOptions />
            </TabsContent>
            
            <TabsContent value="map">
              <MapView />
            </TabsContent>
            
            <TabsContent value="pmv">
              <PMVBusTicketing />
            </TabsContent>
            
            <TabsContent value="airline">
              <AirlineBooking />
            </TabsContent>
            
            <TabsContent value="rides">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <Clock className="h-16 w-16 mx-auto mb-4 text-png-red" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">No Recent Rides</h3>
                  <p className="text-gray-600">Your ride history will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety">
              <Card className="shadow-xl bg-gradient-to-r from-png-yellow/10 to-png-red/10 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-8 w-8 text-png-red" />
                    <h3 className="text-xl font-bold text-png-red">Safety Features</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-png-yellow rounded-full"></div>
                      <span className="text-gray-700">Real-time GPS tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-png-yellow rounded-full"></div>
                      <span className="text-gray-700">Emergency SOS button</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-png-yellow rounded-full"></div>
                      <span className="text-gray-700">Driver verification system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-png-yellow rounded-full"></div>
                      <span className="text-gray-700">24/7 support hotline</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-white shadow-xl rounded-2xl p-2 max-w-5xl mx-auto border">
              <TabsTrigger value="book" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <List className="h-5 w-5" />
                Book Ride
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <MapIcon className="h-5 w-5" />
                Live Map
              </TabsTrigger>
              <TabsTrigger value="pmv" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <Bus className="h-5 w-5" />
                PMV Bus
              </TabsTrigger>
              <TabsTrigger value="airline" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <Plane className="h-5 w-5" />
                Airlines
              </TabsTrigger>
              <TabsTrigger value="rides" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <Clock className="h-5 w-5" />
                My Rides
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-png-red data-[state=active]:to-red-700 data-[state=active]:text-white rounded-xl py-3 px-4 font-medium">
                <Shield className="h-5 w-5" />
                Safety
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="book">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <RideBooking />
                  <RideOptions />
                </div>
                <div>
                  <MapView />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="map">
              <MapView />
            </TabsContent>
            
            <TabsContent value="pmv">
              <PMVBusTicketing />
            </TabsContent>
            
            <TabsContent value="airline">
              <AirlineBooking />
            </TabsContent>
            
            <TabsContent value="rides">
              <Card className="w-full max-w-3xl mx-auto shadow-xl border-0">
                <CardContent className="p-12 text-center">
                  <Clock className="h-20 w-20 mx-auto mb-6 text-png-red" />
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">No Recent Rides</h3>
                  <p className="text-gray-600 text-lg">Your ride history will appear here once you start booking rides</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="safety">
              <Card className="shadow-xl bg-gradient-to-r from-png-yellow/10 to-png-red/10 max-w-3xl mx-auto border-0">
                <CardContent className="p-12">
                  <div className="flex items-center space-x-4 mb-8">
                    <Shield className="h-10 w-10 text-png-red" />
                    <h3 className="text-3xl font-bold text-png-red">Safety & Security Features</h3>
                  </div>
                  <div className="grid gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-png-yellow rounded-full"></div>
                      <span className="text-lg text-gray-700">Real-time GPS tracking</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-png-yellow rounded-full"></div>
                      <span className="text-lg text-gray-700">Emergency SOS button</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-png-yellow rounded-full"></div>
                      <span className="text-lg text-gray-700">Driver verification system</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-png-yellow rounded-full"></div>
                      <span className="text-lg text-gray-700">Route monitoring</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-png-yellow rounded-full"></div>
                      <span className="text-lg text-gray-700">24/7 support hotline</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default AppLayout;