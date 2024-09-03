"use client";

export default function ResponseCard() {
  return (
    <div
      className="flex flex-col items-left rounded-lg h-full bg-zinc-50 px-7 py-4
    gap-4 border-2 border-black text-zinc-800
    "
    >
      <div className="w-full m-1 justify-center text-bold border-b-2 border-black">
        <h1 className="text-3xl">Response HTTP</h1>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
            <div className="w-full h-full border-4 shadow-inner shadow-black p-4">
              HTTP Status Code : 200 OK
            </div>
            <div className="h-[500px]">
              <div className="flex-col self-left bg-black rounded-r-lg px-4 py-6 h-full">
                <div
                  className="flex-1 h-full w-full
                bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
                  outline-none font-consolas resize caret-red-500"
                  spellCheck="false"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
