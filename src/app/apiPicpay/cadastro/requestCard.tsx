"use client";

export default function RequestCard() {
  var data = {
    id: 4,
    fullName: "Marco Antonio de Morais",
    cpf: 30098220752,
    email: "marcoantonio@bol.com",
    password: 123456,
    type: 2,
    balance: 9600,
  };

  // Convertendo o objeto JSON para uma string
  var jsonString = JSON.stringify(data, null, 2); // 'null, 2' é para formatar com identação

  return (
    <div className="flex flex-col items-left rounded-xl h-full bg-quaternary border-2 border-black">
      <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
        <h1 className="text-2xl">Request Preview</h1>
      </div>
      <div className="flex-row flex-grow self-left bg-black rounded-b-lg px-5 py-6">
        <textarea
          className="flex-auto bold min-h-[500px] lg:h-full w-full
        bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
        outline-none font-consolas resize caret-red-500"
        spellCheck="false">
          {jsonString}
        </textarea>
      </div>

      <div className="mt-4 mb-6 flex justify-center">
        <button className="px-4 py-2 bg-highlightButton text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75">
          Enviar POST
        </button>
      </div>
    </div>
  );
}
