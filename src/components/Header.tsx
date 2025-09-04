import React from 'react';
import { Bell, Menu, User, Wallet, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-gradient-to-r from-png-red via-red-700 to-png-red text-white shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden text-white hover:bg-white/20 rounded-xl"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="bg-png-yellow/20 p-3 rounded-2xl backdrop-blur-sm border-2 border-png-yellow/30">
                <Shield className="h-10 w-10 text-png-yellow" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Adir Transport</h1>
                <p className="text-png-yellow text-base font-medium">Papua New Guinea's Premier Transport Platform</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-3 bg-png-yellow/20 px-4 py-3 rounded-2xl backdrop-blur-sm border border-png-yellow/30">
              <Wallet className="h-6 w-6 text-png-yellow" />
              <span className="font-bold text-lg text-png-yellow">K 150.00</span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/20 rounded-xl p-3"
            >
              <Bell className="h-6 w-6" />
              <Badge className="absolute -top-1 -right-1 h-6 w-6 p-0 bg-png-yellow text-png-black text-xs flex items-center justify-center rounded-full border-2 border-white font-bold">
                3
              </Badge>
            </Button>
            
            <Avatar className="h-12 w-12 border-3 border-png-yellow shadow-lg">
              <AvatarFallback className="bg-png-yellow text-png-black font-bold text-lg">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-png-yellow/10 px-4 py-2 rounded-full backdrop-blur-sm border border-png-yellow/20">
            <div className="w-2 h-2 bg-png-yellow rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-png-yellow">All Systems Operational</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;