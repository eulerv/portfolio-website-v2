"use client";
import { GithubIcon, Linkedin, MenuIcon, Zap } from "lucide-react";
import Logo from "./logo";
import MenuSection from './menuSection';

const Navbar: React.FC = () => {
  return (
    <nav
      className="
    flex items-left w-full
    h-20 p-2 bg-primary"
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
        <a href="https://github.com/eulerv/portfolio-website-v2" target="_blank">
          <GithubIcon className="size-10 text-slate-200 hidden lg:block" />
        </a>
        <a href="https://github.com/eulerv/portfolio-website-v2" target="_blank">
        <MenuIcon className="size-10 text-slate-200 block md:hidden" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
