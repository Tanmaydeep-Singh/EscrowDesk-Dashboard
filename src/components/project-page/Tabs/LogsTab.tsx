"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Example logs data
const logsData = [
  {
    id: 1,
    timestamp: "2025-09-20 10:45:32",
    taskName: "Design Wireframes",
    action: "Updated",
    actor: "Olivia Rhye",
    details: "Changed layout for homepage wireframe",
  },
  {
    id: 2,
    timestamp: "2025-09-20 11:05:11",
    taskName: "API Setup",
    action: "Created",
    actor: "Phoenix Baker",
    details: "Initialized Express server",
  },
  {
    id: 3,
    timestamp: "2025-09-20 12:18:50",
    taskName: "Payment Gateway",
    action: "Blocked",
    actor: "Lana Steiner",
    details: "Missing API credentials",
  },
  {
    id: 4,
    timestamp: "2025-09-20 13:45:02",
    taskName: "Unit Testing",
    action: "In Progress",
    actor: "Drew Cano",
    details: "Started writing test cases for user auth",
  },
  {
    id: 5,
    timestamp: "2025-09-20 14:20:25",
    taskName: "Deploy to Staging",
    action: "Completed",
    actor: "Candice Wu",
    details: "Deployment successful on staging server",
  },
  {
    id: 6,
    timestamp: "2025-09-20 15:05:09",
    taskName: "Client Review Meeting",
    action: "Scheduled",
    actor: "Ryan G.",
    details: "Meeting set for 2025-09-22 10:00 AM",
  },
];

const LogsTab = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(logsData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedLogs = logsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="text-gray-200 font-sans flex flex-col justify-between items-center">
      <div className="w-full flex-grow flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-grow flex flex-col overflow-hidden rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg"
        >
          {/* Logs Console Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-white/10 text-gray-400 text-sm">
                <tr>
                  <th className="p-3 rounded-tl-2xl">#</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Task</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Actor</th>
                  <th className="p-3 rounded-tr-2xl">Details</th>
                </tr>
              </thead>
              <tbody>
                {displayedLogs.map((log, idx) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200 text-sm"
                  >
                    <td className="p-3">{startIndex + idx + 1}</td>
                    <td className="p-3 text-gray-400">{log.timestamp}</td>
                    <td className="p-3 font-medium text-white">{log.taskName}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          log.action === "Completed"
                            ? "bg-green-600/20 text-green-400 border border-green-600"
                            : log.action === "Blocked"
                            ? "bg-red-600/20 text-red-400 border border-red-600"
                            : log.action === "Updated"
                            ? "bg-blue-600/20 text-blue-400 border border-blue-600"
                            : "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                        }`}
                      >
                        {log.action}
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">{log.actor}</td>
                    <td className="p-3 text-gray-400">{log.details}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="w-full mt-6 z-10 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg flex justify-between items-center text-gray-300">
        <button
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <div className="text-sm">
          Page {page} of {totalPages}
        </div>
        <button
          className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LogsTab;
