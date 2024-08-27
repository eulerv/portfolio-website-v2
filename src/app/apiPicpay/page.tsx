"use client";

import { motion } from "framer-motion";
import Navbar from "../layout/menus/navbar";
import Sidebar from "../layout/menus/sidebar";
import GradientsProjects from "./../layout/home/gradientsProjects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="
          flex-grow p-2 my-3 mr-5 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <div className="flex lg:flex-row flex-col items-left justify-start h-full bg-zinc-300 text-black p-4 gap-3">
            <div className="grid grid-rows-1 xl:grid-cols-4 gap-12">
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
                  * Tips:
                </h1>
                <p className="mb-6 text-pretty tracking-tight">
                  Nas telas onde existe envio de objeto via json, coloquei o textarea da request liberado para alteração manual.
                  Assim, é possível interagir com a API como se estivesse na página html do Swagger no railway,
                  ou em qualquer plataforma ou prompt enviando a requisição. Assim é possível testar tudo por aqui :D
                  . <br />
                </p>
                <h2 className="pb-2 text-xl font-semibold">Seja bem-vind@!</h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
