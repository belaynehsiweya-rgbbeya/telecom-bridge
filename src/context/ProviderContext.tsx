import React, { createContext, useContext, useState, ReactNode } from 'react';

type Provider = 'ethio' | 'safaricom';

interface ProviderContextType {
  provider: Provider;
  setProvider: (p: Provider) => void;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
  };
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<Provider>('ethio');

  const colors = provider === 'ethio' 
    ? { primary: 'bg-green-600', secondary: 'bg-yellow-400', accent: 'text-green-700', light: 'bg-green-50' }
    : { primary: 'bg-red-600', secondary: 'bg-emerald-700', accent: 'text-red-700', light: 'bg-red-50' };

  return (
    <ProviderContext.Provider value={{ provider, setProvider, colors }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(ProviderContext);
  if (!context) throw new Error('useProvider must be used within ProviderProvider');
  return context;
};