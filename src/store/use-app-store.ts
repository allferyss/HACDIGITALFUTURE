import { create } from "zustand";

interface AppState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (v) => set({ mobileMenuOpen: v }),
}));
