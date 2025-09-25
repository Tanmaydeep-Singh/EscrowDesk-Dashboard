/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/libs/axios";

export interface User {
  id: string;
  name?: string;
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

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      users: [],
      selectedUser: null,
      loading: false,
      error: null,

      fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
          const res = await api.get("/users/me"); // ✅ relative to baseURL
          set({ users: Array.isArray(res.data) ? res.data : [res.data], loading: false });
        } catch (err: any) {
          set({ error: err.message, loading: false });
        }
      },

      createUser: async (walletAddress) => {
        try {
          const res = await api.post("/users/wallet", { walletAddress });
          set((state) => ({ users: [...state.users, res.data.user] }));
        } catch (err: any) {
          set({ error: err.message });
        }
      },
    }),
    {
      name: "user-storage",
    }
  )
);
