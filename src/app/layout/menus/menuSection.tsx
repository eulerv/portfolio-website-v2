"use client";


const MenuSection: React.FC = () => {
  return (
    <div
      className="
        flex
        flex-row
        sm:h-12
        sm:ml-10
        sm:pt-3
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
        className="hidden md:flex md:flex-col justify-center items-center text-bold text-zinc-50"
      >
        {/* <HomeIcon className="flex text-center" /> */}
        Home
      </a>
      <div className="flex flex-row p-2 rounded-full gap-4 text-white lg:border pr-4">
        <div
          className="hidden md:flex md:flex-col justify-center items-center"
        >
          {/* <FolderArchiveIcon className="flex text-center" /> */}
        </div>
        <a href="/apiPicpay" className="md:block hidden">
          1.API Picpay
        </a>
        <a href="/aBeautyManager" className="md:block hidden">
          2.API aBeauty Manager
        </a>
        <a href="/terceiroProjeto" className="md:block hidden">
          3.API estacionamento
        </a>

      </div>
      <a
        href="/"
        className="hidden md:flex md:flex-col justify-center items-center text-bold text-zinc-50"
      >
        {/* <User2Icon className="flex text-center" /> */}
        Contato
      </a>
    </div>
  );
};
export default MenuSection;
