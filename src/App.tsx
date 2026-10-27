import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { MemberPortalModal } from './components/MemberPortalModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Smartphone, MessageCircle, UserCheck } from 'lucide-react';
import { usePWAInstall } from './hooks/usePWAInstall';

export default function App() {
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<{
    plan: string;
    amount: number;
    months: number;
    total: number;
  } | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const { isInstalled, isInstallable, install } = usePWAInstall();

  const handleStartSaving = (goalData: {
    plan: string;
    amount: number;
    months: number;
    total: number;
  }) => {
    setSelectedGoal(goalData);
    setIsPortalModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] selection:bg-[#d4af37] selection:text-[#0f1c3f] relative pb-16 sm:pb-0">
      {/* Offline Status Alert */}
      <OfflineIndicator />

      {/* Main Navbar */}
      <Navbar
        onOpenApkModal={() => setIsApkModalOpen(true)}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenApkModal={() => setIsApkModalOpen(true)}
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
        />

        {/* Live Savings Calculator */}
        <SavingsCalculator onStartSaving={handleStartSaving} />

        {/* Cooperative Services & Plans */}
        <ServicesSection
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
          onOpenApkModal={() => setIsApkModalOpen(true)}
        />

        {/* About & Leadership Team */}
        <AboutSection />

        {/* Direct Contact & WhatsApp */}
        <ContactSection onOpenApkModal={() => setIsApkModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenApkModal={() => setIsApkModalOpen(true)}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Dedicated APK Download & Installation Modal */}
      <ApkDownloadModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
      />

      {/* Member Passbook & MoMo Portal Modal */}
      <MemberPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        initialGoal={selectedGoal}
      />

      {/* Floating Bottom Quick Bar for Mobile Devices */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#0f1c3f]/95 backdrop-blur-lg border border-[#d4af37]/40 shadow-2xl rounded-2xl p-2 flex items-center justify-between text-xs">
        <button
          onClick={() => setIsApkModalOpen(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6e082] text-[#0f1c3f] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition cursor-pointer"
        >
          <Smartphone className="w-4 h-4 text-[#0f1c3f]" />
          <span>Get APK App</span>
        </button>

        <button
          onClick={() => setIsPortalModalOpen(true)}
          className="flex-1 py-2 px-3 text-white font-medium flex items-center justify-center gap-1.5 hover:text-[#f6e082] transition cursor-pointer"
        >
          <UserCheck className="w-4 h-4 text-[#d4af37]" />
          <span>Portal</span>
        </button>

        <a
          href="https://wa.me/256780218814"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md cursor-pointer"
          title="WhatsApp Support"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
