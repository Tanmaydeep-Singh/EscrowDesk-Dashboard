"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useContractStore } from "@/store/contractStore";

interface ContractModalProps {
  onClose: () => void;
}

const ContractModal = ({ onClose }: ContractModalProps) => {
  const [documentName, setDocumentName] = useState<string>("");
  const [type, setType] = useState<string>("Agreement");
  const [status, setStatus] = useState<string>("Draft");
  const [uploaded, setUploaded] = useState<string>("");
  const [lastModified, setLastModified] = useState<string>("");
  const [owner, setOwner] = useState<string>("");

  const { createContract } = useContractStore();

  const handleCreate = () => {
    createContract({ documentName, type, status, uploaded, lastModified, owner });
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
        <h2 className="text-lg font-semibold mb-4">Add New Contract</h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Document Name */}
          <div>
            <label className="text-sm">Document Name</label>
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              placeholder="Enter document name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-sm">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            >
              <option value="Agreement">Agreement</option>
              <option value="NDA">NDA</option>
              <option value="Contract">Contract</option>
              <option value="Other">Other</option>
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
              <option value="Draft">Draft</option>
              <option value="Signed">Signed</option>
              <option value="In Review">In Review</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          {/* Uploaded Date */}
          <div>
            <label className="text-sm">Uploaded</label>
            <input
              type="date"
              value={uploaded}
              onChange={(e) => setUploaded(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Last Modified Date */}
          <div>
            <label className="text-sm">Last Modified</label>
            <input
              type="date"
              value={lastModified}
              onChange={(e) => setLastModified(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Owner */}
          <div>
            <label className="text-sm">Owner</label>
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Enter owner name"
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
            Add Contract
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContractModal;
