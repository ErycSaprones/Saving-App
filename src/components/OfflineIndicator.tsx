import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-600/95 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-xl ring-1 ring-amber-400/30 animate-pulse">
      <WifiOff className="w-4 h-4" />
      <span>Offline Mode — Cached data is being used.</span>
    </div>
  );
};
