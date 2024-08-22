"use client";
import { Zap } from "lucide-react";
import Logo from "./logo";
import MenuSection from "./menuSection";

const Navbar: React.FC = () => {
  return (
    <nav
      className="
    flex items-center w-full
    h-20 p-2 bg-primary"
    >
      <div className="items-center">
        <a href="/">
          <Zap className="
          mr-10
          h-14
          w-14
          text-zinc-50
          "/>
        </a>
      </div>
      <div className="flex items-center">
        <Logo />
      </div>
      <MenuSection />
    </nav>
  );
};
export default Navbar;
