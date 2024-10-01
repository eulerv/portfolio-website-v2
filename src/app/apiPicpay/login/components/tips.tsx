// tips.tsx
"use client";

export default function Tips() {
  return (
    <div className="p-4 rounded-lg border border-zinc-600 bg-white shadow-md lg:col-span-2 xl:col-span-1">
      <div className="bg-gray-700 rounded-lg w-full text-white p-2 mb-4">
        Dicas
      </div>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
        <p>- Use um nome de usuário único ao se cadastrar.</p>
        <p>- Após o login, copie o token JWT para usar nas próximas requisições.</p>
        <p>- Mantenha o token seguro e não o compartilhe com terceiros.</p>
        <p>- Utilize o token no cabeçalho das requisições como <code>Authorization: Bearer &lt;seu_token&gt;</code>.</p>
      </div>
    </div>
  );
}
