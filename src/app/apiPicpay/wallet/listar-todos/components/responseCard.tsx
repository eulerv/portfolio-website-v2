"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ResponseCard() {
  const [token, setToken] = useState<string>("");

  // Inicializa o token a partir do localStorage quando o componente é montado
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<string | null>(null);

  const handleSendRequest = async () => {
    if (!token) {
      alert("Token não encontrado. Faça login para obter um token.");
      return;
    }

    try {
      const response = await axios.get(
        "https://api-desafio-picpay-production.up.railway.app/wallets",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatusCode(response.status);
      setStatusText(response.statusText);
      setResponseData(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setStatusCode(error.response?.status || null);
      setStatusText(error.response?.statusText || error.message);
      setResponseData(JSON.stringify(error.response?.data, null, 2) || null);
    }
  };

  // Manipulador para atualizar o token quando o usuário digita
  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  return (
    <div
      className="flex flex-col items-left rounded-lg h-full bg-zinc-50 px-7 py-4
    gap-4 border-2 border-black text-zinc-800
    "
    >
      <div className="w-full m-1 justify-between flex items-center text-bold border-b-2 border-black">
        <h1 className="text-3xl">Response HTTP</h1>
        {/* Campo de token editável */}
        <div className="flex items-center">
          <label htmlFor="token" className="mr-2 font-semibold">
            Token JWT:
          </label>
          <input
            id="token"
            type="text"
            value={token}
            onChange={handleTokenChange}
            className="w-64 px-2 py-1 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
            <div className="w-full h-full border-4 shadow-inner shadow-black p-4">
              {/* Exibe o status HTTP */}
              HTTP Status Code: {statusCode} {statusText}
            </div>
            <div className="h-[500px]">
              <div className="flex-col self-left bg-black rounded-r-lg px-4 py-6 h-full">
                <div
                  className="flex-1 h-full w-full
                    bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
                      outline-none font-consolas resize caret-red-500 overflow-y-auto"
                  spellCheck="false"
                >
                  {/* Exibe a resposta da requisição */}
                  <pre>{responseData}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-6 flex justify-center">
            <button
              className="px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
              onClick={handleSendRequest}>
              Enviar GET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
