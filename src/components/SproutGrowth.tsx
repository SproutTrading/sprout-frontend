import React, { useEffect, useState } from 'react';
import SproutCircle from './conservatory/SproutCircle';
import SproutInfo from './conservatory/SproutInfo';
import ContributeView from './conservatory/ContributeView';
import { axiosHttp, API_URL } from '../lib/axios';
import SproutStats from './conservatory/SproutStats';
import { useResourceStore } from '../store/useResourceStore';
import { EpochResourcesStatistics } from './conservatory/EpochProgress';
import { useAuthStore } from '../store/useAuthStore';
import { useEpochsCtx } from '../context/EpochsContext';

const SproutGrowth: React.FC = () => {
  const { epochs, setEpochs, level, setLevel } = useEpochsCtx();
  const [token_address, setTokenAddress] = useState<string>();
  const [showContribute, setShowContribute] = useState(false);
  const { profile } = useAuthStore();

  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed, setResources, setContributions, contributions, rank, setRank } = useResourceStore();
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    getUserResources();
    getResourcesEpochs();
    getSproutAddress();
  }, []);

  useEffect(() => {
    if (refresh) {
      getUserResources();
      getResourcesEpochs();
      getSproutAddress();
    }
  }, [refresh]);

  const getResourcesEpochs = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/epochs`);
    if (ok) {
      setEpochs(response.epochs);
      setRefresh(false);

      let idx = (response.epochs as EpochResourcesStatistics[]).findIndex(x => x.selected);
      if (idx >= 0) {
        setLevel(idx + 1);
      }
    }
  }

  const getSproutAddress = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/token/sprout/address`);
    if (ok) {
      setTokenAddress(response.token_address);
      setRefresh(false);
    }
  }

  const getUserResources = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/data`);
    if (ok) {
      setResources(response.water.contributed, response.water.non_contributed, response.fertilizer.contributed, response.fertilizer.non_contributed, response.sunshine.contributed, response.sunshine.non_contributed);
      setContributions(response.contributions);
      setRank(response.rank);
      setRefresh(false);
    }
  }

  if (showContribute) {
    return <ContributeView refresh={refresh} setRefresh={setRefresh} onReturn={() => setShowContribute(false)} />;
  }

  return (
    <div className="space-y-8 p-4">
      <div className="flex gap-8">
        <div className="flex-shrink-0 mt-[52px]">
          <SproutCircle level={level} sproutId={String(level).padStart(5, '0')} />
        </div>
        <div className="flex-1">
          <SproutInfo epochs={epochs} token_address={token_address!} />
        </div>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
          </div>
          {
            !profile ? <h2 className="text-lg font-semibold text-emerald-800">User Contributions</h2> :
              <h2 className="text-lg font-semibold text-emerald-800">
                Gardener #{String(profile.id).padStart(5, '0')} -
                Contributions {contributions} - Rank #{rank}
              </h2>
          }
        </div>
        <SproutStats water={water_non_contributed} fertilizer={fertilizer_non_contributed} sunshine={sunshine_non_contributed} />
      </section>

      {/* Contribution buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setShowContribute(true)}
          className="flex-1 p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
        >
          Contribute Now
        </button>
      </div>
    </div>
  );
}

export default SproutGrowth;