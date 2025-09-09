"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
interface ProjectModalProps {
  onClose: () => void;
}

const ProjectModal = ({ onClose } : ProjectModalProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<"Active" | "On Hold" | "Completed">("Active");
  const [budget, setBudget] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
  <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-[#111] text-white w-[500px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold">Create New Project</h2>
        <p className="text-sm text-gray-400 mb-4">
          Create a new project in Tanmaydeep Singh Workspace.
        </p>

        {/* Form */}
        <div className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="text-sm">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProjectName(e.target.value)
              }
              placeholder="Enter project name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm">Description (Optional)</label>
            <textarea
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              placeholder="Brief description of the project"
              rows={3}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
              maxLength={500}
            ></textarea>
            <p className="text-xs text-gray-500 text-right">
              {description.length}/500
            </p>
          </div>

          {/* Status + Budget */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm">Status</label>
              <select
                value={status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setStatus(e.target.value as "Active" | "On Hold" | "Completed")
                }
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
              >
                <option value="Active">Active</option>
                <option value="On Hold">On Hold</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="text-sm">Budget (Optional)</label>
              <input
                type="number"
                value={budget}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBudget(e.target.value)
                }
                placeholder="Enter budget amount"
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm">Start Date (Optional)</label>
              <input
                type="date"
                value={startDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm">End Date (Optional)</label>
              <input
                type="date"
                value={endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEndDate(e.target.value)
                }
                className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>
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
          <button className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium 
                             shadow-md hover:opacity-90 transition">
            Create Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
