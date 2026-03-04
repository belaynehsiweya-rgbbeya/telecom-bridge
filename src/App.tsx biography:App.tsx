import React from 'react';
import { Toaster } from 'sonner';
import { ProviderProvider } from './context/ProviderContext';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <ProviderProvider>
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl relative overflow-hidden">
        <Dashboard />
        <Toaster position="top-center" richColors />
      </div>
    </ProviderProvider>
  );
}

export default App;