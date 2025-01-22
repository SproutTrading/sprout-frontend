import { create } from 'zustand';

export interface PumpfunLogs {
  id?: number,
  ok: boolean,
  message: string,
  address?: string,
  signature?: string,
  name?: string,
  symbol?: string,
  instructions?: any[]
}

export interface LogsStore {
  logs: PumpfunLogs[];
  addLogs: (input: PumpfunLogs) => void;
  setLogs: (input: PumpfunLogs[]) => void;
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
  setLogs: (logs: PumpfunLogs[]) => {
    set((state) => ({
      ...state,
      logs
    }));
  },
}));