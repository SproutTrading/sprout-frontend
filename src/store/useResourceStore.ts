import { create } from 'zustand';

interface ResourceStore {
  water_contributed: number;
  water_non_contributed: number;
  fertilizer_contributed: number;
  fertilizer_non_contributed: number;
  sunshine_contributed: number;
  sunshine_non_contributed: number;
  contributions: number;
  rank: number;
  useResource: (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed') => boolean;
  setContributions: (amount: number) => void;
  addResource: (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed', amount: number) => void;
  setResources: (water_contributed: number, water_non_contributed: number, fertilizer_contributed: number, fertilizer_non_contributed: number, sunshine_contributed: number, sunshine_non_contributed: number) => void;
  setRank: (rank: number) => void;
}

export const useResourceStore = create<ResourceStore>((set, get) => ({
  water_contributed: 0,
  water_non_contributed: 0,
  fertilizer_contributed: 0,
  fertilizer_non_contributed: 0,
  sunshine_contributed: 0,
  sunshine_non_contributed: 0,
  contributions: 0,
  rank: -1,

  useResource: (type) => {
    const current = get()[type];
    if (current > 0) {
      set((state) => ({
        ...state,
        [type]: state[type] - 1
      }));
      return true;
    }
    return false;
  },

  addResource: (type, amount) => {
    set((state) => ({
      ...state,
      [type]: state[type] + amount
    }));
  },

  setResources: (water_contributed: number, water_non_contributed: number, fertilizer_contributed: number, fertilizer_non_contributed: number, sunshine_contributed: number, sunshine_non_contributed: number) => {
    set((state) => ({
      ...state,
      water_contributed,
      water_non_contributed,
      fertilizer_contributed,
      fertilizer_non_contributed,
      sunshine_contributed,
      sunshine_non_contributed
    }));
  },

  setContributions: (amount) => {
    set((state) => ({
      ...state,
      contributions: amount
    }));
  },

  setRank: (rank) => {
    set((state) => ({
      ...state,
      rank: rank
    }));
  },
}));