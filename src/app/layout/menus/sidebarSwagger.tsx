"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ClipboardList,
  ExternalLink,
  GithubIcon,
  UserPlus as UserAdd,
  User as UserIcon
} from "lucide-react";

const SidebarSwagger: React.FC = () => {
  return (
    <div className="
    flex flex-col items-center space-y-3 my-3 ml-2 mr-1 py-4 h-5/6
    md:px-4 md:m-3 md:w-60 md:py-6 md:gap-1
    lg:min-w-60
    rounded-lg border border-zinc-210 text-sm font-carlito bg-zinc-50 text-zinc-500 shadow-2xl shadow-black">
    <motion.aside
    className="md:items-start"  
      viewport={{ once: true, amount: 0.5 }}
      initial={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      <button className="px-2 py-1">
        <a href="/apiPicpaySwagger" className="flex float-left hover:text-red-500">
          <UserAdd className="size-6 mr-2" />
          <div className="hidden md:block">Visão Geral da API</div>
        </a>
      </button>
    
      <button className="px-2 py-1">
        <a href="/apiPicpaySwagger/tecnologias" className="flex float-left hover:text-red-500">
          <ClipboardList className="size-6 mr-2" />
          <div className="hidden md:block">Tecnologias utilizadas</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <ArrowLeftRight className="size-6 mr-2" />
          <div className="hidden md:block">Skills usadas/Aprendizados</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/cadastro" className="flex float-left hover:text-red-500">
          <GithubIcon className="size-6 mr-2" />
          <div className="hidden md:block">Projeto no Github</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/listar-todos" className="flex float-left hover:text-red-500">
          <UserIcon className="size-6 mr-2" />
          <div className="hidden md:block">Live API no Github</div>
        </a>
      </button>
    </motion.aside>
      <button className="px-2 py-1">
        <a href="https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html"
        target="_blank"
         className="md:flex flex-row hover:text-red-500 md:border border-black p-6">
          <ArrowLeftRight className="hidden md:block size-6 mr-2" />
            <div className="hidden md:block">
            Ir para API
            </div>
            <ExternalLink className="size-6 ml-2" />
        </a>
      </button>
      </div>
  );
};

export default SidebarSwagger;