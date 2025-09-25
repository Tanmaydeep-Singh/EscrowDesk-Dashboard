import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useClientStore } from '@/store/clientStore';

const clientsData = [
    { id: 1, name: "Olivia Rhye", company: "Aperture Labs", projects: 3, joined: "2024-05-15", status: "Active" },
    { id: 2, name: "Phoenix Baker", company: "Stark Industries", projects: 1, joined: "2024-07-20", status: "Inactive" },
    { id: 3, name: "Lana Steiner", company: "Wayne Enterprises", projects: 2, joined: "2024-06-01", status: "Active" },
    { id: 4, name: "Drew Cano", company: "Cyberdyne Systems", projects: 5, joined: "2024-03-10", status: "Active" },
    { id: 5, name: "Candice Wu", company: "OmniCorp", projects: 1, joined: "2024-08-01", status: "Inactive" },
    { id: 6, name: "Demi Wilkinson", company: "Tyrell Corporation", projects: 2, joined: "2024-04-22", status: "Active" },
    { id: 7, name: "Natali Craig", company: "Weyland-Yutani", projects: 0, joined: "2024-09-05", status: "Pending" },
    { id: 8, name: "Ryan G.", company: "LexCorp", projects: 4, joined: "2024-01-30", status: "Active" },
    { id: 9, name: "Paityn S.", company: "Umbrella Corp", projects: 3, joined: "2024-06-18", status: "Active" },
    { id: 10, name: "Leo W.", company: "InGen", projects: 1, joined: "2024-07-12", status: "Active" },
    { id: 11, name: "Neymar Jr.", company: "S.H.I.E.L.D.", projects: 0, joined: "2024-09-10", status: "Pending" },
    { id: 12, name: "Kobe Bryant", company: "Oscorp", projects: 2, joined: "2024-02-28", status: "Active" },
    { id: 13, name: "LeBron James", company: "Globex Corporation", projects: 1, joined: "2024-04-04", status: "Inactive" },
    { id: 14, name: "Michael Jordan", company: "Cybertron", projects: 3, joined: "2024-03-25", status: "Active" },
    { id: 15, name: "Serena Williams", company: "Starfleet", projects: 0, joined: "2024-09-12", status: "Pending" },
];

const ClientsTable = () => {
    const [page, setPage] = useState(1);
    const { fetchClients, clients } = useClientStore();

    useEffect(() => {
        const loadClients = async () => {
            await fetchClients(); // call the async function
            console.log("clients after fetch:", clients); // this may still be empty here due to state update being async
        };

        loadClients();
    }, [fetchClients]); // optional: usually just [fetchProjects]


    const itemsPerPage = 8;



    const totalPages = Math.ceil(clients.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const displayedClients = clients.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-[70vh] font-sans flex flex-col justify-between items-center">
            {/* Background for glassmorphism effect */}
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
                                    <th className="p-4">Client Name</th>
                                    <th className="p-4">Company</th>
                                    <th className="p-4">Projects</th>
                                    <th className="p-4">Joined</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center rounded-tr-2xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedClients.map((client, idx) => (
                                    <motion.tr
                                        key={client.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                                    >
                                        <td className="p-4">{startIndex + idx + 1}</td>
                                        <td className="p-4 font-semibold text-white">{client.name}</td>
    
                                        <td className="p-4 text-gray-300">{client.company}</td>
                                        <td className="p-4 text-gray-300">{client?.projects || 0}</td>
                                        <td className="p-4 text-gray-300">  {new Date(client.createdAt).toLocaleDateString()}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full font-medium ${client.status === "Active"
                                                    ? "bg-green-600/20 text-green-400 border border-green-600"
                                                    : client.status === "Inactive"
                                                        ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                                                        : "bg-blue-600/20 text-blue-400 border border-blue-600"
                                                    }`}
                                            >
                                                {client.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition">
                                                View
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                                {/* Add empty rows to fill space */}
                                {Array.from({ length: itemsPerPage - displayedClients.length }).map((_, index) => (
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
            <div className="w-full  mt-6 z-10 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg flex justify-between items-center text-gray-300">
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

export default ClientsTable;
