"use client";

import { useState } from "react";
import InputMask from "react-input-mask";
import { NumericFormat } from "react-number-format";

export default function InputForm({
  setFormData,
}: {
  setFormData: React.Dispatch<
    React.SetStateAction<{ input1: string; input2: string; input3: string; input4: string; input5: string; input6: string }>
  >;
}) {
  const [localFormData, setLocalFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData(localFormData); // Passa o objeto de dados para o componente Home
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex-1 flex-col justify-left min-h-full border border-emerald-800 rounded-xl bg-gray-100 p-4">
        <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
          <h1 className="text-2xl">POST</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <form className="w-full mt-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="nome"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="Digite o nome de usuário"
              name="input1"
              value={localFormData.input1}
              onChange={handleChange}
            />
          </form>

          <form className="w-full mt-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="cpf"
            >
              CPF
            </label>
            <InputMask
              mask={"999.999.999-99"}
              maskChar={" "}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="000.000.000-00"
              name="input2"
              value={localFormData.input2}
              onChange={handleChange}
            />
          </form>

          <form className="w-full mt-4">
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
              name="input3"
              value={localFormData.input3}
              onChange={handleChange}
            />
          </form>
          <form className="w-full mt-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="text"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="A senha será visível para facilitar a visualização da requisição."
              name="input4"
              value={localFormData.input4}
              onChange={handleChange}
            />
          </form>

          <form className="w-full mt-4 sm:text-sm">
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
                    value="2"
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
          </form>

          <form className="w-full mt-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="saldo"
            >
              Saldo
            </label>
            <NumericFormat
              id="currency-input"
              thousandSeparator=""
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="R$ "
              placeholder="R$ 0,00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              valueIsNumericString={true}
              allowLeadingZeros={false}
              allowNegative={false}
              name="input6"
              value={localFormData.input6}
              onChange={handleChange}
            />
          </form>
            <button
              className="mt-6 flex w-48 flex-col px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 
            focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
              type="submit"
            >
              Gerar Texto Request
            </button>
        </form>
      </div>
    </div>
  );
}
