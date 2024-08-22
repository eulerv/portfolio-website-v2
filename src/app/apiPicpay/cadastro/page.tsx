"use client";

import Navbar from "../../layout/menus/navbar";
import Sidebar from "../../layout/menus/sidebar";
import Gradients from "./../../layout/home/gradients";
import InputForm from "./InputForm";
import RequestCard from "./requestCard";
import ResponseCard from "./responseCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <Gradients />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="flex-grow p-2 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600  
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <div className="flex flex-col items-left justify-start min-h-screen h-full bg-zinc-300 text-black p-4 gap-6">          
            <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
              <InputForm />
              <RequestCard />
            </div>
            <div className="lg:grid-cols-2 lg:justify-left gap-12">
              <ResponseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
