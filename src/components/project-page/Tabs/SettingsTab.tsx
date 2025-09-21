"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ClipboardIcon,
    GithubIcon,
    LinkIcon,
    BarChart2Icon,
    CalendarDaysIcon,
    Trash2Icon,
} from "lucide-react";

const SettingsTab = () => {
    const [status, setStatus] = useState("Active"); // State for project status, can be dynamically updated

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="space-y-3">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-bold text-white">Project Name</h1>
                        <p className="text-sm text-gray-400">
                            Tags: <span className="font-semibold">Frontend</span>,{" "}
                            <span className="font-semibold">Backend</span>,{" "}
                            <span className="font-semibold">Full-Stack</span>
                        </p>
                    </div>

                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10">
                        In Progress
                    </span>
                </div>

                {/* Main Section */}
                <div className="flex gap-6 ">
                    {/* Left Column */}
                    <div className="grid grid-flow-col grid-rows-6 gap-4 w-2/3">
                        {/* Description Card */}
                        <div
                            className="p-5 rounded-lg bg-white/10 row-span-2 "
                        >
                            <div className="flex items-start gap-2 text-gray-400">
                                <ClipboardIcon size={20} />
                                <p className="text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                                    tempore, voluptate placeat aliquam commodi sed maiores,
                                    voluptas ea delectus eaque velit, soluta blanditiis harum
                                    corrupti praesentium eum aut! Tempore, voluptatibus.
                                </p>
                            </div>
                        </div>

                        {/* Progress Card */}
                        <div
                            className="p-5 rounded-lg bg-white/10 row-span-1"
                        >
                            <p className=" text-xs font-bold text-green-400">75% Complete</p>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-green-500 h-1.5 rounded-full"
                                    style={{ width: "75%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Links Card */}
                        <div
                            className="p-5 rounded-lg bg-white/10 row-span-3"
                        >
                            <div className="flex items-center gap-2 text-gray-400 mb-2 ">
                                <LinkIcon size={20} />
                                <h3 className="font-semibold text-gray-300">Links</h3>
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:underline transition-colors"
                                >
                                    <GithubIcon size={16} />
                                    <span>GitHub Repository</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:underline transition-colors"
                                >
                                    <LinkIcon size={16} />
                                    <span>Live URL</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-flow-col grid-rows-6 gap-4 w-1/3">
                        {/* Calendar Card */}
                        <div className=" rounded-xl p-4  bg-white/10 border border-gray-50 row-span-5">
                            <div className="flex items-center gap-2 mb-4">
                                <CalendarDaysIcon className="" size={24} />
                                <h3 className="text-xl font-semibold ">Calendar</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">
                                Track project milestones and important deadlines.
                            </p>
                            {/* Dummy Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                                    <span
                                        key={day}
                                        className="text-gray-400 font-medium"
                                    >
                                        {day}
                                    </span>
                                ))}
                                {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                                    <span
                                        key={date}
                                        className="p-2 rounded-md hover:bg-blue-600/40 cursor-pointer text-gray-300"
                                    >
                                        {date}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Danger Zone Card */}

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors shadow-lg row-span-1"
                        >
                            Delete Project
                        </motion.button>


                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SettingsTab;
