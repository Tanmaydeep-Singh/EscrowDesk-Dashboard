"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search } from "lucide-react";
import { useUIStore } from "@/store";
import { motion } from "framer-motion";

const getPageName = (pathname?: string) => {
  if (!pathname) return "Home"; 
  if (pathname === "/") return "Home";

  const page = pathname.replace("/", "");
  return page.charAt(0).toUpperCase() + page.slice(1);
};


const Navbar = () => {
  const pathname = usePathname();
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="z-50
                 backdrop-blur-lg bg-white/30 dark:bg-black/30
                 border-white/20 dark:border-white/10
                 shadow-lg border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Page Name */}
        <h1 className="text-lg font-semibold tracking-wide bg-gradient-to-r 
                       from-pink-500 via-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
          {getPageName(pathname)}
        </h1>

        {/* Middle: Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-white/20 
                         bg-white/50 dark:bg-black/40 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 
                         text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Right: Connect Button + Theme Toggle */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r 
                             from-pink-500 to-purple-600 text-white text-sm font-medium 
                             shadow-md hover:opacity-90 transition">
            Connect
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/20 dark:bg-black/20 
                       hover:bg-white/30 dark:hover:bg-black/30 
                       transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
