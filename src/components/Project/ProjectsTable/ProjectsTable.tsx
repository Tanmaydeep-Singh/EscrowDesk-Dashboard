import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useProjectStore } from '@/store/projectStore';

const projectsData = [
    { id: 1, name: "Website Redesign", client: "Olivia Rhye", progress: 70, eod: "2025-09-30", status: "In Progress" },
    { id: 2, name: "Mobile App Development", client: "Phoenix Baker", progress: 45, eod: "2025-10-10", status: "Pending" },
    { id: 3, name: "Dashboard Setup", client: "Lana Steiner", progress: 90, eod: "2025-09-25", status: "Completed" },
    { id: 4, name: "E-commerce Platform", client: "Drew Cano", progress: 85, eod: "2025-11-15", status: "In Progress" },
    { id: 5, name: "Content Strategy", client: "Candice Wu", progress: 100, eod: "2025-09-01", status: "Completed" },
    { id: 6, name: "API Integration", client: "Demi Wilkinson", progress: 60, eod: "2025-10-20", status: "In Progress" },
    { id: 7, name: "UX Research", client: "Natali Craig", progress: 25, eod: "2025-12-05", status: "Pending" },
    { id: 8, name: "Cloud Migration", client: "Ryan G.", progress: 95, eod: "2025-10-05", status: "Completed" },
    { id: 9, name: "Database Optimization", client: "Paityn S.", progress: 30, eod: "2025-11-22", status: "In Progress" },
    { id: 10, name: "Marketing Campaign", client: "Leo W.", progress: 50, eod: "2025-11-01", status: "In Progress" },
    { id: 11, name: "Social Media Management", client: "Neymar Jr.", progress: 75, eod: "2025-10-18", status: "In Progress" },
    { id: 12, name: "Project Management Dashboard", client: "Kobe Bryant", progress: 65, eod: "2025-11-25", status: "In Progress" },
    { id: 13, name: "Data Analytics Platform", client: "LeBron James", progress: 80, eod: "2025-12-10", status: "In Progress" },
    { id: 14, name: "Client Portal Development", client: "Michael Jordan", progress: 95, eod: "2025-10-31", status: "Completed" },
    { id: 15, name: "AI Chatbot Implementation", client: "Serena Williams", progress: 40, eod: "2025-12-15", status: "Pending" },
];

const ProjectsTable = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8; // Increased items per page to show more data
 const { fetchProjects, projects } = useProjectStore();

  useEffect(() => {
    const loadProjects = async () => {
      await fetchProjects(); // call the async function
      console.log("projects after fetch:", projects); // this may still be empty here due to state update being async
    };

    loadProjects();
  }, [fetchProjects]); // optional: usually just [fetchProjects]
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-[70vh]    text-gray-200 font-sans flex flex-col justify-between items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
            <div className="w-full flex-grow flex flex-col items-center z-10">


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
                                    <th className="p-4">Project Name</th>
                                    <th className="p-4">Description</th>
                                    <th className="p-4">Progress</th>
                                    <th className="p-4">Client</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center rounded-tr-2xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedProjects.map((project, idx) => (
                                    <motion.tr
                                        key={project.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                                    >
                                        <td className="p-4">{startIndex + idx + 1}</td>
                                        <td className="p-4 font-semibold text-white">{project.name}</td>
                                        <td className="p-4 text-gray-300">{project?.description}</td>
                                        <td className="p-4">
                                            <div className="w-32 bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                                                    style={{ width: `${project?.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-400">{project?.progress}%</span>
                                        </td>
                                        <td className="p-4 text-gray-300">{project?.client || "N.A"}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full font-medium ${project.status === "completed"
                                                    ? "bg-green-600/20 text-green-400 border border-green-600"
                                                    : project.status === "pending"
                                                        ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                                                        : "bg-blue-600/20 text-blue-400 border border-blue-600"
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition">
                                                <Link href={`/project/${project?._id}`} >
                                                    View
                                                </Link>
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                                {/* Add empty rows to fill space */}
                                {Array.from({ length: itemsPerPage - displayedProjects.length }).map((_, index) => (
                                    <tr key={`empty-${index}`} className="h-[74px] border-b border-white/5">
                                        <td className="p-4"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>

            {/* Pagination at the bottom */}
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

export default ProjectsTable;
