import React, { createContext, useContext, useState } from 'react';
import { EpochResourcesStatistics } from '../components/conservatory/EpochProgress';

interface EpochsContextType {
  epochs: EpochResourcesStatistics[];
  setEpochs: (input: EpochResourcesStatistics[]) => void;

  level: number;
  setLevel: (input: number) => void;

  currentEpoch?: EpochResourcesStatistics;
  setCurrentEpoch: (input: EpochResourcesStatistics) => void;
}

const EpochsContext = createContext<EpochsContextType | undefined>(undefined);

export function EpochsProvider({ children }: { children: React.ReactNode }) {
  const [epochs, setEpochs] = useState<EpochResourcesStatistics[]>([]);
  const [level, setLevel] = useState<number>(1);
  const [currentEpoch, setCurrentEpoch] = useState<EpochResourcesStatistics>();

  return (
    <EpochsContext.Provider value={{ epochs, setEpochs, level, setLevel, currentEpoch, setCurrentEpoch }}>
      {children}
    </EpochsContext.Provider>
  );
}

export const useEpochsCtx = () => {
  const context = useContext(EpochsContext);
  if (!context) throw new Error('useResourcesCtx must be used within EpochsProvider');
  return context;
};