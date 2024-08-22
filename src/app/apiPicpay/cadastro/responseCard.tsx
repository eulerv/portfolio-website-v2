"use client";

export default function ResponseCard() {
  return (
    <div
      className="flex flex-col items-left rounded-lg h-full bg-zinc-50 px-7 py-4
    divide-y divide-gray-500 gap-4 border-2 border-black 
    ">
      <div className="w-full m-1 justify-center text-black text-bold">
        <h1 className="text-3xl">Request</h1>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
            <div className="w-full h-96 border-4 border-pink-600">dsadafsdf</div>
            <div className="w-full h-96 border-4 border-pink-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
