"use client";

import { motion } from "framer-motion";
import Gradients from "../../layout/home/gradients";
import Navbar from "../../layout/menus/navbar";
import Sidebar from "../../layout/menus/sidebar";
import InputForm from "./InputForm";
import RequestCard from "./requestCard";
import ResponseCard from "./responseCard";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <Gradients />
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <motion.div
            className="
          flex flex-col p-2 my-3 mr-5 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600 w-full
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8"
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, x: 0, y: 200 }}
            transition={{ type: "spring", stiffness: 50, duration: 5 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
              <InputForm />
              <RequestCard />
            </div>
            <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
              <InputForm />
              <ResponseCard />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
