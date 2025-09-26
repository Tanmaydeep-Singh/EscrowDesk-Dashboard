"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { useTaskStore } from "@/store/tasksStore";

interface TaskModalProps {
  onClose: () => void;
}

const TaskModal = ({ onClose }: TaskModalProps) => {
  const [name, setTaskName] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [status, setStatus] = useState<string>("pending");
  const [assignee, setAssignee] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [milestone, setMilestone] = useState<string>("");

  const { createTask } = useTaskStore();

  const handleCreate = () => {
    createTask({ name, priority, status, assignee, dueDate, milestone });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
    >
      <div className="bg-[#111] text-white w-[450px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Task Name */}
          <div>
            <label className="text-sm">Task Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            >
              <option value="igh">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Assignee */}
          <div>
            <label className="text-sm">Assignee</label>
            <input
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Enter assignee name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="text-sm">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Milestone */}
          <div>
            <label className="text-sm">Milestone</label>
            <input
              type="text"
              value={milestone}
              onChange={(e) => setMilestone(e.target.value)}
              placeholder="Enter milestone"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium 
                       shadow-md hover:opacity-90 transition"
          >
            Add Task
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskModal;
