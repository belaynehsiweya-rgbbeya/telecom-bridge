import React from 'react';
import { Toaster } from 'sonner';
import { ProviderProvider } from './context/ProviderContext';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <ProviderProvider>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-0 sm:p-4">
        <Dashboard />
        <Toaster position="top-center" richColors />
      </div>
    </ProviderProvider>
  );
}

export default App;