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
    <div className="flex mt-8 mb-10 mx-4 sm:mx-12">
      <div>
        <motion.div
          className="font-aleo text-center w-full"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 3 }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        >
          <div className="relative font-aleo text-4xl sm:text-6xl font-bold md:mb-20 mb-10 text-orange-100">
            <div className="absolute font-aleo whitespace-nowrap left-1/2 transform -translate-x-1/2 -translate-y-[2px] text-4xl sm:text-6xl text-black z-[-1]">
              Skills e Estudos
            </div>
            Skills e Estudos
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 font-consolas"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
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
          {/* Cards */}
          {/* Card 1 */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Coffee />
                <h3 className="mb-4 mt-2 text-base font-semibold">Java Core</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Tenho uma base sólida nos estudos em Java Core, com
                  conhecimento em conceitos fundamentais como orientação a
                  objetos, coleções, manipulação de arquivos e boas práticas
                  como o SOLID. Tentando aprender e aprimorar minhas habilidades
                  no possível sem ter experiência trabalhando como programador.
                </p>
              </div>
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
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Braces />
                <h3 className="mb-4 mt-2 text-base font-semibold">
                  JavaScript e React
                </h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Embora meu foco seja backend, adquiri habilidades básicas em
                  JavaScript e React para interagir com APIs e construir este
                  portfólio. Consigo criar pequenas aplicações front-end para
                  testar e consumir APIs, e compreender o básico de funções
                  javascript e Tailwind CSS.
                </p>
              </div>
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
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <DatabaseZap />
                <h3 className="mb-4 mt-2 text-base font-semibold">
                  Bancos de dados
                </h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Trabalhei usando MySQL na última posição ocupada,criando
                  scripts de schemas e executando comandos não tão complexos,
                  mas com grandes quantidades de dados e lidando com bancos
                  antigos e novos. Nos estudos aprendi Postgresql e H2, que
                  constam nas APIs deste portfólio.
                </p>
              </div>
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
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Shell />
                <h3 className="mb-4 mt-2 text-base font-semibold">
                  Git e Github
                </h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Conforme avancei nos estudos, fui entendendo melhor como lidar
                  com o Git e Github, compreendo o versionamento de código, como
                  trabalhar com branches, não tanto pull requests pois não tenho
                  a vivência de trabalhar com um time ainda.
                  <br />
                  <br />
                </p>
              </div>
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
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Truck />
                <h3 className="mb-4 mt-2 text-base font-semibold">
                  Metodologias Ágeis
                </h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Tenho também noções do funcionamento das metodologias ágeis,
                  participei de algumas daylies e calls com time e clientes no
                  meu emprego anterior. Entendo o papel do scrum master e P.O.
                  como teoria, e da maneira como funciona o tratamento das
                  demandas, conversão das regras de negócios em código,
                  atribuição de tempo necessário de features, entre outras.
                </p>
              </div>
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
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Speech />
                <h3 className="mb-4 mt-2 text-base font-semibold">Spring</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Utilizei o Spring Boot para desenvolver as APIs que estão
                  aqui, e também outros elementos do ecossistema, para
                  persistência de dados, autenticação, envio de emails, jobs...
                  Estou explorando no momento microservices, kafka e uso e
                  controle de threads, para a próxima API.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
