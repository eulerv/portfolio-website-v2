/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

const HomeDiv1: React.FC = () => {
  return (
    <div className="h-auto min-h-screen w-fit overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8">
      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10 border-2 border-black
        bg-quaternary bg-opacity-90
         text-center font-aleo lg:text-left shadow-lg rounded-md shadow-black"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, x: -20, y: -100 }}
        transition={{ type: "spring", stiffness: 50, duration: 7}}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
      >
        <h2 className="pb-2 text-xl font-semibold">Meu nome &eacute;</h2>
        <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-8xl">
          Euler Vicente
        </h1>
        <p className="mb-6 text-pretty tracking-tight">
          Sou um desenvolvedor back end Java, apesar de não ter trabalhado efetivamente como dev, gosto muito das caracter&iacute;sticas dessa linguagem e do spring framework,
          e apesar de ter conhecimento em outras tecnologias, busco constante
          aprimoramento e especializa&ccedil;&atilde;o nela nas mais variadas fontes.
          Tenho 5 anos de experiência diretamente em contato com tecnologia, prestando suporte para sistemas de
          controle de ponto e estacionamentos, e agora é o momento de migrar definitivamente para o desenvolvimento de software.
          Este &eacute; meu portfolio, espero conseguir demonstrar minhas habilidades no momento :D
           <br /> <br />
          <span className="italic tracking-tight">
            &quot;Sem sonhos, a vida n&atilde;o tem brilho. Sem metas, os sonhos
            n&atilde;o tem alicerces. Sem prioridades, os sonhos n&atilde;o se
            tornam reais.&quot; - Augusto Cury
          </span>
        </p>
        <h2 className="pb-2 text-xl font-semibold">Seja bem-vind@!</h2>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex items-center justify-center lg:justify-end"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <img className="md:h-auto" src="/icons/man-is-working.svg" alt="Hero" />
      </motion.div>
    </div>
  );
};

export default HomeDiv1;
