import React, { useState } from 'react';
import {
  X,
  User,
  Shield,
  CreditCard,
  PlusCircle,
  TrendingUp,
  History,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Phone,
  FileText,
  Lock,
  DollarSign
} from 'lucide-react';

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: { plan: string; amount: number; months: number; total: number } | null;
}

interface Transaction {
  id: string;
  type: 'deposit' | 'dividend' | 'payout';
  amount: number;
  date: string;
  method: string;
  status: 'Completed' | 'Pending';
  reference: string;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({
  isOpen,
  onClose,
  initialGoal,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [memberName, setMemberName] = useState('Eryc Saprones');
  const [memberPhone, setMemberPhone] = useState('+256 773 982 192');
  const [branch, setBranch] = useState('Kampala Central Branch');

  // Balances
  const [balance, setBalance] = useState<number>(4850000); // 4.85m UGX
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'history'>('overview');

  // Deposit Form
  const [depositAmount, setDepositAmount] = useState<number>(initialGoal ? initialGoal.amount : 250000);
  const [depositNetwork, setDepositNetwork] = useState<'MTN' | 'Airtel'>('MTN');
  const [depositPhone, setDepositPhone] = useState<string>('0773982192');
  const [depositSuccess, setDepositSuccess] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Transaction history
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'TX-9481',
      type: 'deposit',
      amount: 250000,
      date: '24 Oct 2026',
      method: 'MTN Mobile Money',
      status: 'Completed',
      reference: 'MOMO-9918239',
    },
    {
      id: 'TX-9204',
      type: 'dividend',
      amount: 48200,
      date: '01 Oct 2026',
      method: 'Monthly Interest 15%',
      status: 'Completed',
      reference: 'DIV-2026-10',
    },
    {
      id: 'TX-8831',
      type: 'deposit',
      amount: 500000,
      date: '15 Sep 2026',
      method: 'Airtel Money',
      status: 'Completed',
      reference: 'AIRTEL-448123',
    },
  ]);

  if (!isOpen) return null;

  const handleSimulateDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    if (depositAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBalance((prev) => prev + Number(depositAmount));
      const newTx: Transaction = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'deposit',
        amount: Number(depositAmount),
        date: 'Today, Just now',
        method: `${depositNetwork} Mobile Money (${depositPhone})`,
        status: 'Completed',
        reference: `${depositNetwork.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`,
      };
      setTransactions([newTx, ...transactions]);
      setDepositSuccess(`Successfully deposited UGX ${Number(depositAmount).toLocaleString()} via ${depositNetwork} Money!`);
      setTimeout(() => {
        setDepositSuccess(null);
        setActiveTab('overview');
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="navy-gradient px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 p-2 flex items-center justify-center ring-1 ring-white/20">
              <Shield className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#f6e082] font-semibold">
                Member Digital Passbook
              </div>
              <h3 className="text-xl font-bold font-serif">Saprones Portal</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Bar */}
        <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0f1c3f] text-[#f6e082] flex items-center justify-center font-bold text-[11px]">
              ES
            </div>
            <div>
              <span className="font-bold text-slate-900">{memberName}</span>
              <span className="text-slate-500 ml-2">ID: SAP-2026-9812</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{branch}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-6 pt-3 gap-3 bg-white text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-2 border-b-2 transition cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#0f1c3f] text-[#0f1c3f]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Overview & Balance
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`pb-3 px-2 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'deposit'
                ? 'border-[#0f1c3f] text-[#0f1c3f]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            Deposit via MoMo / Airtel
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 px-2 border-b-2 transition cursor-pointer ${
              activeTab === 'history'
                ? 'border-[#0f1c3f] text-[#0f1c3f]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Transaction History ({transactions.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Big Balance Card */}
              <div className="navy-gradient rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="text-xs uppercase tracking-wider text-[#f6e082] font-semibold">
                  Cumulative Member Balance
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono gold-gradient-text my-2">
                  UGX {balance.toLocaleString()}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-slate-400">Monthly Contribution: </span>
                    <strong className="text-white">UGX 250,000</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Total Dividend Accrued: </span>
                    <strong className="text-emerald-400">+UGX 312,400</strong>
                  </div>
                </div>
              </div>

              {/* Active Projects / Goals */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Active Family Schemes & Milestones
                </h4>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">1. Kira Town Land Acquisition</span>
                    <span className="text-emerald-700 font-bold">75% Funded</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#d4af37] to-emerald-500 w-[75%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>UGX 7,500,000 deposited</span>
                    <span>Target: UGX 10,000,000</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">2. Emergency Medical Pool Cushion</span>
                    <span className="text-blue-700 font-bold">100% Fully Funded</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-blue-600 w-full rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>UGX 2,000,000 intact</span>
                    <span>Instant 24/7 liquid withdrawal ready</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab('deposit')}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4 text-[#d4af37]" />
                  Add MoMo Contribution
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition cursor-pointer"
                >
                  View Receipts
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: DEPOSIT VIA MOBILE MONEY */}
          {activeTab === 'deposit' && (
            <form onSubmit={handleSimulateDeposit} className="space-y-5">
              
              {depositSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {depositSuccess}
                </div>
              )}

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                <Smartphone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Instant Ugandan Mobile Money Gateway:</strong>
                  <p className="text-[11px] text-blue-800 mt-0.5">
                    Official merchant channels for MTN Uganda (+256 773 982 192) & Airtel Money (+256 780 218 814).
                  </p>
                </div>
              </div>

              {/* Network Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Mobile Network
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDepositNetwork('MTN')}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition cursor-pointer ${
                      depositNetwork === 'MTN'
                        ? 'border-amber-400 bg-amber-50 text-amber-950 ring-2 ring-amber-300 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    MTN Mobile Money
                  </button>

                  <button
                    type="button"
                    onClick={() => setDepositNetwork('Airtel')}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition cursor-pointer ${
                      depositNetwork === 'Airtel'
                        ? 'border-red-400 bg-red-50 text-red-950 ring-2 ring-red-300 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Airtel Money
                  </button>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Deposit Amount (UGX)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                    UGX
                  </span>
                  <input
                    type="number"
                    min="5000"
                    step="5000"
                    required
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-bold font-mono focus:ring-2 focus:ring-[#0f1c3f] outline-none"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {[50000, 100000, 250000, 500000].map((quick) => (
                    <button
                      type="button"
                      key={quick}
                      onClick={() => setDepositAmount(quick)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-700 cursor-pointer"
                    >
                      {quick.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Payer Mobile Number
                </label>
                <input
                  type="text"
                  required
                  value={depositPhone}
                  onChange={(e) => setDepositPhone(e.target.value)}
                  placeholder="e.g. 0773982192"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0f1c3f] outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  A USSD prompt will simulate a PIN approval on your mobile handset.
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing USSD Request...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 text-[#d4af37]" />
                    <span>Authorize Deposit (UGX {depositAmount.toLocaleString()})</span>
                  </>
                )}
              </button>

            </form>
          )}

          {/* TAB 3: TRANSACTION HISTORY */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Recent Audited Ledger Entries</span>
                <span className="font-semibold text-emerald-600">Double-Signatory Verified</span>
              </div>

              <div className="space-y-2.5">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="capitalize">{tx.type}</span>
                        <span className="font-mono text-[10px] text-slate-400">({tx.reference})</span>
                      </div>
                      <div className="text-slate-500 text-[11px]">{tx.method}</div>
                      <div className="text-[10px] text-slate-400">{tx.date}</div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`font-mono font-bold text-sm ${
                          tx.type === 'deposit' || tx.type === 'dividend'
                            ? 'text-emerald-700'
                            : 'text-rose-700'
                        }`}
                      >
                        +{tx.amount.toLocaleString()} UGX
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold mt-0.5">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>256-Bit Ledger Encryption</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
