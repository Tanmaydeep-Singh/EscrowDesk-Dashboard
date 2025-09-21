import React from "react";
import { AiOutlineEdit, AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { DockIcon } from "./DockIcons";
import { BiTerminal } from "react-icons/bi";
import { Settings } from "lucide-react";

interface DockProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Dock = ({ activeTab, setActiveTab } :DockProps) => {
  return (
    <div className="p-2 z-100 ">
      <div className="flex items-center space-x-2 rounded-2xl bg-white/10 backdrop-blur-md border border-gray-800 shadow-lg w-fit">
        {/* Project Tabs */}
        <DockIcon onClick={() => setActiveTab("Overview")} active={activeTab === "Overview"}>
          <AiOutlineEdit size={24} className="text-gray-300" />
        </DockIcon>
        <DockIcon onClick={() => setActiveTab("Contract")} active={activeTab === "Contract"}>
          <AiOutlineFileText size={24} className="text-gray-300" />
        </DockIcon>
        <DockIcon onClick={() => setActiveTab("Tasks")} active={activeTab === "Tasks"}>
          <AiOutlineUser size={24} className="text-gray-300" />
        </DockIcon>

         <DockIcon onClick={() => setActiveTab("Logs")} active={activeTab === "Logs"}>
          <BiTerminal size={24} className="text-gray-300" />
        </DockIcon>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-700 mx-2"></div>

        <DockIcon onClick={() => setActiveTab("Progress")} active={activeTab === "Progress"}>
          <FaGithub size={24} className="text-gray-300" />
        </DockIcon>
         <DockIcon onClick={() => setActiveTab("Settings")} active={activeTab === "Settings"}>
          <Settings size={24} className="text-gray-300" />
        </DockIcon>
      </div>
    </div>
  );
};
