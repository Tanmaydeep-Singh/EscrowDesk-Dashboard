"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { useClientStore } from "@/store/clientStore";

interface ClientModalProps {
  onClose: () => void;
}

const ClientModal = ({ onClose  }: ClientModalProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const { createClient } = useClientStore();

  const handleCreate = () => {
    createClient({ name, email, company });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
    >
      <div className="bg-[#111] text-white w-[400px] rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">Add New Client</h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter client name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter client email"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
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
            Add Client
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientModal;
