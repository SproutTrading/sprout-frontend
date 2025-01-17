import { create } from 'zustand';

export interface BuyLogs {
  ok: boolean,
  pending: boolean,
  message: string
}

export interface LogsStore {
  latestLogs: BuyLogs | undefined;
  setBuyLogs: (input: BuyLogs) => void;
  clearBuyLogs: () => void;
}

export const useBuyLogsStore = create<LogsStore>((set, _) => ({
  latestLogs: undefined,
  setBuyLogs: (input) => {
    set((state) => ({
      ...state,
      latestLogs: input
    }));
  },
  clearBuyLogs: () => {
    set((state) => ({
      ...state,
      latestLogs: undefined
    }));
  },
}));