import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useStore = create<UIState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: 'ui-storage',
    }
  )
);
