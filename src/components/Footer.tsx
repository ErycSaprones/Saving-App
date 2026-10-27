import React, { useState } from 'react';
import {
  ShieldCheck,
  Smartphone,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle,
  ChevronRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenApkModal: () => void;
  onOpenPortalModal: () => void;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApkModal,
  onOpenPortalModal,
  onNavigate,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0a122a] text-slate-300 border-t border-slate-800 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 ring-1 ring-[#d4af37]/50 flex items-center justify-center">
                <img
                  src="/assets/images/logo.png"
                  alt="Saprones Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/pwa-192x192.png';
                  }}
                />
              </div>
              <div>
                <span className="text-lg font-bold font-serif text-white tracking-tight">
                  Saprones Family Savings
                </span>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Secure Your Future
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Uganda's trusted family financial cooperative. Pooled wealth management, rotational payouts, construction funding, and 24/7 Mobile Money emergency assistance.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenApkModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6e082] text-[#0f1c3f] font-bold text-xs shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Download Android APK (v1.0.0)</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold font-serif text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#f6e082] transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-[#f6e082] transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Savings Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#f6e082] transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Services & Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#f6e082] transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> About Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPortalModal}
                  className="hover:text-[#f6e082] transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Member Passbook
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold font-serif text-sm">Contact Officers</h4>
            <div className="space-y-2 text-slate-400">
              <a
                href="tel:+256773982192"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>+256 773 982 192</span>
              </a>
              <a
                href="https://wa.me/256780218814"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+256 780 218 814 (WhatsApp)</span>
              </a>
              <a
                href="mailto:www.erycsaprones@gmail.com"
                className="flex items-center gap-2 hover:text-white transition break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>www.erycsaprones@gmail.com</span>
              </a>
              <div className="pt-1 text-[11px] text-slate-400">
                Plot 14, Kampala Road, Kampala, Uganda
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold font-serif text-sm">Quarterly Reports</h4>
            <p className="text-slate-400 text-xs">
              Subscribe to receive quarterly audit figures, construction updates, and interest dividend declarations.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-xl bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-[#d4af37] outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] font-semibold text-xs border border-white/20 transition cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Saprones Family Savings. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://savings.yzz.me/Savings/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#f6e082] hover:underline font-semibold"
            >
              <span>Original Web Host</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <button
              onClick={onOpenApkModal}
              className="hover:text-white transition cursor-pointer"
            >
              Android APK & WebAPK
            </button>
            <span>•</span>
            <span>Uganda SACCO Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
