import React from 'react';
import {
  Users,
  Home,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Lock,
  Smartphone
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenPortalModal: () => void;
  onOpenApkModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenPortalModal,
  onOpenApkModal,
}) => {
  const services = [
    {
      icon: Users,
      title: 'Group Family Savings',
      desc: 'Pool monthly funds with siblings, parents, and extended relatives in a single, transparent digital ledger with real-time tracking.',
      features: ['Automated MoMo & Airtel deposits', 'Multi-member contribution tracking', 'Monthly PDF bank statements'],
    },
    {
      icon: Home,
      title: 'Construction & Development Fund',
      desc: 'Dedicated capital pool for purchasing family plots, financing brick manufacturing, and completing residential and rental buildings.',
      features: ['Direct contractor disbursements', 'Bulk building material discounts', 'Staged milestone payouts'],
    },
    {
      icon: RotateCcw,
      title: 'Rotating Savings Rounds (Chama)',
      desc: 'Structured monthly or bi-weekly merry-go-round rounds where each family member receives a lump sum payout on schedule.',
      features: ['Automated rotational calendar', 'Zero default guarantees', 'Fair ballot or emergency priority'],
    },
    {
      icon: ShieldCheck,
      title: 'Secure Vault Custody',
      desc: 'Dual-signatory verification ensures no single individual can authorize withdrawals without executive family approval.',
      features: ['Two-factor authentication', 'Cryptographic transaction hashes', 'Annual external audit report'],
    },
    {
      icon: HeartHandshake,
      title: 'Emergency Relief Pool',
      desc: 'A dedicated safety cushion providing 24/7 instant cash disbursements for hospital emergencies, accidents, or urgent family travel.',
      features: ['Disbursed within 15 minutes', 'Low benevolent interest rate', 'Flexible repayment restructuring'],
    },
    {
      icon: Sprout,
      title: 'Agricultural & Enterprise Fund',
      desc: 'Support family agribusiness, livestock breeding, poultry farms, and shop inventory through collective asset financing.',
      features: ['Seasonal harvest repayment', 'Agri-input wholesale purchasing', 'Shared agricultural dividends'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1c3f]/5 text-[#0f1c3f] text-xs font-bold uppercase tracking-wider">
            Cooperative Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            Tailored Financial Solutions for Your Entire Family
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every feature is engineered to protect your capital, resolve family emergencies, and fund generational construction.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-slate-50/70 border border-slate-200 hover:border-[#d4af37] transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0f1c3f] text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenPortalModal}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-[#0f1c3f] hover:text-[#f6e082] hover:border-[#0f1c3f] text-xs font-bold text-slate-800 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enroll in Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl navy-gradient text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#f6e082] font-semibold">
              Instant Mobile Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              Access All Services from Your Android Phone
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Install the Saprones APK or WebAPK today to receive instant deposit receipts, vote on loan requests, and monitor project milestones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenApkModal}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6e082] text-[#0f1c3f] font-bold text-sm shadow-lg hover:shadow-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Android APK</span>
            </button>
            <button
              onClick={onOpenPortalModal}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition cursor-pointer"
            >
              Member Login
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
