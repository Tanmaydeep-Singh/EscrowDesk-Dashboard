/* eslint-disable @typescript-eslint/no-explicit-any */
// store/projectStore.ts
import { create } from "zustand";
import api from "@/libs/axios";
import { useUserStore } from "./userStore";

export interface Project {
  id: string;
  name: string;
  description: string;
  budget?:number;
  tasks: string[];
  logs: string[];
  documents: string[];
  status: "pending" | "in-progress" | "completed" | "cancelled";
  codeLink?: string;
  liveLink?: string;
  deadline?: string;
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;

  fetchProjects: () => Promise<void>;
  createProject: (name: string, description: string , budget: number) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/projects");
      set({ projects: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createProject: async (name, description,budget) => {
    const user = useUserStore.getState().users[0]; // logged-in user
    if (!user) {
      set({ error: "No logged-in user found" });
      return;
    }

    try {
      console.log("Created project:", user._id);

        const res = await api.post("/projects", {
        name,
        description,
        budget,
      });


      console.log("Created project:", res.data);
      set((state) => ({ projects: [...state.projects, res.data] }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));
