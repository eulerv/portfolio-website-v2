"use client";
import { Menu } from "lucide-react";

const MenuSection: React.FC = () => {
  return (
    <div
      className="
    sm:h-8
    sm:mt-9
    sm:ml-10
    sm:px-2
    sm:py-1
    h-6
    flex
    flex-row
    font-lato
    text-sm
    text-zinc-400"
    >
      <div className="flex flex-row gap-3 items-center leading-tight">
        <a
          href="/"
          className="
          border-b-2
          sm:px-2
          hover:text-zinc-300
          font-bold
          text-zinc-50
          sm:block hidden
          "
        >
          Home
        </a>
        <a href="/apiPicpay" className="sm:block hidden">
          API Picpay
        </a>
        <a href="/aBeautyManager" className="sm:block hidden">
          aBeauty Manager
        </a>
        <a href="/terceiroProjeto" className="sm:block hidden">
          Terceiro Projeto
        </a>
        <a href="/terceiroProjeto" className="sm:block hidden">
          Contato
        </a>

        <a href="/terceiroProjeto" className="sm:block hidden">
          Contato
        </a>
      </div>
      <a href={"/"} className="sm:hidden block">
        <Menu className="text-zinc-50 text-xl items-right float-right" />
      </a>
    </div>
  );
};
export default MenuSection;
