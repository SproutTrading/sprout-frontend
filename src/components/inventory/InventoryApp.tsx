import React, { useEffect, useState } from 'react';
import InventoryStats from './InventoryStats';
import ResourceList from './ResourceList';
import ClaimResources from './ClaimResources';
import { axiosHttp, API_URL } from '../../lib/axios';
import { useResourceStore } from '../../store/useResourceStore';

const InventoryApp: React.FC = () => {
  const { setResources, setContributions, setRank } = useResourceStore();
  const [refresh, setRefresh] = useState<boolean>(false);

  const getUserResources = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/data`);
    if (ok) {
      setResources(response.water.contributed, response.water.non_contributed, response.fertilizer.contributed, response.fertilizer.non_contributed, response.sunshine.contributed, response.sunshine.non_contributed);
      setContributions(response.contributions);
      setRank(response.rank);
      setRefresh(false);
    }
  }

  useEffect(() => {
    getUserResources();
  }, []);

  useEffect(() => {
    if (refresh) {
      getUserResources();
    }
  }, [refresh]);


  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4">
        <InventoryStats />
        <ResourceList />
      </div>
      <div className="mt-auto pt-4">
        <ClaimResources refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
};

export default InventoryApp;