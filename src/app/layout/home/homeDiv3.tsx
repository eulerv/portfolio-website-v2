"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";

export default function HomeDiv3() {
  return (
    <div className="min-h-screen overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 text-white">
      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10
        border-2 border-black bg-zinc-50 bg-opacity-[4%] text-center lg:text-left font-consolas shadow-lg rounded-md shadow-secondary"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
        transition={{ type: "tween", stiffness: 50, duration: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      >
        <h2 className="pb-2 text-xl font-semibold">
          Também tenho interesse e estudo paralelamente
        </h2>
        <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl">
          Python, C++, machine learning, nlp
        </h1>
        <p className="mb-6">
          E enfim, gosto de desafios, de aprender coisas novas, e só preciso de
          uma oportunidade para demonstrar :D
          <br />
        </p>
        <p className="mb-6">
          Ps: Sei que este front é bem básico mesmo, como me dedico ao backend,
          adoraria sugestões de melhorias! Se deseja contribuir melhorando esse
          front, pode clicar no ícone do Github lá na navbar, fico extremamente
          grato a quem quiser ajudar no meu crescimento.
          <br /> <br />
        </p>
        <h2 className="pb-2 text-xl font-semibold">Cheers!</h2>
      </motion.div>
      <motion.div
        className="flex flex-col lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10 
        border-2 border-black bg-black bg-opacity-80 text-center lg:text-left font-aleo 
        shadow-lg rounded-md shadow-secondary lg:justify-start text-white"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div>
          <div className="flex flex-row">
            <div className="flex flex-col w-full text-left">
              <h2 className="pb-2 text-xl font-semibold">
                Clique para ir até a aba de
              </h2>
              <a
                href="/contato"
                className="flex-grow-0 text-4xl font-bold md:text-6xl 2xl:text-8xl ml-8"
              >
                <h1 className="absolute blur-[30px] text-slate-50 translate-x-1 translate-y-1">
                  Contato
                </h1>
                Contato
              </a>
            </div>
            <div className="flex flex-row">
              <a href="/github"
              >
                <GithubIcon className="w-[50px]"/>
              </a>
            </div>
          </div>
          <p className="my-6">
            Assim podemos conversar via e-mail ou Whatsapp. Você também pode me
            contactar pelo linkedin nos ícones no topo da página, estão também
            na página de contato. Ps: Sei que este front é bem básico mesmo,
            como me dedico ao backend, adoraria sugestões de melhorias! Cheers!
            <br />
          </p>
        </div>
        <div className="relative flex-1 w-full">
          <div
            className="absolute -inset-0.5 opacity-75
          bg-gradient-to-r from-red-700 to-quinary
          rounded-lg blur"
          ></div>
          <button
            className="bg-black w-full opacity-95 rounded-lg leading-none
           border border-slate-900 px-7 py-4
           flex items-center justify-center divide-x divide-gray-600
           "
          >
            <span className="text-gray-100 flex items-center space-x-5 pr-6">
              Clique para fazer o download do meu currículo atualizado
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
