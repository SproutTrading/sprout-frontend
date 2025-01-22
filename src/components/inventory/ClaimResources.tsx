import React, { useState, useEffect } from 'react';
import ClaimResourcesPopup from './ClaimResourcesPopup';
import { Gift, Timer } from 'lucide-react';
import { axiosHttp, API_URL } from '../../lib/axios';
import moment from 'moment';

const ClaimResources: React.FC<{ refresh: boolean, setRefresh: (input: boolean) => void }> = ({ refresh, setRefresh }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [cooldownEnd, setCooldownEnd] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    getClaimData();
  }, [])

  useEffect(() => {
    getClaimData();
  }, [refresh])

  useEffect(() => {
    if (!cooldownEnd) return;

    const interval = setInterval(() => {
      let now = moment(new Date());
      let end = moment(cooldownEnd).add(1, 'hour');
      let duration = moment.duration(now.diff(end));
      let diff = duration.asMilliseconds();
      let remaining = (60 * 60 * 1000) - diff;
      if (remaining < 0) {
        setCooldownEnd(null);
        setTimeLeft('');
        clearInterval(interval);
        return;
      }
      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownEnd]);

  const getClaimData = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/claim`);
    if (ok) {
      if (response.date) {
        setCooldownEnd(response.date);
      }
    }
  }

  const handleClaim = () => {
    const claimResources = async () => {
      let { data: { ok } } = await axiosHttp.post(`${API_URL}/resources/claim`);
      if (ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setRefresh(true);
      }
    }

    claimResources();
  };

  return (
    <div className="relative">
      <button
        onClick={handleClaim}
        disabled={!!cooldownEnd}
        className="w-full p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Gift className="w-5 h-5" />
        Claim Resources
      </button>

      {cooldownEnd && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <div className="flex items-center gap-2 text-white">
            <Timer className="w-4 h-4 animate-pulse" />
            <span className="font-mono">{timeLeft}</span>
          </div>
        </div>
      )}

      <ClaimResourcesPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default ClaimResources;