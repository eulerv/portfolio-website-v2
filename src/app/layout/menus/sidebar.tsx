"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  UserPlus as UserAdd,
  UserMinus as UserDelete,
  User as UserIcon,
  UserPen as UserUpdate,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <motion.aside
      className="
      flex flex-col items-center space-y-3 my-3 ml-2 mr-1 py-4 h-5/6
      md:items-start md:px-4 md:m-3 md:w-60 md:py-6 md:gap-1
      lg:min-w-60
      rounded-lg border border-zinc-210 text-sm font-carlito bg-zinc-50 text-zinc-500 shadow-2xl shadow-black"
      viewport={{ once: true, amount: 0.5 }}
      initial={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      <button className="px-2 py-1">
        <a href="/apiPicpay" className="flex float-left hover:text-red-500">
          <UserAdd className="size-6 mr-2" />
          <div className="hidden md:block">Visão Geral da API</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/cadastro" className="flex float-left hover:text-red-500">
          <UserAdd className="size-6 mr-2" />
          <div className="hidden md:block">Cadastrar novo usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <UserIcon className="size-6 mr-2" />
          <div className="hidden md:block">Listar Usuários</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <UserUpdate className="size-6 mr-2" />
          <div className="hidden md:block">Atualizar dados de Usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <Arrow className="size-6 mr-2" />
          <div className="hidden md:block">Realizar transação</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <Arrow className="size-6 mr-2" />
          <div className="hidden md:block">Consultar transações</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <UserDelete className="size-6 mr-2" />
          <div className="hidden md:block">Deletar Usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <UserDelete className="size-6 mr-2" />
          <div className="hidden md:block">Limpar Banco de Dados</div>
        </a>
      </button>
    </motion.aside>
  );
};

export default Sidebar;
