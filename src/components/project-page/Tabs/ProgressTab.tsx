"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

// Define the benefits data
const benefits = [
    { id: 1, description: "Project Auto Creation" },
    { id: 2, description: "SRS → Project Structure Mapping" },
    { id: 3, description: "Progress Tracking & Checking" },
    { id: 4, description: "Automated Task Updates" },
    { id: 5, description: "Repository Sync & History" },
];

export function ProgressTab() {
    const [isConnecting, setIsConnecting] = useState(false);
    const [connected, setConnected] = useState(false);

    const handleConnectGitHub = async () => {
        setIsConnecting(true);

        setTimeout(() => {
            setConnected(true);
            setIsConnecting(false);
        }, 1500);
    };

    return (
        <div className="p-6 rounded-lg space-y-6">
            <h2 className="text-xl font-semibold">Automated GitHub Integration</h2>
            <p className="text-white/80">
                Connect your GitHub account to automatically create projects based on SRS and track progress.
            </p>

            {/* GitHub Connect Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConnectGitHub}
                disabled={isConnecting || connected}
                className={`flex items-center px-5 py-2 rounded-lg font-medium text-white ${connected ? "bg-green-500 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900"
                    }`}
            >
                <FaGithub size={20} className="mr-2" />
                {isConnecting ? "Connecting..." : connected ? "Connected" : "Connect with GitHub"}
            </motion.button>

            {/* Benefits List */}
            <div className="mt-4 space-y-2">
                <h3 className="font-semibold ">Benefits of Integration:</h3>
                <div className="space-y-1">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                            className="p-2 flex items-center gap-2 text-white/80"
                        >
                          <GoDotFill />   {item.description}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Connected State Info */}
            {connected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-3 bg-white border rounded-md shadow-sm"
                >
                    <p className="text-gray-700 font-medium">Repository connected successfully!</p>
                    <p className="text-gray-500 text-sm mt-1">
                        Projects can now be auto-generated based on your SRS and tracked here.
                    </p>
                </motion.div>
            )}
        </div>
    );
}
