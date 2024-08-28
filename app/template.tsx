"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
