import { create } from "zustand";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "EDITOR";
}

interface UserState {
  user: AdminUser | null;
  setUser: (user: AdminUser | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
