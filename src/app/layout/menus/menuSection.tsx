"use client";

const MenuSection: React.FC = () => {
  return (
    <div
      className="
        flex
        flex-row
        sm:h-12
        sm:ml-10
        sm:pt-4
        sm:px-2
        h-10
        font-operator
        text-sm
        text-zinc-400
        items-center
        self-center
        gap-3
        leading-tight
        "
    >
        <a
          href="/"
          className="
          hover:border-b-2 text-zinc-50 font-bold md:block hidden">
          Home
        </a>
        <a href="/apiPicpay" className="md:block hidden">
          API Picpay
        </a>
        <a href="/aBeautyManager" className="md:block hidden">
          aBeauty Manager
        </a>
        <a href="/terceiroProjeto" className="md:block hidden">
          Terceiro Projeto
        </a>
        <a href="/contato" className="md:block hidden">
          Contato
        </a>
      </div>
  );
};
export default MenuSection;
