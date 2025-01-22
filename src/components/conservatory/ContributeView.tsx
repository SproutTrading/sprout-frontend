import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ContributeSproutView from './ContributeSproutView';
import ContributeResources from './ContributeResources';
import { axiosHttp, API_URL } from '../../lib/axios';
import { useAuthStore } from '../../store/useAuthStore';

interface ContributeViewProps {
  onReturn: () => void;
  setRefresh: (input: boolean) => void;
  refresh: boolean;
}

const ContributeView: React.FC<ContributeViewProps> = ({ onReturn, setRefresh }) => {
  const { profile } = useAuthStore();

  const handleContribute = async (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed') => {
    let object_id: number | undefined;
    switch (type) {
      case 'water_non_contributed':
        object_id = 1;
        break;
      case 'fertilizer_non_contributed':
        object_id = 2;
        break;
      case 'sunshine_non_contributed':
        object_id = 3;
        break;
    }
    if (!object_id) return;
    let { data: { ok } } = await axiosHttp.post(`${API_URL}/resources/contribute`, { object_id });
    if (ok) {
      setRefresh(true);
    }
  };

  return (
    <div className="absolute inset-0 bg-white z-10">
      <div className="p-6 space-y-6">
        <button
          onClick={onReturn}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Return to Conservatory
        </button>
        <div className="space-y-4">
          <ContributeSproutView />
          <h3 className="text-lg font-semibold text-emerald-800 mb-0 pb-0">Your Resources</h3>
          {!profile && <div className="text-xs">Please log in or create a account to view your contributions.</div>}
          <ContributeResources onContribute={handleContribute} />
        </div>
      </div>
    </div>
  );
};

export default ContributeView;