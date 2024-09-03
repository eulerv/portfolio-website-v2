"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import GradientsProjects from "../layout/home/gradientsProjects";
import Navbar from "../layout/menus/navbar";
import SidebarSwagger from "../layout/menus/sidebarSwagger";

export default function Home() {
  const requisicaoLogin = `
  {
    "username": "user",
    "password": "123456"
  }`
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Texto copiado!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <SidebarSwagger />
        <div
          className="
          flex-grow p-2 my-3 mr-5 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <div className="flex lg:flex-row flex-col items-left justify-start h-full bg-zinc-300 text-black p-4 gap-3">
            <div className="grid grid-rows-2 xl:grid-cols-4 gap-12">
              <motion.div
                className="xl:col-span-3 flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
              bg-emerald-500 bg-opacity-60 text-center font-aleo shadow-lg rounded-md shadow-black"
                viewport={{ once: true, amount: 0.5 }}
                initial={{ opacity: 0, x: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 50, duration: 7 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  API PicPay - Desafio GitHub
                </h1>
                <h2 className="mb-6 text-pretty text-md text-bold tracking-tight">
                  Este projeto consiste em uma API RESTful desenvolvida como
                  parte de um desafio do GitHub. A API foi construída seguindo
                  as melhores práticas de design patterns e é organizada por
                  domínios. <br /> - <strong>Funcionalidades:</strong>{" "}
                  Gerenciamento de Usuários: Endpoints para cadastrar, listar,
                  atualizar e deletar usuários, utilizando os verbos POST, GET,
                  PUT e DELETE. <br /> - <strong>Transações Seguras:</strong>
                  Implementação de serviços para gerar novas transações e
                  visualizá-las, com toda a segurança transacional necessária
                  (assegurando operações de tudo ou nada). <br /> -{" "}
                  <strong>Mensageria:</strong> Integração com Kafka, configurado
                  para rodar em um container Docker, para gerenciar a
                  comunicação assíncrona. <br /> -{" "}
                  <strong>Persistência de Dados:</strong> Uso do banco de dados
                  PostgreSQL para armazenar informações de forma segura e
                  eficiente. Esse projeto destaca minha capacidade de construir
                  APIs robustas e seguras, com integração de serviços de
                  mensageria e gestão eficiente de dados. <br />
                </h2>
                <h2 className="pb-2 text-xl font-semibold">Seja bem-vind@!</h2>
              </motion.div>

              <motion.div
                className="flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
              bg-zinc-50 bg-opacity-80 text-center font-operator shadow-lg rounded-md shadow-black"
                viewport={{ once: true, amount: 0.5 }}
                initial={{ opacity: 0, x: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 50, duration: 7 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <h2 className="pb-2 text-xl font-semibold"></h2>
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  * Como usar a API
                </h1>
                <h3>
                  Esta API utiliza o login do Spring Security, portanto é
                  necessário criar novo login no primeiro acesso, e
                  posteriormente apenas inserir nome de usuário e senha para
                  acessar. Assim cada user tem seus próprios dados, não
                  conflitando com outras pessoas que podem eventualmente estarem
                  utilizando ao mesmo tempo.
                </h3>
                <h2 className="pb-2 text-xl font-semibold">Texto h2!</h2>
              </motion.div>
              <motion.div
                className="xl:col-span-2 flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
              bg-emerald-500 bg-opacity-60 text-center font-aleo shadow-lg rounded-md shadow-black"
                viewport={{ once: true, amount: 0.5 }}
                initial={{ opacity: 0, x: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 50, duration: 7 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  Deploy - Infra - DB
                </h1>
                <h2 className="mb-6 text-pretty text-md text-bold tracking-tight">
                  A API foi disponibilizada no railway, e como conta com
                  documentação OpenAPI, pode ser consultada diretamente pelo
                  link swagger do projeto, para realizar interações com os
                  verbos HTTP! O link é
                  <br />
                  <br />
                  <strong>
                    <a
                      className="text-lg flex flex-row"
                      target="_blank"
                      href="https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html"
                    >
                      https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html
                      <pre> </pre>
                      <ExternalLink />
                    </a>
                  </strong>
                  <br />
                  Os dados inseridos e consultados são separados no banco de
                  dados pelo id de quem está usando a API. Após o seu login, e
                  obtenção do token, é necessário que ele conste em todas as
                  requisições, é nesse momento que os dados de CRUD são
                  separados exclusivamente para cada login. A escolha desse
                  método se deu por ser uma solução eficiente para um portfólio,
                  onde a segurança e gerenciamento dos dados não é o ponto
                  principal, e o deploy gratuito do railway pode não ser
                  suficiente. Mas entendo que tecnicamente falando, o ideal
                  seria que fosse multi-tenancy mesmo, com bancos de dados
                  separados.
                </h2>
              </motion.div>
              <motion.div
                className="xl:col-span-2 flex flex-col px-4 py-3
              lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left 
              border-2 border-black
              bg-emerald-500 bg-opacity-60 text-center font-aleo shadow-lg rounded-md shadow-black"
                viewport={{ once: true, amount: 0.5 }}
                initial={{ opacity: 0, x: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 50, duration: 7 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  Começe por aqui
                </h1>
                <h2 className="mb-6 text-pretty text-md text-bold tracking-tight">
                  *Estas instruções constam também diretamente na tela inicial da API* <br /><br />
                  Inicie criando seu login enviando a requisição POST:<br />
                  {requisicaoLogin}
                  <br />
                  Para URI: 
                  <br />
                  <br />
                  <strong>
                    <button
                      className="text-lg flex flex-row"
                      // onClick={() => navigator.clipboard.writeText("Texto copiado!")}
                      onClick={handleCopy}
                    >
                      (Clique para copiar) https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html
                    </button>
                    {copied && (
                  <div
                   className="fixed bottom-4 right-4 bg-red-700 text-white text-lg p-4 rounded shadow-lg"
                 >
                   Texto copiado!
                  </div> )}
                  </strong>
                  <br />
                  Após o envio em formato JSON desses dados, e validação via e-mail, você irá obter um token de acesso,
                  e com ele então, fazer as requisições que desejar. Se preferir não inserir seu e-mail, alternativamente,
                  indico utilizar o e-mail temporário do site <strong>https://temp-mail.org/pt/</strong>. Mas relembrando
                  que e-mails temporários se perdem facilmente, e nesse caso os dados enviados serão perdidos.
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
