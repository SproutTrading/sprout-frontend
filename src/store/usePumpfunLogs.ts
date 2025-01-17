import { create } from 'zustand';

export interface PumpfunLogs {
  ok: boolean,
  message: string,
  address?: string,
  name?: string,
  symbol?: string,
}

export interface LogsStore {
  logs: PumpfunLogs[];
  addLogs: (input: PumpfunLogs) => void;
  clearLogs: () => void;
}

export const usePumpfunLogsStore = create<LogsStore>((set, _) => ({
  logs: [],
  addLogs: (input) => {
    set((state) => ({
      ...state,
      logs: [...state.logs, input]
    }));
  },
  clearLogs: () => {
    set((state) => ({
      ...state,
      logs: []
    }));
  },
}));