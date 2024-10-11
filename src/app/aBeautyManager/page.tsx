"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  CodeSquare,
  Database,
  ExternalLink,
  LogInIcon,
  PowerCircle,
  Shield,
  UserPlus as UserAdd,
  UserMinus as UserDelete,
  UserIcon,
  UserPen as UserUpdate,
} from "lucide-react";
import Sidebar from "../layout/menus/sidebar";
import Navbar from "../layout/navbar/navbar";
import GradientsProjects from "./../layout/home/gradientsProjects";

const menuItems = [
  {
    name: "Visão Geral da API",
    icon: <UserAdd size={24} className="mr-2 flex-shrink-0" />,
    link: "/apiPicpay",
  },
  {
    name: "Segundo menu",
    icon: <LogInIcon size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "Terceiro menu",
    icon: <UserAdd size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "Quarto menu",
    icon: <UserIcon size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "Quinto menu",
    icon: <UserUpdate size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "Sexto menu",
    icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "Sétimo menu",
    icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "teste",
    icon: <Arrow size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "teste",
    icon: <Arrow size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
  {
    name: "teste",
    icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
    link: "/aBeautyManager/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <Sidebar menuItems={menuItems} />
        <div
          className="
          flex-grow p-2 my-3 mr-5 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
          bg-zinc-50 text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <div className="flex lg:flex-row flex-col items-left justify-start h-full bg-zinc-300 text-black p-4 gap-3">
            <motion.div
              className="grid grid-rows-2 xl:grid-cols-4 gap-8"
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 50, duration: 7 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
            >
              <div
                className="xl:col-span-3 flex flex-col px-4 pt-4
                lg:mt-0 lg:mx-auto lg:px-6 lg:pt-5 lg:text-left
                border-2 border-black
                bg-purple-500 bg-opacity-60 text-center font-aleo shadow-lg rounded-md shadow-black"
              >
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  API Salão de Beleza - aBeauty Manager
                </h1>
                <h2 className="mb-6 text-pretty text-md text-bold tracking-tight">
                  Este projeto consiste em uma API RESTful desenvolvida por mim
                  a partir de uma ideia que tive durante meu trabalho com
                  suporte, vendo a tela de um cliente que utilizava um sistema
                  de salão de beleza, que inclusive pretendo otimizar com o
                  tempo. A API foi construída seguindo boas práticas da
                  arquitetura REST, e é organizada por mvc. <br /> -{" "}
                  <strong>Funcionalidades: </strong>
                  ----------------------------------------------------
                  <br />- <strong>Segunda Feature: </strong>
                  ----------------------------------------------------
                  <br /> - <strong>Arquitetura: </strong>
                  ----------------------------------------------------
                  <br /> - <strong>Persistência de Dados:</strong>
                  ----------------------------------------------------
                  <br />
                </h2>
                <h2 className="pb-2 text-xl font-semibold">
                  Tecnologias utilizadas:
                </h2>
                <div className="flex flex-row gap-4 pb-4">
                  <div
                    title="Spring Boot"
                    className="flex flex-row items-center"
                  >
                    <PowerCircle size={24} className="flex-shrink-0 mr-2" />
                    <span>Spring Boot</span>
                  </div>
                  <div
                    title="Spring Security"
                    className="flex flex-row items-center"
                  >
                    <Shield size={24} className="flex-shrink-0 mr-2" />
                    <span>Spring Security</span>
                  </div>
                  <div
                    title="Spring OAuth2"
                    className="flex flex-row items-center"
                  >
                    <ExternalLink size={24} className="flex-shrink-0 mr-2" />
                    <span>Spring OAuth2</span>
                  </div>
                  <div
                    title="Spring OpenAPI"
                    className="flex flex-row items-center"
                  >
                    <CodeSquare size={24} className="flex-shrink-0 mr-2" />
                    <span>Spring OpenAPI</span>
                  </div>
                  <div
                    title="PostgreSql"
                    className="flex flex-row items-center"
                  >
                    <Database size={24} className="flex-shrink-0 mr-2" />
                    <span>PostgreSql</span>
                  </div>
                  <div title="Docker" className="flex flex-row items-center">
                    <ExternalLink size={24} className="flex-shrink-0 mr-2" />
                    <span>Docker</span>
                  </div>
                  <div
                    title="Apache Kafka"
                    className="flex flex-row items-center"
                  >
                    <ExternalLink size={24} className="flex-shrink-0 mr-2" />
                    <span>Apache Kafka</span>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col px-4 pt-3
                lg:mt-0 lg:mx-auto lg:px-6 lg:pt-5 lg:text-left
                border-2 border-black
                bg-black text-white bg-opacity-80 text-center font-aleo shadow-lg rounded-md shadow-white"
              >
                <h1 className="relative pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl text-blue3d">
                  Hey, psiu, aqui!
                  <div className="absolute -translate-y-10 translate-x-0.5 text-red3d">
                    Hey, psiu, aqui!
                  </div>
                  <div className="absolute -translate-y-[98%] translate-x-0 text-white">
                    Hey, psiu, aqui!
                  </div>
                </h1>
                <div className="mb-6 text-pretty tracking-tight">
                  -&gt; Cada API tem seu sistema de autenticação, o mesmo login
                  NÃO funcionará nos demais projetos.
                  <br />
                  -&gt; O banco da dados da API reseta todos os dias as 02:00
                  AM, portanto você precisará gerar um novo login após este
                  período. Acabei não implementando até este momento o envio de
                  email ou SMS para recuperar senha, mas usando o app aqui no
                  browser você tem o token salvo nos cookies. Já de outras
                  formas, será necessário criar outro login mesmo.
                  <br />
                  -&gt; Transações não permitidas que retornarão erro: Transação
                  para o mesmo id. Transações vindas de uma conta tipo 2 -
                  business (nesse desafio somente contas de pessoa física
                  poderiam emitir dinheiro).
                  <br />
                </div>
              </div>
              <div
                className="xl:col-span-2 flex flex-col px-4 py-3
                lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left
                border-2 border-black
                bg-purple-500 bg-opacity-60 text-center font-aleo shadow-lg rounded-md shadow-black"
              >
                <h1 className="pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl">
                  Deploy e links
                </h1>
                <div className="mb-6 text-pretty text-md text-bold tracking-tight">
                  A API está rodando no railway, e é usada aqui em todas as
                  requisições. Pode ainda ser utilizada diretamente pelo link do
                  swagger do projeto, onde você pode ter as mesmas interações
                  que ocorrim por aqui. O link é
                  <br />
                  <div className="text-lg flex flex-row hover:bg-slate-50 my-2 py-0.5 px-0 border border-black">
                    <strong>
                      <a
                        target="_blank"
                        href="https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html"
                        className="flex items-center"
                      >
                        https://api-desafio-picpay-production.up.railway.app/swagger-ui/index.html
                        <span className="ml-2">
                          <ExternalLink />
                        </span>
                      </a>
                    </strong>
                  </div>
                  <div className="mb-2 text-pretty text-md text-bold tracking-tight">
                    E também é claro, para o uso pelo <strong>Postman</strong>{" "}
                    (ou pelo <strong>Httpie</strong> como eu), segue o link
                    direto da aplicação no railway:
                  </div>
                  <div className="text-lg flex flex-row hover:bg-slate-50 m-2 py-0.5 px-2 border border-black">
                    <strong>
                      <a
                        target="_blank"
                        href="https://api-desafio-picpay-production.up.railway.app/"
                        className="flex items-center"
                      >
                        https://api-desafio-picpay-production.up.railway.app/
                        <span className="ml-2">
                          <ExternalLink />
                        </span>
                      </a>
                    </strong>
                  </div>
                  <div>
                    E falando em endpoints, são eles:
                    <li className="text-lg flex flex-row bg-slate-50 m-2 py-0.5 px-2 border border-black">
                      <ul>/signup</ul>
                      <ul>/authenticate</ul>
                      <ul>/wallets</ul>
                      <ul>/transactions</ul>
                    </li>
                    O PUT é feito usando o /id, bem como o delete de um objeto
                    único, e para DELETE geral é usado o /all depois do endpoint
                    usado.
                  </div>
                </div>
              </div>
              <div
                className="xl:col-span-2 flex flex-col px-4 py-3
                lg:mt-0 lg:mx-auto lg:px-6 lg:py-5 lg:text-left
                border-2 border-black
                bg-black text-white bg-opacity-80 text-center font-aleo shadow-lg rounded-md shadow-black"
              >
                <h1 className="relative pb-6 text-2xl font-bold md:text-3xl 2xl:text-4xl text-blue3d">
                  Interação diretamente por CLI (como httpie)
                </h1>
                <div className="mb-6 text-pretty tracking-tight">
                  <h2>
                    Exemplos:
                    <br /> 1.1.Signup
                  </h2>
                  <div className="text-md bg-orange-100 rounded-sm m-2 py-0.5 px-2 border border-black">
                    <span className="italic tracking-tight text-black">
                      http POST
                      https://api-desafio-picpay-production.up.railway.app/signup
                      username=&quot;&quot; password=&quot;&quot;
                    </span>
                  </div>
                  <h2>1.2.Authenticate</h2>
                  <div className="text-md bg-orange-100 rounded-sm m-2 py-0.5 px-2 border border-black">
                    <span className="italic tracking-tight text-black">
                      Igual ao Signup, no endpoint /authenticate ao invés de
                      /signup
                    </span>
                  </div>
                  <h2>1.3.Consultando endpoints protegidos</h2>
                  <div className="text-md bg-orange-100 rounded-sm m-2 py-0.5 px-2 border border-black"></div>
                  <span className="italic tracking-tight">
                    http GET
                    https://api-desafio-picpay-production.up.railway.app/wallets
                    &quot;Authorization: Bearer TOKEN-SEM-ASPAS&quot;
                  </span>
                  <div />
                  <h2>1.4.POST em endpoints protegidos</h2>
                  <span className="italic tracking-tight">
                    http POST
                    https://api-desafio-picpay-production.up.railway.app/wallets
                    &quot;Authorization: Bearer TOKEN-SEM-ASPAS&quot;
                    fullname=&quot;&quot; cpf=&quot;&quot; ...
                  </span>
                  Os nomes dos parâmetros podem ser observados aqui nas telas de
                  envio de dados,
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
