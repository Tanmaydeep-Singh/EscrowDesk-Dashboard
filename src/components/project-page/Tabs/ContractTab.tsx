import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Example contract & documents data
const documentsData = [
  { id: 1, name: "NDA Agreement", type: "PDF", status: "Signed", uploaded: "2025-09-10", modified: "2025-09-15", owner: "Olivia Rhye" },
  { id: 2, name: "Service Contract", type: "DOCX", status: "Pending", uploaded: "2025-09-12", modified: "2025-09-18", owner: "Phoenix Baker" },
  { id: 3, name: "Invoice Sept", type: "XLSX", status: "Approved", uploaded: "2025-09-01", modified: "2025-09-05", owner: "Lana Steiner" },
  { id: 4, name: "Partnership MOU", type: "PDF", status: "Draft", uploaded: "2025-09-20", modified: "2025-09-22", owner: "Drew Cano" },
  { id: 5, name: "Work Order", type: "PDF", status: "Signed", uploaded: "2025-08-30", modified: "2025-09-02", owner: "Candice Wu" },
  { id: 6, name: "Proposal Document", type: "DOCX", status: "Pending", uploaded: "2025-09-14", modified: "2025-09-16", owner: "Ryan G." },
];

const ContractTab = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(documentsData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedDocs = documentsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="text-gray-200 font-sans flex flex-col justify-between items-center">
      {/* Animated Background */}
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
                  <th className="p-4">Document Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Uploaded</th>
                  <th className="p-4">Last Modified</th>
                  <th className="p-4">Owner</th>
                  <th className="p-4 text-center rounded-tr-2xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedDocs.map((doc, idx) => (
                  <motion.tr
                    key={doc.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="p-4">{startIndex + idx + 1}</td>
                    <td className="p-4 font-semibold text-white">{doc.name}</td>
                    <td className="p-4 text-gray-300">{doc.type}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          doc.status === "Signed"
                            ? "bg-green-600/20 text-green-400 border border-green-600"
                            : doc.status === "Pending"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                            : doc.status === "Approved"
                            ? "bg-blue-600/20 text-blue-400 border border-blue-600"
                            : "bg-gray-600/20 text-gray-400 border border-gray-600"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{doc.uploaded}</td>
                    <td className="p-4 text-gray-300">{doc.modified}</td>
                    <td className="p-4 text-gray-300">{doc.owner}</td>
                    <td className="p-4 text-center">
                      <button className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition">
                        <Link href={`/documents/${doc.id}`}>View</Link>
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

export default ContractTab;
