"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useUIStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";

// Navigation Links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Docs", href: "/docs" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl
                   backdrop-blur-lg bg-white/30 dark:bg-black/30
                   border border-white/20 dark:border-white/10
                   shadow-lg rounded-2xl"
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            EscrowDesk
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <motion.div
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Buttons */}
          <div className="flex items-center gap-3">
            {/* Connect Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-white 
                         bg-gradient-to-r from-blue-500 to-indigo-600 
                         hover:from-blue-600 hover:to-indigo-700 
                         transition rounded-lg shadow-md"
            >
              Connect
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ rotate: 10 }}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 transition"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 transition"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/80 dark:bg-black/80 
                       backdrop-blur-xl px-6 py-10 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 text-center text-white 
                         bg-gradient-to-r from-blue-500 to-indigo-600 
                         hover:from-blue-600 hover:to-indigo-700 
                         rounded-lg transition shadow-md"
            >
              Connect
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
