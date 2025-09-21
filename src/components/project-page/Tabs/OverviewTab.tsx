"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, DollarSign, CheckCircle } from "lucide-react";

export default function OverviewTab() {
    return (
        <div className="p-6 space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: DollarSign, title: "Budget", value: "$5000" },
                    { icon: CheckCircle, title: "Milestones", value: "3 / 5 Completed" },
                    { icon: Calendar, title: "Deadline", value: "Oct 30, 2025" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-gray-50/20 p-5 rounded-2xl shadow-md border border-neutral-800"
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className="text-purple-400 w-6 h-6" />
                            <div>
                                <p className="text-gray-400 text-sm">{item.title}</p>
                                <h3 className="text-lg font-semibold text-white">{item.value}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Activity Timeline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50/20 p-5 rounded-2xl border border-neutral-800"
            >
                <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                <ul className="space-y-3 text-gray-300 text-sm">
                    <li>✅ Milestone 3 marked as completed by Freelancer</li>
                    <li>💰 Client released payment for Milestone 2</li>
                    <li>📄 Contract updated on Sep 18, 2025</li>
                </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {[
                    { icon: FileText, title: "Contracts", href: "/project/1/contracts" },
                    { icon: CheckCircle, title: "Milestones", href: "/project/1/milestones" },
                    { icon: Calendar, title: "SRS", href: "/project/1/srs" },
                    { icon: DollarSign, title: "Payments", href: "/project/1/payments" },
                ].map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        className="flex items-center gap-2 bg-gray-50/20 p-4 rounded-xl border border-neutral-800 transition"
                    >
                        <link.icon className="text-purple-400 w-5 h-5" />
                        <span className="text-white text-sm font-medium">{link.title}</span>
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
