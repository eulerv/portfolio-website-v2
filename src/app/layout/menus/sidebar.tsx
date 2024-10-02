"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  LogInIcon,
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
          <div className="hidden md:block text-left">Visão Geral da API</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/login" className="flex float-left hover:text-red-500">
          <LogInIcon className="size-6 mr-2" />
          <div className="hidden md:block text-left">Login(Obrigatório para interagir com a API)</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/wallet/cadastrar" className="flex float-left hover:text-red-500">
          <UserAdd className="size-6 mr-2" />
          <div className="hidden md:block text-left">Cadastrar novo usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/wallet/listar-todos" className="flex float-left hover:text-red-500">
          <UserIcon className="size-6 mr-2" />
          <div className="hidden md:block text-left">Listar Usuários</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/wallet/atualizar" className="flex float-left hover:text-red-500">
          <UserUpdate className="size-6 mr-2" />
          <div className="hidden md:block text-left">Atualizar dados de Usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/transaction/nova-transacao" className="flex float-left hover:text-red-500">
          <Arrow className="size-6 mr-2" />
          <div className="hidden md:block text-left">Realizar transação</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/transaction/listar-todos" className="flex float-left hover:text-red-500">
          <Arrow className="size-6 mr-2" />
          <div className="hidden md:block text-left">Consultar transações</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/apiPicpay/transaction/deletar" className="flex float-left hover:text-red-500">
          <UserDelete className="size-6 mr-2" />
          <div className="hidden md:block text-left">Deletar Usuário</div>
        </a>
      </button>
      <button className="px-2 py-1">
        <a href="/" className="flex float-left hover:text-red-500">
          <UserDelete className="size-6 mr-2" />
          <div className="hidden md:block text-left">Limpar Banco de Dados</div>
        </a>
      </button>
    </motion.aside>
  );
};

export default Sidebar;
