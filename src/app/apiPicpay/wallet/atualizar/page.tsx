"use client";

import GradientsProjects from "@/app/layout/home/gradientsProjects";
import Navbar from "@/app/layout/menus/navbar";
import Sidebar from "@/app/layout/menus/sidebar";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const InputForm = dynamic(() => import("@/app/apiPicpay/wallet/atualizar/components/InputForm"), { ssr: false });
const RequestCard = dynamic(() => import("@/app/apiPicpay/wallet/atualizar/components/requestCard"), { ssr: false });
const ResponseCard = dynamic(() => import("@/app/apiPicpay/wallet/atualizar/components/responseCard"), { ssr: false });

export default function Home() {
  const [formData, setFormData] = useState({
    token: "",
    input0: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  // Usar useEffect para carregar o token do localStorage quando o componente monta
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setFormData((prevData) => ({
        ...prevData,
        token: storedToken,
      }));
    }
  }, []);

  const [responseInfo, setResponseInfo] = useState<{
    statusCode: number;
    statusText: string;
    response: string | null;
  }>({
    statusCode: 0,
    statusText: "",
    response: null,
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
            <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
              <InputForm setFormData={setFormData} formData={formData} />
              <RequestCard formData={formData} onResponse={setResponseInfo} />
            </div>
            <div className="lg:grid-cols-2 lg:justify-left gap-12">
              <ResponseCard responseInfo={responseInfo} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
