/* eslint-disable @typescript-eslint/no-explicit-any */
// store/userStore.ts
import { create } from "zustand";
import api from "@/libs/axios";

export interface User {
  id: string;
  name: string;
  walletAddress: string;
}

interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  createUser: (walletAddress: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  selectedUser: null,
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/api/users/me");
      set({ users: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createUser: async (walletAddress) => {
    try {
      const res = await api.post("/api/users/wallet", { walletAddress });
      set((state) => ({ users: [...state.users, res.data] }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));
