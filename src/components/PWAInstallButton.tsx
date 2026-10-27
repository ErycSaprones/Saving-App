import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  onOpenApkModal?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'gold';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  onOpenApkModal,
  className = '',
  variant = 'primary',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  const handleClick = async () => {
    if (isInstallable) {
      const installed = await install();
      if (!installed && onOpenApkModal) {
        onOpenApkModal();
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else if (onOpenApkModal) {
      onOpenApkModal();
    }
  };

  if (isInstalled) {
    return (
      <button
        onClick={onOpenApkModal}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-emerald-300 text-xs font-medium ${className}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>APK Installed (v1.0)</span>
      </button>
    );
  }

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all active:scale-95 cursor-pointer rounded-xl';
  
  let variantStyles = 'bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] shadow-md border border-[#d4af37]/30';
  if (variant === 'gold') {
    variantStyles = 'bg-gradient-to-r from-[#d4af37] to-[#f6e082] text-[#0f1c3f] font-bold hover:shadow-lg hover:shadow-[#d4af37]/20 border border-[#b8962e]';
  } else if (variant === 'outline') {
    variantStyles = 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm';
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles} px-4 py-2 ${className}`}
        title="Install Android APK / WebAPK"
      >
        <Smartphone className="w-4 h-4 text-[#d4af37]" />
        <span>Install APK</span>
      </button>

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Install on iPhone / iPad</h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              1. Tap the <strong>Share button</strong> (square with arrow) in your Safari toolbar.<br />
              2. Scroll down and tap <strong>Add to Home Screen</strong>.<br />
              3. Tap <strong>Add</strong> to pin Saprones Savings to your app screen.
            </p>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
