"use client";

interface RequestCardProps {
  requestData: {
    fullName: string;
    cpf: string;
    email: string;
    password: string;
    type: number;
    balance: string;
  } | null;
}

export default function RequestCard({
  formData,
}: {
  formData: { input1: string; input2: string; input3: string; input4: string; input5: string; input6: string };
}) {
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
          value={`\{
    \"fullName\": \"${formData.input1}\",
    \"cpf\": \"${formData.input2}\",
    \"email\": \"${formData.input3}\",
    \"senha\": \"${formData.input4}\",
    \"tipo\": \"${formData.input5}\",
    \"saldo\": \"${formData.input6}\"\n\}`}
        ></textarea>
      </div>

      <div className="mt-4 mb-6 flex justify-center">
        <button className="px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75">
          Enviar POST
        </button>
      </div>
    </div>
  );
}
