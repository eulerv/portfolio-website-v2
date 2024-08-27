"use client";

import InputMask from "react-input-mask";
export default function inputForm() {
  return (
    <div>
      <div className="flex-1 flex-col justify-left min-h-full border border-emerald-800 rounded-xl bg-gray-100 p-4">
        <div className="w-full">
          <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
            <h1 className="text-2xl">POST</h1>
          </div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
            placeholder="Digite o nome de usuário"
          />
        </div>
        <div className="w-full mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            CPF
          </label>
          <InputMask
            mask={"999.999.999-99"}
            maskChar={" "}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
            placeholder="000.000.000-00"
          />
        </div>

        <div className="w-full mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div className="w-full mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Senha
          </label>
          <input
            type="text"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                 shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
            placeholder="A senha será visível para facilitar a visualização da requisição."
          />
        </div>

        <div className="w-full mt-4 sm:text-sm">
          <fieldset>
            <legend>
              Usuário tem conta de Comerciante ou de Pessoa Física?
            </legend>
            <div className="mt-2 content-between gap-2 flex">
              <>
                <input
                  id="draft"
                  type="radio"
                  name="status"
                  className="peer/draft"
                />
                <label
                  htmlFor="draft"
                  className="peer-checked/draft:text-quinary"
                >
                  Comerciante/Lojista
                </label>
              </>
              <>
                <input
                  id="published"
                  className="peer/published"
                  type="radio"
                  name="status"
                />
                <label
                  htmlFor="published"
                  className="peer-checked/published:text-sky-500"
                >
                  Cliente
                </label>
              </>
            </div>
          </fieldset>
        </div>

        <div className="w-full mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Saldo
          </label>
          <InputMask
            mask="R$ 9.999,99"
            maskChar={null}
            placeholder="R$ 0,00"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
          />
        </div>

        <div className="mt-6 flex w-48 flex-col align-bottom text-center">
          <button className="px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 
          focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75">
            Gerar Texto Request
          </button>
        </div>
      </div>
    </div>
  );
}
