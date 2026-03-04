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
  ChevronRight,
  Menu,
  Wallet as WalletIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export const Dashboard = () => {
  const { provider, setProvider, colors } = useProvider();
  const [activeTab, setActiveTab] = useState<'home' | 'shortcodes' | 'packages' | 'wallet'>('home');

  const dialCode = (code: string) => {
    toast.success(`Dialing ${code}...`);
  };

  const currentShortCodes = SHORT_CODES[provider];
  const currentPackages = PACKAGES[provider];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans max-w-md mx-auto relative shadow-xl ring-1 ring-gray-200">
      {/* Header */}
      <header className={`${colors.primary} text-white p-6 rounded-b-[3rem] shadow-xl sticky top-0 z-20 transition-colors duration-500`}>
        <div className="flex justify-between items-center mb-6">
          <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-black tracking-tight">ETHIO CONNECT</h1>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Provider Switcher */}
        <div className="bg-black/10 backdrop-blur-sm p-1 rounded-2xl flex border border-white/10 mb-2">
          <button 
            onClick={() => setProvider('ethio')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${provider === 'ethio' ? 'bg-white text-green-700 shadow-lg scale-100' : 'text-white/70 hover:text-white'}`}
          >
            ETHIO TELECOM
          </button>
          <button 
            onClick={() => setProvider('safaricom')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${provider === 'safaricom' ? 'bg-white text-red-700 shadow-lg scale-100' : 'text-white/70 hover:text-white'}`}
          >
            SAFARICOM
          </button>
        </div>
      </header>

      <main className="p-5 -mt-6 z-10 relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Balance Card */}
              <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Available Balance</p>
                    <div className="flex items-baseline gap-2">
                      <h2 className="text-4xl font-black tracking-tight text-gray-900">142.50</h2>
                      <span className="text-sm font-bold text-gray-400">ETB</span>
                    </div>
                  </div>
                  <div className={`${colors.primary} text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                    {provider === 'ethio' ? 'Telebirr Active' : 'M-PESA Active'}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => dialCode(provider === 'ethio' ? '*805#' : '*705#')}
                    className={`flex-1 ${colors.primary} text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-current/20 active:scale-95 transition-transform`}
                  >
                    <Zap className="w-4 h-4" /> Top Up
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 active:scale-95 transition-transform">
                    <History className="w-4 h-4" /> Activity
                  </button>
                </div>
              </div>

              {/* Quick Actions Grid */}
              <section>
                <div className="flex justify-between items-center mb-4 px-2">
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Quick Services</h3>
                  <button className={`${colors.accent} text-xs font-bold`}>View All</button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: PhoneCall, label: 'Call', color: 'bg-blue-50 text-blue-600' },
                    { icon: Wifi, label: 'Internet', color: 'bg-purple-50 text-purple-600' },
                    { icon: CreditCard, label: 'Pay', color: 'bg-orange-50 text-orange-600' },
                    { icon: ArrowRightLeft, label: 'Transfer', color: 'bg-indigo-50 text-indigo-600' },
                  ].map((item, idx) => (
                    <button key={idx} className="flex flex-col items-center gap-2 group">
                      <div className={`${item.color} p-4 rounded-2xl group-active:scale-90 transition-transform shadow-sm`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">{item.label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Promotional Hero */}
              <div className="relative h-44 rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                <img 
                  src={provider === 'ethio' ? 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/85db991c-2c82-4454-a176-4d7744c2e7a9/ethio-telecom-dashboard-theme-50a877f7-1772638576826.webp' : 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/85db991c-2c82-4454-a176-4d7744c2e7a9/safaricom-ethiopia-dashboard-theme-af0219e3-1772638570873.webp'} 
                  alt="Promo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-white font-black text-xl leading-tight">UNLIMITED<br/>WEEKEND DATA</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Upgrade Now</span>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'shortcodes' && (
            <motion.div 
              key="codes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Find a short code..."
                  className="w-full pl-14 pr-6 py-4 bg-white rounded-3xl border border-gray-100 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                />
              </div>
              
              <div className="space-y-3">
                {currentShortCodes.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => dialCode(item.code)}
                    className="w-full bg-white p-5 rounded-3xl flex items-center justify-between border border-gray-100 hover:border-gray-200 active:scale-[0.98] transition-all shadow-sm text-left group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`${colors.light} p-4 rounded-2xl ${colors.accent}`}>
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 text-base">{item.label}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-black font-mono text-gray-800 tracking-tighter">{item.code}</span>
                      <span className={`${colors.accent} text-[9px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity`}>Dial Now</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'packages' && (
            <motion.div 
              key="packages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-1">
                {['All', 'Internet', 'Voice', 'SMS', 'Roaming'].map((cat, i) => (
                  <button key={i} className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest ${i === 0 ? colors.primary + ' text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid gap-4">
                {currentPackages.map((pkg) => (
                  <div key={pkg.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <h4 className="font-black text-gray-900 text-lg">{pkg.title}</h4>
                        <div className="flex gap-3 mt-2">
                          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                            <Wifi className="w-3 h-3 text-gray-400" />
                            <span className="text-[10px] font-black text-gray-600 uppercase">{pkg.volume}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                            <History className="w-3 h-3 text-gray-400" />
                            <span className="text-[10px] font-black text-gray-600 uppercase">{pkg.validity}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toast.success(`Purchased ${pkg.title}`)}
                        className={`${colors.primary} text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-current/20 active:scale-95 transition-transform`}
                      >
                        {pkg.price}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'wallet' && (
            <motion.div 
              key="wallet"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className={`${colors.primary} p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <WalletIcon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-2">Digital Wallet</p>
                  <h3 className="text-4xl font-black mb-8 tracking-tighter">8,450.00 <span className="text-sm font-normal">ETB</span></h3>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-white/60 text-[8px] font-bold uppercase mb-1">Last Transaction</p>
                      <p className="text-xs font-bold">- 250.00 ETB</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[8px] font-bold uppercase mb-1">Loyalty Points</p>
                      <p className="text-xs font-bold">1,240 Pts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100">
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-6 px-2">Recent Transactions</h4>
                <div className="space-y-6">
                  {[
                    { title: 'Electricity Bill', date: 'Oct 24, 2023', amount: '- 450.00', icon: Zap },
                    { title: 'Money Received', date: 'Oct 22, 2023', amount: '+ 1,200.00', icon: CreditCard },
                    { title: 'Package Purchase', date: 'Oct 21, 2023', amount: '- 50.00', icon: Wifi },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                          <item.icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{item.date}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-black ${item.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 px-8 py-5 flex justify-between items-center z-30 rounded-t-[2.5rem] shadow-2xl">
        {[
          { id: 'home', icon: Smartphone, label: 'Home' },
          { id: 'shortcodes', icon: Zap, label: 'Codes' },
          { id: 'packages', icon: Wifi, label: 'Data' },
          { id: 'wallet', icon: WalletIcon, label: 'Wallet' },
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${activeTab === item.id ? colors.accent + ' scale-110' : 'text-gray-300 hover:text-gray-400'}`}
          >
            <item.icon className="w-6 h-6" strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className={`text-[9px] font-black uppercase tracking-widest ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`}>
              {item.label}
            </span>
            {activeTab === item.id && (
              <motion.div 
                layoutId="nav-dot"
                className={`absolute -top-1 w-1 h-1 rounded-full ${colors.primary.replace('bg-', 'bg-')}`}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};