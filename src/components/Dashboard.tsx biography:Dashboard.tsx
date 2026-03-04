import React, { useState } from 'react';
import { useProvider } from '../context/ProviderContext';
import { SHORT_CODES, PACKAGES } from '../lib/data';
import { 
  Smartphone, 
  Wifi, 
  PhoneCall, 
  CreditCard, 
  ArrowRightLeft, 
  History, 
  Bell,
  Search,
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export const Dashboard = () => {
  const { provider, setProvider, colors } = useProvider();
  const [activeTab, setActiveTab] = useState<'home' | 'shortcodes' | 'packages'>('home');

  const dialCode = (code: string) => {
    toast.success(`Dialing ${code}...`);
  };

  const currentShortCodes = SHORT_CODES[provider];
  const currentPackages = PACKAGES[provider];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className={`${colors.primary} text-white p-6 rounded-b-[2.5rem] shadow-lg sticky top-0 z-20`}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">EthioConnect</h1>
            <p className="text-white/80 text-sm">Welcome back, User</p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-white/20 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
              JD
            </div>
          </div>
        </div>

        {/* Provider Switcher */}
        <div className="bg-white/10 p-1 rounded-2xl flex">
          <button 
            onClick={() => setProvider('ethio')}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${provider === 'ethio' ? 'bg-white text-green-700 shadow-md' : 'text-white'}`}
          >
            Ethio Telecom
          </button>
          <button 
            onClick={() => setProvider('safaricom')}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${provider === 'safaricom' ? 'bg-white text-red-700 shadow-md' : 'text-white'}`}
          >
            Safaricom
          </button>
        </div>
      </header>

      <main className="p-4 mt-4 space-y-6">
        {activeTab === 'home' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Balance Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Available Balance</p>
                  <h2 className="text-3xl font-bold mt-1">142.50 <span className="text-sm font-normal text-gray-400">ETB</span></h2>
                </div>
                <div className={`${colors.primary} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {provider === 'ethio' ? 'Prepaid' : 'Postpaid'}
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => dialCode(provider === 'ethio' ? '*805#' : '*705#')}
                  className={`flex-1 ${colors.primary} text-white py-3 rounded-2xl font-medium flex items-center justify-center gap-2`}
                >
                  <Zap className="w-4 h-4" /> Top Up
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
                  <History className="w-4 h-4" /> History
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <section>
              <h3 className="text-lg font-bold mb-4 px-2">Quick Services</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: PhoneCall, label: 'Call', color: 'bg-blue-50 text-blue-600' },
                  { icon: Wifi, label: 'Data', color: 'bg-purple-50 text-purple-600' },
                  { icon: CreditCard, label: 'Finance', color: 'bg-orange-50 text-orange-600' },
                  { icon: ArrowRightLeft, label: 'Transfer', color: 'bg-green-50 text-green-600' },
                ].map((item, idx) => (
                  <button key={idx} className="flex flex-col items-center gap-2">
                    <div className={`${item.color} p-4 rounded-2xl`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Banner */}
            <div className="relative h-32 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src={provider === 'ethio' ? 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/85db991c-2c82-4454-a176-4d7744c2e7a9/ethio-telecom-dashboard-theme-50a877f7-1772638576826.webp' : 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/85db991c-2c82-4454-a176-4d7744c2e7a9/safaricom-ethiopia-dashboard-theme-af0219e3-1772638570873.webp'} 
                alt="Promo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6">
                <span className="text-white font-bold text-lg">Special Offer!</span>
                <span className="text-white/80 text-sm">Double your data this weekend</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'shortcodes' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search short codes..."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="space-y-3">
              {currentShortCodes.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => dialCode(item.code)}
                  className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-100 active:scale-95 transition-transform cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${colors.primary} p-3 rounded-xl bg-opacity-10 ${colors.accent}`}>
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.label}</h4>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-mono font-bold text-gray-700">{item.code}</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'packages' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold px-2">Popular Packages</h3>
            <div className="grid gap-4">
              {currentPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white p-5 rounded-3xl border border-gray-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-800">{pkg.title}</h4>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">{pkg.volume}</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">{pkg.validity}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => toast.success(`Purchased ${pkg.title}`)}
                    className={`${colors.primary} text-white px-4 py-2 rounded-xl text-sm font-bold`}
                  >
                    {pkg.price}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? colors.accent : 'text-gray-400'}`}
        >
          <Smartphone className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('shortcodes')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'shortcodes' ? colors.accent : 'text-gray-400'}`}
        >
          <Zap className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Codes</span>
        </button>
        <button 
          onClick={() => setActiveTab('packages')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'packages' ? colors.accent : 'text-gray-400'}`}
        >
          <Wifi className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <CreditCard className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Wallet</span>
        </button>
      </nav>
    </div>
  );
};