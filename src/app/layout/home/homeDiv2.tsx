"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Coffee,
  DatabaseZap,
  Shell,
  Speech,
  Truck,
} from "lucide-react";

export default function HomeDiv2() {
  return (
    <div className="mt-8 mb-10 mx-12">
      <div className="">
        <motion.div
          className="font-aleo text-center w-full"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 3 }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        >
          <div className="relative text-6xl font-bold md:mb-20 mb-10 text-black">
            Skills e Estudos
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 font-consolas"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <Coffee />
              <h3 className="mb-4 mt-2 text-base font-semibold">Java Core</h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Tenho uma base sólida em Java Core, com conhecimento em
                conceitos fundamentais como orientação a objetos, coleções, e
                manipulação de arquivos. Estou sempre buscando aprender e
                aprimorar minhas habilidades.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <Braces />
              <h3 className="mb-4 mt-2 text-base font-semibold">
                JavaScript e React
              </h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Embora meu foco seja backend, adquiri habilidades básicas em
                JavaScript e React para interagir com APIs. Gosto de criar
                pequenas aplicações front-end para testar e consumir APIs.
                pequenas aplicações front-end para testar e consumir APIs.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <DatabaseZap />
              <h3 className="mb-4 mt-2 text-base font-semibold">MySQL</h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Trabalhei usando bastante MySQL na última posição ocupada,
                utilizando Joins para cruzar dados e construir novas tabelas.
                Tenho prática na criação de scripts de schemas e na execução de
                consultas complexas, garantindo a integridade e a eficiência dos
                dados.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <Shell />
              <h3 className="mb-4 mt-2 text-base font-semibold">
                Java Streams
              </h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Exploro o poder das Streams em Java para manipulação de dados de
                forma eficiente e expressiva. Estou em constante aprendizado
                para aplicar esse recurso de maneira prática em projetos. para
                aplicar esse recurso de maneira prática em projetos.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <Truck />
              <h3 className="mb-4 mt-2 text-base font-semibold">
                Spring Batch
              </h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Estou familiarizado com Spring Batch, tendo estudado e
                experimentado o framework para criar soluções de processamento
                em lote eficientes. Gosto de resolver problemas complexos e
                otimizar processos.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="rounded-[30px] border border-black bg-zinc-50 p-8">
              <Speech />
              <h3 className="mb-4 mt-2 text-base font-semibold">Soft Skills</h3>
              <p className="mb-4 text-sm font-light leading-[175%]">
                Entendo a importância das soft skills no ambiente de trabalho.
                Estou continuamente desenvolvendo habilidades como comunicação,
                trabalho em equipe e resolução de problemas para ser um
                profissional mais completo..
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
