import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  Coins,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface SavingsCalculatorProps {
  onStartSaving: (goalData: { plan: string; amount: number; months: number; total: number }) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onStartSaving,
}) => {
  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(200000); // 200,000 UGX
  const [durationMonths, setDurationMonths] = useState<number>(12);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('construction');

  const plans = [
    {
      id: 'family',
      name: 'Family Wealth Pool',
      rate: 0.12,
      badge: '12% p.a.',
      desc: 'Standard collective pool for long-term family financial security.',
    },
    {
      id: 'construction',
      name: 'Construction & Land Fund',
      rate: 0.15,
      badge: '15% p.a. High Yield',
      desc: 'Dedicated fund for bricks, plot purchases, and residential building.',
    },
    {
      id: 'education',
      name: 'Education Future Fund',
      rate: 0.14,
      badge: '14% p.a.',
      desc: 'Shield children tuition and university fees from inflation.',
    },
    {
      id: 'emergency',
      name: 'Emergency Cushion',
      rate: 0.08,
      badge: '8% Liquid',
      desc: 'Fast 24-hr disbursement for healthcare and pressing needs.',
    },
  ];

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[0];

  // Calculations
  const totalPrincipal = monthlyDeposit * durationMonths;
  // Compound monthly interest approximation
  const monthlyRate = selectedPlan.rate / 12;
  // Future value of an annuity formula: P * [((1 + r)^n - 1) / r]
  const futureValue =
    monthlyRate > 0
      ? monthlyDeposit * ((Math.pow(1 + monthlyRate, durationMonths) - 1) / monthlyRate)
      : totalPrincipal;
  const totalInterest = Math.max(0, futureValue - totalPrincipal);

  // Formatting helpers
  const formatMoney = (val: number) => {
    if (currency === 'UGX') {
      return `UGX ${Math.round(val).toLocaleString()}`;
    }
    return `$${Math.round(val).toLocaleString()}`;
  };

  const handleCurrencyChange = (newCurr: 'UGX' | 'USD') => {
    if (newCurr === currency) return;
    setCurrency(newCurr);
    if (newCurr === 'USD') {
      setMonthlyDeposit(Math.round(monthlyDeposit / 3700) || 50);
    } else {
      setMonthlyDeposit(Math.round(monthlyDeposit * 3700) || 200000);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyDeposit(Number(e.target.value));
  };

  const minDeposit = currency === 'UGX' ? 50000 : 20;
  const maxDeposit = currency === 'UGX' ? 3000000 : 800;
  const stepDeposit = currency === 'UGX' ? 25000 : 10;

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3c72]/10 text-[#0f1c3f] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            Live Wealth Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            Calculate Your Family’s Projected Returns
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Estimate your group or personal monthly contributions, accrued cooperative dividends, and maturity payout under Saprones audited savings schemes.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex rounded-xl p-1 bg-slate-200 text-xs font-semibold">
            <button
              onClick={() => handleCurrencyChange('UGX')}
              className={`px-4 py-1.5 rounded-lg transition cursor-pointer ${
                currency === 'UGX'
                  ? 'bg-[#0f1c3f] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UGX (Ugandan Shillings)
            </button>
            <button
              onClick={() => handleCurrencyChange('USD')}
              className={`px-4 py-1.5 rounded-lg transition cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[#0f1c3f] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200/80 space-y-7">
            
            {/* Step 1: Scheme Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Savings Scheme
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlanId(p.id)}
                    className={`p-4 rounded-2xl border text-left transition relative cursor-pointer ${
                      selectedPlanId === p.id
                        ? 'border-[#0f1c3f] bg-blue-50/50 ring-2 ring-[#0f1c3f]/10 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-900">{p.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#9e7d18] border border-[#d4af37]/40">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Monthly Deposit Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Monthly Contribution
                </label>
                <div className="text-lg sm:text-xl font-bold font-mono text-[#0f1c3f] bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
                  {formatMoney(monthlyDeposit)}
                </div>
              </div>

              <input
                type="range"
                min={minDeposit}
                max={maxDeposit}
                step={stepDeposit}
                value={monthlyDeposit}
                onChange={handleSliderChange}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f1c3f]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>{formatMoney(minDeposit)}</span>
                <span>{formatMoney(maxDeposit)}</span>
              </div>
            </div>

            {/* Step 3: Tenure / Duration */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Savings Duration
                </label>
                <span className="text-sm font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-xl">
                  {durationMonths} Months ({ (durationMonths / 12).toFixed(1) } yrs)
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {[3, 6, 12, 24, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setDurationMonths(months)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                      durationMonths === months
                        ? 'bg-[#0f1c3f] text-white border-[#0f1c3f] shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {months} mo
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 navy-gradient text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#f6e082] font-semibold">
                  Maturity Projection
                </span>
                <h3 className="text-2xl font-bold font-serif mt-1">
                  Estimated Total Return
                </h3>
              </div>

              {/* Big Hero Number */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center">
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  Total Projected Value
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono gold-gradient-text my-1">
                  {formatMoney(futureValue)}
                </div>
                <div className="text-xs text-[#f6e082] font-medium flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Estimated Growth: +{formatMoney(totalInterest)}
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300">Total Capital Contributed:</span>
                  <span className="font-mono font-semibold text-white">{formatMoney(totalPrincipal)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300">Cooperative Dividend / Interest:</span>
                  <span className="font-mono font-semibold text-[#f6e082]">+{formatMoney(totalInterest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300">Annual Return Rate:</span>
                  <span className="font-semibold text-emerald-400">{(selectedPlan.rate * 100).toFixed(1)}% p.a.</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Target Completion:</span>
                  <span className="font-semibold text-white">
                    {new Date(Date.now() + durationMonths * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onStartSaving({
                    plan: selectedPlan.name,
                    amount: monthlyDeposit,
                    months: durationMonths,
                    total: Math.round(futureValue),
                  })
                }
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f6e082] to-[#d4af37] text-[#0f1c3f] font-bold text-sm shadow-lg hover:shadow-[#d4af37]/30 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Passbook for This Goal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Regulated under Uganda SACCO Guidelines & Family Charter
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
