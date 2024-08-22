"use client";

import { motion } from "framer-motion";
import Navbar from "../layout/menus/navbar";
import Sidebar from "../layout/menus/sidebar";
import GradientsProjects from "./../layout/home/gradientsProjects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="
          flex-grow p-2 my-3 mr-5 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <div className="flex lg:flex-row flex-col items-left justify-start min-h-screen h-full bg-zinc-300 text-black p-4 gap-3">
            <motion.div
              className="flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
            bg-zinc-50 bg-opacity-80 text-center font-operator shadow-lg rounded-md shadow-secondary"
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 50, duration: 7 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
            >
              <h2 className="pb-2 text-xl font-semibold"></h2>
              <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                API Desafio Picpay
              </h1>
              <p className="mb-6 text-pretty tracking-tight">
                Sou um desenvolvedor back end Java, gosto muito dessa linguagem
                ,e apesar de ter conhecimento em outras tecnologias, busco
                constante aprimoramento e especializa&ccedil;&atilde;o nela.
                Este &eacute; meu portfolio. <br /> <br />
                <span className="italic tracking-tight">
                  &quot;Sem sonhos, a vida n&atilde;o tem brilho. Sem metas, os
                  sonhos n&atilde;o tem alicerces. Sem prioridades, os sonhos
                  n&atilde;o se tornam reais.&quot; - Augusto Cury
                </span>
              </p>
              <h2 className="pb-2 text-xl font-semibold">Seja bem-vind@!</h2>
            </motion.div>
            
            <motion.div
              className="flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
            bg-zinc-50 bg-opacity-80 text-center font-operator shadow-lg rounded-md shadow-secondary"
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 50, duration: 7 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
            >
              <h2 className="pb-2 text-xl font-semibold"></h2>
              <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                Euler Vicente
              </h1>
              <p className="mb-6 text-pretty tracking-tight">
                Sou um desenvolvedor back end Java, gosto muito dessa linguagem
                ,e apesar de ter conhecimento em outras tecnologias, busco
                constante aprimoramento e especializa&ccedil;&atilde;o nela.
                Este &eacute; meu portfolio. <br /> <br />
                <span className="italic tracking-tight">
                  &quot;Sem sonhos, a vida n&atilde;o tem brilho. Sem metas, os
                  sonhos n&atilde;o tem alicerces. Sem prioridades, os sonhos
                  n&atilde;o se tornam reais.&quot; - Augusto Cury
                </span>
              </p>
              <h2 className="pb-2 text-xl font-semibold">Seja bem-vind@!</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
