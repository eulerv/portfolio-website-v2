"use client";
import { GithubIcon, Linkedin, MenuIcon, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import MenuSection from "./menuSection";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="
      flex items-left w-full
      h-20 p-2 bg-primary relative"
    >
      <div className="flex items-center">
        <a href="/">
          <Zap
            className="
            h-14
            w-14
            text-zinc-50"
          />
        </a>
      </div>
      <div className="flex items-center ml-6">
        <Logo />
      </div>
      <MenuSection />
      <div className="flex-1 flex justify-end items-center md:mr-4 2xl:mr-4 ml-4 gap-4">
        <a href="https://www.linkedin.com/in/vicenteeuler" target="_blank">
          <Linkedin className="size-10 text-slate-200 hidden md:block" />
        </a>
        <a href="https://github.com/eulerv/" target="_blank">
          <GithubIcon className="size-10 text-slate-200 hidden lg:block" />
        </a>
        {/* Ícone do Menu Hambúrguer */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden"
        >
          <MenuIcon className="size-10 text-slate-200" />
        </button>
      </div>
      {/* Menu Dropdown para Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary text-zinc-50 z-50 md:hidden">
          <div className="flex flex-col items-center py-2">
            <a
              href="/"
              className={`py-2 ${
                pathname === "/" ? "text-orange-200" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <div className="flex flex-col items-center py-2 border rounded pr-4">
              <a
                href="/apiPicpay"
                className={`py-2 ${
                  pathname === "/apiPicpay" ? "text-tertiary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                1.API Picpay
              </a>
              <a
                href="/aBeautyManager"
                className={`py-2 ${
                  pathname === "/aBeautyManager" ? "text-orange-200" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                2.API aBeauty Manager
              </a>
              <a
                href="/terceiroProjeto"
                className={`py-2 ${
                  pathname === "/terceiroProjeto" ? "text-orange-200" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                3.API estacionamento
              </a>
            </div>
            <a
              href="/contato"
              className={`py-2 ${
                pathname === "/contato" ? "text-orange-200" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
