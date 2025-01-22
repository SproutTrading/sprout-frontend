import React, { createContext, useContext, useState } from 'react';
import { TokenDataFarmResources } from '../components/widget/TokenWidget';


export interface SproutUserStatistics {
  user_id: string;
  display_name: string;
  public_key: string;
  water: number;
  fertilizer: number;
  sunshine: number;
  contributions: number;
}

export interface SproutLeaderboardStatistics {
  highest: number;
  total_actions: number;
  gardeners: number;
  water: number;
  fertilizer: number;
  sunshine: number;
}

interface ResourcesContextType {
  sprouts: SproutUserStatistics[],
  setSprouts: (input: SproutUserStatistics[]) => void,

  statistics: SproutLeaderboardStatistics,
  setStatistics: (input: SproutLeaderboardStatistics) => void,

  resourceUpdated: TokenDataFarmResources | undefined,
  setResourceUpdated: (input: TokenDataFarmResources) => void,

  loading: boolean,
  setLoading: (input: boolean) => void,

  error: string | null,
  setError: (input: string) => void,
}

const ResourcesContext = createContext<ResourcesContextType | undefined>(undefined);

export function ResourcesProvider({ children }: { children: React.ReactNode }) {
  const [resourceUpdated, setResourceUpdated] = useState<TokenDataFarmResources>();
  const [sprouts, setSprouts] = useState<SproutUserStatistics[]>([]);
  const [statistics, setStatistics] = useState<SproutLeaderboardStatistics>({
    highest: 0,
    total_actions: 0,
    gardeners: 0,
    water: 0,
    fertilizer: 0,
    sunshine: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <ResourcesContext.Provider value={{ sprouts, setSprouts, loading, error, setLoading, setError, statistics, setStatistics, resourceUpdated, setResourceUpdated }}>
      {children}
    </ResourcesContext.Provider>
  );
}

export const useResourcesCtx = () => {
  const context = useContext(ResourcesContext);
  if (!context) throw new Error('useResourcesCtx must be used within ResourcesProvider');
  return context;
};