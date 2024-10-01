// page.tsx
"use client";

import { motion } from "framer-motion";
import GradientsProjects from "../../layout/home/gradientsProjects";
import Navbar from "../../layout/menus/navbar";
import Sidebar from "../../layout/menus/sidebar";
import Authenticate from "./components/authenticate";
import Signup from "./components/signup";
import Tips from "./components/tips";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="absolute w-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <motion.div
          className="flex flex-col p-4 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600 bg-zinc-50 text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 h-full w-full"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 50, y: 100 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 h-min-screen">
            <Signup />
            <Authenticate />
            <Tips />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
