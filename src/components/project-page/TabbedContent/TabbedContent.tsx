"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dock } from "../Dock/Dock";
import OverviewTab from "../Tabs/OverviewTab";
import { ProgressTab } from "../Tabs/ProgressTab";
import ContractTab from "../Tabs/ContractTab";
import TasksTab from "../Tabs/TasksTab";
import LogsTab from "../Tabs/LogsTab";
import SettingsTab from "../Tabs/SettingsTab";

const tabs = [
  { name: "Overview", component: <OverviewTab /> },
  { name: "Tasks", component: <TasksTab /> },
  { name: "Contract", component: <ContractTab /> },
  { name: "Progress", component: <ProgressTab /> },
  { name: "Logs", component: <LogsTab /> },
  { name: "Settings", component: <SettingsTab /> }
];

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-[74vh] text-gray-200 font-sans flex flex-col justify-between items-center">
      {/* Background Blobs */}
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
          {/* Header with Dock */}
          <div className="flex items-center justify-between p-2">
            <h1 className="text-3xl font-bold text-white ml-3">{activeTab}</h1>
            <Dock activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Tab Content */}
          <div className="flex-grow p-4 overflow-y-auto">

          
            {tabs.find((t) => t.name === activeTab)?.component}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TabbedContent;
