import { create } from 'zustand';
import { TokenDataFarm } from '../components/widget/TokenWidget';


export interface PumpFunTokensStore {
  tokens: TokenDataFarm[];
  setTokens: (input: TokenDataFarm[]) => void;
}

export const usePumpFunTokensStore = create<PumpFunTokensStore>((set, _) => ({
  tokens: [],
  setTokens: (input) => {
    set((state) => ({
      ...state,
      tokens: input
    }));
  },
}));