"use client";

import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  return (
    <div className="flex flex-row w-full h-screen border-2 border-pink-700">
      <Form setFormData={setFormData} />
      <Result formData={formData} />
    </div>
  );
}

function Form({
  setFormData,
}: {
  setFormData: React.Dispatch<
    React.SetStateAction<{ input1: string; input2: string; input3: string }>
  >;
}) {
  const [localFormData, setLocalFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
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
    <div className="flex flex-col">
      <form className="flex w-96 h-20" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input1"
          value={localFormData.input1}
          onChange={handleChange}
          placeholder="Input 1"
          className="flex rounded-sm w-96 h-10 border-2 border-slate-300 bg-slate-200 text-slate-700 font-semibold"
        />

        <input
          type="text"
          name="input2"
          value={localFormData.input2}
          onChange={handleChange}
          placeholder="Input 2"
          className="flex rounded-sm w-96 h-10 border-2 border-slate-300 bg-slate-200 text-slate-700 font-semibold"
        />
        <input
          type="text"
          name="input3"
          value={localFormData.input3}
          onChange={handleChange}
          placeholder="Input 3"
          className="flex rounded-sm w-96 h-10 border-2 border-slate-300 bg-slate-200 text-slate-700 font-semibold"
        />

        <button
          className="button-primary bg-slate-300 gap-3 m-4 rounded-md px-4 py-2 text-slate-700 font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Result({
  formData,
}: {
  formData: { input1: string; input2: string; input3: string };
}) {
  return (
    <div className="flex flex-col items-end ">
      <textarea className="flex w-96 h-20 border-2 border-slate-300 bg-slate-200 text-slate-700 font-semibold ml-[400px]"
        value={`\{\n    \"${formData.input1}\":\"${formData.input2}\"\n    \"${formData.input3}\"`}
        readOnly
      />
    </div>
  );
}

export default Home;
