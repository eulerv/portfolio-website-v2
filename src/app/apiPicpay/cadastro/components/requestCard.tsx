"use client";

import axios from "axios";
import { useState } from "react";

interface RequestCardProps {
  formData: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
  };
}

export default function RequestCard({ formData }: RequestCardProps) {
  const [response, setResponse] = useState<string | null>(null);

  // Formata CPF e saldo antes de usar no preview e no envio
  const formattedCPF = formData.input2.replace(/\D/g, "");
  const formattedBalance = formData.input6.replace(/[^\d.,]/g, "").replace(",", ".");

  // Cria o conteúdo do textarea
  const requestDataString = `{
    "fullName": "${formData.input1}",
    "cpf": "${formattedCPF}",
    "email": "${formData.input3}",
    "password": "${formData.input4}",
    "type": ${formData.input5},
    "balance": "${formattedBalance}"
  }`;

  const handleSendRequest = async () => {
    try {
      console.log("Request Data:", requestDataString); // Verifica o conteúdo que está sendo enviado

      const response = await axios.post("https://api-desafio-picpay-production.up.railway.app/wallets", requestDataString)
      .then((response) => {
      console.log("Response Data:", response.data); // Verifica a resposta
      setResponse(JSON.stringify(response.data, null, 2))})

    } catch (error) {
      console.error("Error:", error); // Verifica o erro
      setResponse(`Erro ao enviar a requisição: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-left rounded-xl h-full bg-quaternary border-2 border-black">
      <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
        <h1 className="text-2xl">Request Preview</h1>
      </div>
      <div className="flex-row flex-grow self-left bg-black rounded-b-lg px-5 py-6">
        <textarea
          className="flex-auto bold min-h-[500px] lg:h-full w-full
        bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
        outline-none font-consolas caret-red-500"
          spellCheck="false"
          value={requestDataString}
          readOnly
        ></textarea>
      </div>

      <div className="mt-4 mb-6 flex justify-center">
        <button
          className="px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
          onClick={handleSendRequest}
        >
          Enviar POST
        </button>
      </div>

      {response && (
        <div className="mt-4">
          <h2 className="text-xl">Resposta:</h2>
          <pre className="mt-2 p-2 bg-gray-200 rounded-md">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
