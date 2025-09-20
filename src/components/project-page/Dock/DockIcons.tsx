
import React from "react";
import { motion } from "framer-motion";

interface DockIconProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const DockIcon = ({ children, onClick, active } :DockIconProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`p-2  rounded-xl  ${
        active ? "bg-white/20 text-white" : ""
      }`}
            whileHover={{ scale: 1.1, y: -10 }}

    >
      {children}
    </motion.button>
  );
};
