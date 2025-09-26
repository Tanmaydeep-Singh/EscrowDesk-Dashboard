// store/clientStore.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import api from "@/libs/axios";

export interface Client {
  createdAt: Date;
  projects: [];
  joined: Date;
  status: string;
  id: string;
  name: string;
  email: string;
  company: string;
}

interface ClientState {
  clients: Client[];
  loading: boolean;
  error: string | null;

  fetchClients: () => Promise<void>;
  createClient: (data: { name: string; email: string; company: string }) => Promise<void>;
}

export const useClientStore = create<ClientState>((set) => ({
  clients: [],
  loading: false,
  error: null,

  fetchClients: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/clients"); // your GET clients API
      set({ clients: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createClient: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/clients", data); // your POST clients API
      set((state) => ({ clients: [...state.clients, res.data], loading: false }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
