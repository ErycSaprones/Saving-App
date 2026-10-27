import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import {
  Download,
  Smartphone,
  CheckCircle2,
  Share2,
  Copy,
  ExternalLink,
  Code2,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  X,
  FileCode,
  Layers,
  ArrowRight
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isInstallable, isInstalled, install, isIOS } = usePWAInstall();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'direct' | 'pwa' | 'source' | 'guide'>('direct');
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://savings.yzz.me/Savings/';
  const apkDownloadUrl = '/downloads/SapronesSavings.apk';
  const projectZipUrl = '/downloads/SapronesSavings-AndroidStudio-Project.zip';

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(currentUrl, {
        width: 260,
        margin: 1.5,
        color: {
          dark: '#0f1c3f',
          light: '#ffffff',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('Error generating QR code', err));
    }
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-[#0a122a]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
        
        {/* Header */}
        <div className="relative navy-gradient px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/20 p-2 flex items-center justify-center shrink-0 shadow-inner">
              <img src="/pwa-192x192.png" alt="Saprones" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f6e082] text-xs font-semibold uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" /> Official Android APK Package
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                Get Saprones on Android
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 overflow-x-auto text-xs font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('direct')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'direct'
                ? 'border-[#0f1c3f] bg-white text-[#0f1c3f] font-bold shadow-sm'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4 text-[#d4af37]" />
            Direct APK (.apk)
          </button>

          <button
            onClick={() => setActiveTab('pwa')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'pwa'
                ? 'border-[#0f1c3f] bg-white text-[#0f1c3f] font-bold shadow-sm'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4 text-[#d4af37]" />
            1-Click WebAPK (PWA)
          </button>

          <button
            onClick={() => setActiveTab('source')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'source'
                ? 'border-[#0f1c3f] bg-white text-[#0f1c3f] font-bold shadow-sm'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4 text-[#d4af37]" />
            Android Studio Project (.zip)
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'guide'
                ? 'border-[#0f1c3f] bg-white text-[#0f1c3f] font-bold shadow-sm'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            Install Instructions
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">

          {/* TAB 1: Direct APK */}
          {activeTab === 'direct' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 p-5 border border-amber-200/60 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0f1c3f] p-3 text-[#d4af37] flex items-center justify-center shrink-0 shadow-md">
                  <Download className="w-8 h-8" />
                </div>
                <div className="space-y-1 text-center sm:text-left flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    SapronesSavings.apk (v1.0.0)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Standalone Android application package. Compatible with Android 8.0 through Android 15+.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs text-slate-500 font-medium">
                    <span>📦 Size: ~2.0 MB</span>
                    <span>•</span>
                    <span>🔐 Architecture: Universal</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Clean & Verified
                    </span>
                  </div>
                </div>
                <a
                  href={apkDownloadUrl}
                  download="SapronesSavings.apk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] font-semibold text-sm shadow-md transition active:scale-95 cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>

              {/* QR Code Section for Mobile Scanning */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                  {qrDataUrl ? (
                    <img src={qrDataUrl} alt="Scan QR Code" className="w-36 h-36 rounded-lg" />
                  ) : (
                    <div className="w-36 h-36 bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-xs text-slate-400">
                      Generating QR...
                    </div>
                  )}
                </div>
                <div className="space-y-3 text-center md:text-left flex-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center justify-center md:justify-start gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#1e3c72]" /> Scan with Your Android Phone
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Open your phone camera or QR scanner to open this app directly on your mobile device. Chrome will automatically offer a 1-tap native WebAPK install.
                  </p>
                  <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 border border-slate-200 text-xs">
                    <input
                      type="text"
                      readOnly
                      value={currentUrl}
                      className="bg-transparent text-slate-600 font-mono text-[11px] px-2 flex-1 outline-none truncate"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PWA / WebAPK */}
          {activeTab === 'pwa' && (
            <div className="space-y-5">
              <div className="rounded-2xl bg-blue-50/70 border border-blue-200 p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e3c72] text-[#f6e082] flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Native WebAPK Installation
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Google Chrome on Android compiles this PWA into an authentic Android APK in the background and places it into your application drawer with full OS notifications, offline caching, and hardware acceleration.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  {isInstalled ? (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      App is currently running in Standalone App Mode!
                    </div>
                  ) : isInstallable ? (
                    <button
                      onClick={install}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] font-semibold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                      1-Click Install App (WebAPK)
                    </button>
                  ) : (
                    <div className="space-y-3 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                      <div className="font-semibold text-slate-900">How to install in browser:</div>
                      <ol className="list-decimal pl-4 space-y-1.5">
                        <li>Tap the browser menu icon (<strong>⋮</strong> or Share icon in Safari).</li>
                        <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                        <li>Follow the on-screen prompt to pin Saprones Savings to your launcher.</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>

              {/* Advantage list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Automatic Updates:</strong> Always runs latest interest rates, calculator formulas, and member announcements.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Zero App Store Fee:</strong> No waiting for Play Store reviews; instant access on any smartphone.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Android Studio Source */}
          {activeTab === 'source' && (
            <div className="space-y-5">
              <div className="rounded-2xl bg-slate-900 text-slate-100 p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-[#d4af37] flex items-center justify-center shrink-0">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Full Android Studio Project (.zip)
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Includes MainActivity.java, AndroidManifest.xml, Gradle build scripts, icons, WebChromeClient, and pull-to-refresh.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950 rounded-xl p-3 font-mono text-[11px] text-emerald-400 overflow-x-auto border border-slate-800">
                  <div className="text-slate-500">// Project tree ready for Android Studio</div>
                  <div>SapronesFamilySavings/</div>
                  <div className="pl-4">├── app/src/main/java/com/saprones/savings/MainActivity.java</div>
                  <div className="pl-4">├── app/src/main/AndroidManifest.xml</div>
                  <div className="pl-4">├── app/build.gradle (SDK 34)</div>
                  <div className="pl-4">└── gradle/wrapper/</div>
                </div>

                <a
                  href={projectZipUrl}
                  download="SapronesSavings-AndroidStudio-Project.zip"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#d4af37] hover:bg-[#b8962e] text-[#0f1c3f] font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Complete Android Studio Project (.zip)
                </a>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200/80 p-3.5 text-xs text-amber-900">
                <strong>How to build in Android Studio:</strong> Extract the zip, open Android Studio, click <em>File → Open</em>, choose the extracted folder, and click <em>Build → Build Bundle(s) / APK(s) → Build APK(s)</em> or hit the green Run button.
              </div>
            </div>
          )}

          {/* TAB 4: Install Instructions */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0f1c3f] text-white flex items-center justify-center text-[11px]">1</span>
                  Installing the Standalone APK (.apk)
                </h4>
                <ol className="list-decimal pl-6 space-y-1 text-slate-600">
                  <li>Click <strong>Download APK</strong> above to download <code className="bg-slate-200 px-1 rounded">SapronesSavings.apk</code>.</li>
                  <li>When prompted, tap <em>Open</em> or navigate to your phone's <em>Downloads</em> folder.</li>
                  <li>If Android says <em>"Install unknown apps"</em>, toggle the switch to <strong>Allow from this source</strong> (Chrome / Files).</li>
                  <li>Tap <strong>Install</strong>. Once completed, tap <strong>Open</strong> to start saving!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1e3c72] text-white flex items-center justify-center text-[11px]">2</span>
                  Installing via Chrome / Samsung Internet (WebAPK)
                </h4>
                <ol className="list-decimal pl-6 space-y-1 text-slate-600">
                  <li>Open this link on your Android device: <a href="https://savings.yzz.me/Savings/" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold underline">https://savings.yzz.me/Savings/</a></li>
                  <li>Tap the <strong>"Install App / APK"</strong> banner that appears on screen, or open the browser menu (⋮) and tap <strong>Install App</strong>.</li>
                  <li>Chrome installs the official WebAPK directly without security warnings.</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center text-[11px]">3</span>
                  For Apple iOS (iPhone / iPad)
                </h4>
                <p className="text-slate-600 pl-6">
                  In Safari, tap the <strong>Share</strong> button (box with upward arrow) at the bottom toolbar, scroll down, and tap <strong>Add to Home Screen</strong>.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Target Web: <strong className="text-slate-700">https://savings.yzz.me/Savings/</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://savings.yzz.me/Savings/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#1e3c72] hover:text-[#0f1c3f] font-semibold"
            >
              Open Original Site <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
