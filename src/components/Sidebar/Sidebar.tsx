"use client";

import { useSidebar } from "@/store/useSidebar";
import { Easing, motion } from "framer-motion";
import { Home, Settings, User, Menu, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarVariants = {
  open: {
    width: 240,
    transition: { duration: 0.35, ease: "easeInOut" as Easing },
  },
  closed: {
    width: 72,
    transition: { duration: 0.35, ease: "easeInOut" as Easing},
  },
};

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const pathname = usePathname();

  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed left-0 top-0 h-screen 
      bg-white/10 backdrop-blur-lg border-r border-white/10 
      text-gray-100 flex flex-col shadow-lg z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {isOpen && (
          <h1 className="text-lg font-bold tracking-wide bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            EscrowDesk
          </h1>
        )}
        <button
          onClick={toggle}
          className="p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 mt-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mx-2 transition-all 
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-md"
                    : "hover:bg-white/10 text-gray-300"
                }`}
            >
              <Icon size={20} />
              {isOpen && (
                <span className="text-sm font-medium transition-opacity duration-200">
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer with profile */}
      <div className="border-t border-white/10 p-4">
        {isOpen ? (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 via-blue-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-md">
              N
            </div>
            <div>
              <p className="text-sm font-medium">EscrowDesk</p>
              <p className="text-xs text-gray-400">User</p>
            </div>
          </div>
        ) : (
          <LogOut
            size={20}
            className="mx-auto text-gray-400 hover:text-pink-400 cursor-pointer transition-colors"
          />
        )}
      </div>
    </motion.aside>
  );
}
