"use client";
import { useState } from "react";

const tabs = ["Revenue", "Projects", "Tasks", "Team"];

export default function ProjectTabs() {
  const [active, setActive] = useState("Projects");

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-3 shadow-lg ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative flex items-center justify-center transition-all duration-300 ${
              active === tab
                ? "text-black dark:text-white scale-110 font-semibold"
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {tab}
            {active === tab && (
              <span className="absolute -bottom-2 h-1 w-6 rounded-full "></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
