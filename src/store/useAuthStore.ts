import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../lib/auth';

interface AuthState {
  profile: User | null;
  setProfile: (profile: User | null) => void;
  clearProfile: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: null })
    }),
    {
      name: 'auth-storage'
    }
  )
);