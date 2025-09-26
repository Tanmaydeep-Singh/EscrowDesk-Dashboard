// store/taskStore.ts
import { set } from "mongoose";
import { create } from "zustand";

export interface Task {
  id: string;
  taskName: string;
  priority: string;
  status: string;
  assignee: string;
  dueDate: string;
  milestone: string;
}

interface TaskState {
  tasks: Task[];
  createTask: (task: Omit<Task, "id">) => void;
  updateTask: (id: string, updatedFields: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  taskModal: boolean;
  taskModaltoggle: () => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  taskModal: false,

  // Modal actions
  taskModaltoggle: () => set((state) => ({ taskModal: !state.taskModal })),


  // Create new task
  createTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: crypto.randomUUID(), ...task }, // auto-generate ID
      ],
    })),

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
