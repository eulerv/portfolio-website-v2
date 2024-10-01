// requestCard.tsx
"use client";

import axios from "axios";
import { useState } from "react";

interface RequestCardProps {
  formData: {
    token: string; // Adicionado o token aqui
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
  };
  onResponse: (responseInfo: { statusCode: number; statusText: string; response: string | null }) => void;
}

export default function RequestCard({ formData, onResponse }: RequestCardProps) {
  const [response, setResponse] = useState<string | null>(null);

  // Formata CPF e saldo antes de usar no preview e no envio
  const formattedCPF = formData.input2.replace(/\D/g, "");
  const formattedBalance = formData.input6.replace(/[^\d.,]/g, "").replace(",", ".");

  // Cria o conteúdo do JSON a ser enviado na requisição
  const requestData = {
    fullName: formData.input1,
    cpf: formattedCPF,
    email: formData.input3,
    password: formData.input4,
    type: formData.input5,
    balance: formattedBalance,
  };

  // Cria a string para exibir no textarea
  const requestDataString = JSON.stringify(requestData, null, 2);

  const handleSendRequest = async () => {
    // Log para verificar o que está sendo enviado
    console.log("Request Data:", requestData);
    console.log("Token JWT:", formData.token);

    try {
      const response = await axios.post(
        "https://api-desafio-picpay-production.up.railway.app/wallets",
        // "http://localhost:8080/wallets",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${formData.token}`, // Inclui o token JWT aqui
          },
        }
      );

       // Log da resposta da API
       console.log("API Response:", response);

      setResponse(JSON.stringify(response.data, null, 2));

      onResponse({
        statusCode: response.status,
        statusText: response.statusText,
        response: JSON.stringify(response.data, null, 2),
      });

    } catch (error: any) {
      // Log do erro para ver detalhes completos
      console.error("Erro ao enviar a requisição:", error);
      
      setResponse("Erro ao enviar a requisição.");

      onResponse({
        statusCode: error.response?.status || 500,
        statusText: error.response?.statusText || "Internal Server Error",
        response: error.response?.data || "Erro ao enviar a requisição.",
      });
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
          className="px-4 py-2 bg-yellow-600 bg-opacity-80 text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
          onClick={handleSendRequest}
        >
          Enviar POST
        </button>
      </div>
    </div>
  );
}
