import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTaskStore } from "@/store/tasksStore";

// Example tasks & milestones data
const tasksData = [
  {
    id: 1,
    name: "Design Wireframes",
    priority: "High",
    status: "In Progress",
    assignee: "Olivia Rhye",
    due: "2025-09-25",
    milestone: "UI/UX Phase",
  },
  {
    id: 2,
    name: "API Setup",
    priority: "Medium",
    status: "Pending",
    assignee: "Phoenix Baker",
    due: "2025-09-28",
    milestone: "Backend Setup",
  },
  {
    id: 3,
    name: "Payment Gateway Integration",
    priority: "High",
    status: "Blocked",
    assignee: "Lana Steiner",
    due: "2025-10-05",
    milestone: "Release v1.0",
  },
  {
    id: 4,
    name: "Unit Testing",
    priority: "Low",
    status: "In Progress",
    assignee: "Drew Cano",
    due: "2025-09-30",
    milestone: "Testing Phase",
  },
  {
    id: 5,
    name: "Deploy to Staging",
    priority: "High",
    status: "Completed",
    assignee: "Candice Wu",
    due: "2025-09-18",
    milestone: "Pre-Release",
  },
  {
    id: 6,
    name: "Client Review Meeting",
    priority: "Medium",
    status: "Pending",
    assignee: "Ryan G.",
    due: "2025-09-22",
    milestone: "Feedback Loop",
  },
   {
    id: 5,
    name: "Deploy to Staging",
    priority: "High",
    status: "Completed",
    assignee: "Candice Wu",
    due: "2025-09-18",
    milestone: "Pre-Release",
  },
  {
    id: 6,
    name: "Client Review Meeting",
    priority: "Medium",
    status: "Pending",
    assignee: "Ryan G.",
    due: "2025-09-22",
    milestone: "Feedback Loop",
  },
];

const TasksTab = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
   // Increased items per page to show more data
   const { fetchTasks , tasks } = useTaskStore();
  
    useEffect(() => {
      const loadProjects = async () => {
        await fetchTasks(); // call the async function
        console.log("projects after fetch:", tasks); // this may still be empty here due to state update being async
      };
  
      loadProjects();
    }, [fetchTasks]); // optional: usually just [fetchProjects

  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedTasks = tasks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="text-gray-200 font-sans flex flex-col justify-between items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className=" min-h-[55vh] w-full flex-grow flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-grow flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-white/10 text-gray-300">
                <tr>
                  <th className="p-4 rounded-tl-2xl">#</th>
                  <th className="p-4">Task Name</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Assignee</th>
                  <th className="p-4">Due Date</th>
                  <th className="p-4">Milestone</th>
                  <th className="p-4 text-center rounded-tr-2xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedTasks.map((task, idx) => (
                  <motion.tr
                    key={task.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="p-4">{startIndex + idx + 1}</td>
                    <td className="p-4 font-semibold text-white">{task.name}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          task.priority === "High"
                            ? "bg-red-600/20 text-red-400 border border-red-600"
                            : task.priority === "Medium"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                            : "bg-blue-600/20 text-blue-400 border border-blue-600"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          task.status === "Completed"
                            ? "bg-green-600/20 text-green-400 border border-green-600"
                            : task.status === "Pending"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                            : task.status === "Blocked"
                            ? "bg-red-600/20 text-red-400 border border-red-600"
                            : "bg-blue-600/20 text-blue-400 border border-blue-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{task.assignee}</td>
                    <td className="p-4 text-gray-300">{task?.dueDate.split("T")[0] }</td>
                    <td className="p-4 text-gray-300">{task.milestone}</td>
                    <td className="p-4 text-center">
                      <button className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition">
                        <Link href={`/tasks/${task.id}`}>View</Link>
                      </button>
                    </td>
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

export default TasksTab;