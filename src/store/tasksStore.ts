/* eslint-disable @typescript-eslint/no-explicit-any */
// store/taskStore.ts
import { create } from "zustand";
import { useUserStore } from "./userStore"; // assuming you have this
import { useRouter } from "next/router";
import api from "@/libs/axios";

export interface Task {
  id: string;
  name: string;
  priority: string;
  status: string;
  assignee: string;
  dueDate: string;
  milestone: string;
  userId: string;     // added
  projectId: string;  // added
}

interface TaskState {
  tasks: Task[];
  createTask: (task: Omit<Task, "id" | "userId" | "projectId">) => void;
  updateTask: (id: string, updatedFields: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  loading: boolean;
  error: string | null;
  taskModal: boolean;
  fetchTasks: () => Promise<void>;
  taskModaltoggle: () => void;
}
export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  loading: false,
  error: null,
  taskModal: false,

  // Modal actions
  taskModaltoggle: () => set((state) => ({ taskModal: !state.taskModal })),

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/tasks");
      set({ tasks: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  // Create new task
  createTask: async (task) => {
    const user = useUserStore.getState().users[0];
    if (!user) return console.error("No user found");

    let projectId = "";
    if (typeof window !== "undefined") {
      const urlParts = window.location.pathname.split("/").filter(Boolean);
      const projectIndex = urlParts.findIndex((part) => part === "project");
      if (projectIndex !== -1 && urlParts[projectIndex + 1]) {
        projectId = urlParts[projectIndex + 1];
      }
    }

    try {
      const res = await api.post("/tasks", {
        ...task,
        user: user._id,       // matches your schema
        project: projectId,   // changed from projectId to project
      });

      set((state) => ({
        tasks: [...state.tasks, res.data],
      }));
      console.log("Created task:", res.data);
    } catch (err: any) {
      console.error("Error creating task:", err.response?.data || err.message);
    }
  },


  // Update task by ID
  updateTask: (id, updatedFields) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      ),
    })),

  // Delete task
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
