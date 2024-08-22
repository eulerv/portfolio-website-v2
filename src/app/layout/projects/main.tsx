"use client";

const Main: React.FC = () => {
  return (
    <div
      className="
        flex-grow p-2 my-3 mr-5 rounded-lg
        lg:mr-20 sm:p-6
        border border-zinc-600 bg-zinc-50  text-zinc-500 shadow-2xl shadow-black
        font-carlito
    "
    >
      <div className="flex flex-col items-left justify-start min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-xs">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlightButton focus:border-highlightButton sm:text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div className="w-full max-w-xs mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlightButton focus:border-highlightButton sm:text-sm"
            placeholder="********"
          />
        </div>

        <div className="w-full max-w-xs mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Nome de usuário
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlightButton focus:border-highlightButton sm:text-sm"
            placeholder="Nome de usuário"
          />
        </div>

        <div className="mt-6 flex justify-start">
          <button className="px-4 py-2 bg-highlightButton text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75">
            Gerar Texto Request
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
