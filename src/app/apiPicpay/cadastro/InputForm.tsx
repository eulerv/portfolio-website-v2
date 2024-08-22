"use client";

export default function inputForm() {
  return (
    <div>
        <div className="flex-1 flex-col items-left justify-start min-h-full border border-emerald-800 rounded-xl bg-gray-100 p-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Nome Completo
              </label>
              <input
                type="text" id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                placeholder="Digite o nome de usuário"/>
            </div>
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                CPF
              </label>
              <input
                type="text" id="cpf"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                placeholder="000.000.000-00"/>
            </div>
            
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email" id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                placeholder="you@example.com"/>
            </div>
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Senha
              </label>
              <input
                type="text" id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="A senha será visível para facilitar a visualização da requisição."/>
            </div>
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Senha
              </label>
              <input
                type="text" id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="A senha será visível para facilitar a visualização da requisição."/>
            </div>
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Saldo
              </label>
              <input
                type="balance" id="balance"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="Digite o saldo inicial"/>
            </div>

            <div className="my-6 flex justify-center align-end ">
              <button className="px-4 py-2 bg-highlightButton text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75">
                Gerar Texto Request
              </button>
            </div>
          </div>
    </div>
  );
}
