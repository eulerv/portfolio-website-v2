"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GradientsProjects from "../../../layout/home/gradientsProjects";
import Navbar from "../../../layout/menus/navbar";
import Sidebar from "../../../layout/menus/sidebar";
import ResponseCard from "./components/responseCard";

export default function Home() {

  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="flex-grow p-2 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600  
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <motion.div
            className="flex flex-col items-left justify-start min-h-screen h-full bg-zinc-300 text-black p-4 gap-6"
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, x: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 7 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            
            <div className="lg:grid-cols-2 lg:justify-left gap-12">
              <ResponseCard />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
