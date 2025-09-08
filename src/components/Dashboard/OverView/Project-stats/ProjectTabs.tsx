"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Revenue", "Projects", "Tasks", "Team"];

export default function ProjectTabs() {
  const [active, setActive] = useState("Projects");

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6 rounded-lg border border-white/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-3 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative flex items-center justify-center`}
          >
            <motion.span
              className={`px-2 py-1 text-sm`}
              animate={{
                scale: active === tab ? 1.15 : 1,
                color:
                  active === tab
                    ? "var(--tw-prose-body, #fff)"
                    : "var(--tw-prose-headings, #6b7280)", // gray-500
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab}
            </motion.span>

            {/* Active underline */}
            {active === tab && (
              <motion.span
                layoutId="active-underline"
                className="absolute -bottom-2 h-1 w-6 rounded-full "
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
