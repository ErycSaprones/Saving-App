import React, { useState } from 'react';
import {
  Smartphone,
  Download,
  Menu,
  X,
  Calculator,
  Shield,
  Users,
  PhoneCall,
  UserCheck,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenApkModal: () => void;
  onOpenPortalModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApkModal,
  onOpenPortalModal,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#0a122a] text-[#f6e082] text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-medium">
          Official Android APK (v1.0.0) Available for Direct Installation & Sideload
        </span>
        <button
          onClick={onOpenApkModal}
          className="underline font-bold text-white hover:text-[#d4af37] ml-1 cursor-pointer"
        >
          Download APK →
        </button>
      </div>

      <header className="sticky top-0 z-40 bg-[#0f1c3f]/95 backdrop-blur-md border-b border-[#1e3c72]/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-xl bg-white/10 p-1.5 ring-1 ring-[#d4af37]/40 group-hover:ring-[#d4af37] transition shadow-md flex items-center justify-center">
              <img
                src="/assets/images/logo.png"
                alt="Saprones Logo"
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/pwa-192x192.png';
                }}
              />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight flex items-center gap-1.5">
                Saprones
                <span className="text-[#d4af37] font-sans text-xs uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded bg-white/10">
                  Savings
                </span>
              </div>
              <div className="text-[10px] text-slate-300 tracking-wider uppercase font-medium">
                Family Wealth Collective
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs lg:text-sm font-medium transition cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#f6e082] bg-white/10 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPortalModal}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs lg:text-sm font-medium transition flex items-center gap-1.5 border border-white/10 cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Member Portal</span>
            </button>

            <button
              onClick={onOpenApkModal}
              className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6e082] hover:brightness-105 text-[#0f1c3f] text-xs lg:text-sm font-bold shadow-lg shadow-[#d4af37]/25 transition flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get APK</span>
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-emerald-500 text-white text-[9px] font-black rounded-full uppercase tracking-tighter">
                NEW
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenApkModal}
              className="p-2 rounded-lg bg-[#d4af37] text-[#0f1c3f] font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>APK</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0c1735] border-t border-white/10 px-4 py-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-white/15 text-[#f6e082] font-semibold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortalModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-[#d4af37]" />
                Member Login / Passbook
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApkModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6e082] text-[#0f1c3f] font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                Download Android APK (.apk)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
