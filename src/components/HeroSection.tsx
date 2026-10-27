import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Users,
  Coins,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Download,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface HeroSectionProps {
  onOpenApkModal: () => void;
  onOpenPortalModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApkModal,
  onOpenPortalModal,
}) => {
  const slides = [
    {
      img: '/uploads/carousel/slide_1791228668.png',
      caption: 'Pool Resources for Generational Growth',
      tag: 'Family Capital',
    },
    {
      img: '/uploads/carousel/slide_1791229087.png',
      caption: 'Direct Construction & Land Development Funding',
      tag: 'Real Estate & Assets',
    },
    {
      img: '/uploads/carousel/slide_1791229003.png',
      caption: '24/7 Mobile Money (MTN & Airtel) Payouts',
      tag: 'Emergency Relief',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0f1c3f] via-[#152754] to-[#f8f9fa] pt-12 pb-20 text-white">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#f6e082] text-xs font-semibold backdrop-blur-sm shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>UGANDA'S PREMIER FAMILY FINANCIAL COOPERATIVE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] tracking-tight">
              Grow Your Family's <span className="gold-gradient-text">Wealth Together.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Saprones Family Savings unites relatives under one audited, high-yield vault.
              Fund family land construction, emergency relief, and high-interest rotational savings with instant MTN MoMo & Airtel Money convenience.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-[#f6e082]">UGX 1.4B+</div>
                <div className="text-[11px] text-slate-300">Pooled Savings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-[#f6e082]">520+</div>
                <div className="text-[11px] text-slate-300">Members</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-[#f6e082]">15.4%</div>
                <div className="text-[11px] text-slate-300">Annual Return</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-[#f6e082]">24/7</div>
                <div className="text-[11px] text-slate-300">MoMo Support</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenApkModal}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f6e082] to-[#d4af37] text-[#0f1c3f] font-bold text-base shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition flex items-center justify-center gap-3 cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-[#0f1c3f]" />
                <span>Download Android APK</span>
                <span className="text-[10px] bg-[#0f1c3f] text-[#f6e082] font-mono px-2 py-0.5 rounded-full uppercase">
                  v1.0
                </span>
              </button>

              <button
                onClick={onOpenPortalModal}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Member Portal / Passbook</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>

            {/* Sideload & WebAPK notice */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct .apk file
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Tap WebAPK
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-400" /> SSL / Bank Encrypted
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Carousel with real site slides */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#d4af37]/40 bg-slate-900 aspect-4/3 sm:aspect-16/10">
              
              {/* Slides */}
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/logo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[11px] font-semibold text-[#f6e082] uppercase tracking-wider bg-black/40 px-2.5 py-0.5 rounded-full w-max mb-1 border border-[#d4af37]/30">
                      {slide.tag}
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base leading-snug drop-shadow">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prev / Next controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 right-5 z-20 flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-6 bg-[#d4af37]' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Floating Android App Badge */}
            <div
              onClick={onOpenApkModal}
              className="absolute -bottom-6 -left-4 sm:left-4 z-20 bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 cursor-pointer hover:scale-105 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0f1c3f] flex items-center justify-center text-[#d4af37] shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  Android APK Ready <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-slate-500">Tap to download or install</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
