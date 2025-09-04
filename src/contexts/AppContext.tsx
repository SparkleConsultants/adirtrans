import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  userLocation: string;
  setUserLocation: (location: string) => void;
  currentBooking: any;
  setCurrentBooking: (booking: any) => void;
  userProfile: {
    name: string;
    phone: string;
    verified: boolean;
    walletBalance: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userLocation, setUserLocation] = useState('Port Moresby, PNG');
  const [currentBooking, setCurrentBooking] = useState(null);
  
  const [userProfile] = useState({
    name: 'John Doe',
    phone: '+675 123 4567',
    verified: true,
    walletBalance: 150.00
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const value: AppContextType = {
    sidebarOpen,
    toggleSidebar,
    userLocation,
    setUserLocation,
    currentBooking,
    setCurrentBooking,
    userProfile
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};