"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import Image from "next/image";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const projects = [
    { title: "Cine+ API", img: "/img/cineApi.png", urlgithub:"https://github.com/Murilo013/ApiAppCine", tecs:["/img/csharp-img.png", "/img/postgresql.png", "/img/azure-img.png", "/img/swagger-img.png"], description: "API para um aplicativo de cinema, com funcionalidades de CRUD para filmes, sessões e ingressos." },

    { title: "Cine+ FrontEnd", img: "/img/cine+.jpg", urlgithub:"https://github.com/Murilo013/AppCineFront", tecs:["/img/csharp-img.png"], description: "Interface para o aplicativo de cinema, consumindo a Cine+ API para exibir filmes e sessões." },

    { title: "API Gerenciamento de Entregas", img: "/img/apiEntrega.png",urlgithub:"https://github.com/Murilo013/APIgerenciamentoDeCargas", tecs:["/img/csharp-img.png", "/img/azure-img.png", "/img/swagger-img.png","/img/postgresql.png"], description: "Aplicação de gerenciamento para transporte de cargas, permitindo o gerenciamento completo de motoristas, caminhões e entregas. A API oferece operações para cada entidade e suporta a associação de motoristas a caminhões e a atribuição de entregas a motoristas/caminhões."},

    { title: "Controle de Estoque com Log", img: "/img/EstoqueLog-img.png",urlgithub:"https://github.com/Murilo013/ControleDeEstoque", tecs:["/img/java-img.png", "/img/postgresql.png"], description: "Sistema de controle de estoque com registro de logs de todas as operações."  },

    { title: "Framework CRUD Java", img: "/img/frameworkJAVA-img.png",urlgithub:"https://github.com/Murilo013/FrameworkJava", tecs:["/img/java-img.png"], description: "Framework simples para criação de CRUDs em Java, abstraindo a complexidade do JDBC."  },

    { title: "PanteraBOT", img: "/img/panteraBOT.png",urlgithub:"https://github.com/Murilo013/PanteraBot", tecs:["/img/js-img.png","/img/nodejs-img.png","/img/puppeteer-img.png"], description: "Bot para Discord com diversas funcionalidades, como moderação, música e jogos."  },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Área principal do carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((projeto, i) => (
            <div
              key={i}
              className="flex-[0_0_33.333%] p-4 group" // mostra 3 por vez
            >
              <div className="rounded-xl border border-border bg-card flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] overflow-hidden relative">

                <h3 className="text-2xl font-bold text-center my-5">{projeto.title}</h3>

                <Image
                  src={projeto.img}
                  alt={projeto.title}
                  width={550}
                  height={550}
                  className="shadow-md w-full h-56"
                />

                <div className="absolute inset-0 bg-card bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  
                  <p className="text-white text-center mb-4">{projeto.description}</p>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    {projeto.tecs.map((tec, j) => (
                      <Image
                        key={j}
                        src={tec}
                        alt={`Tecnologia ${j + 1}`}
                        className="h-8 w-8 mb-5"
                        width={32}
                        height={32}
                      />
                    ))}
                        </div>
                      </div>
                      <div className="w-full bg-card p-4 mt-auto relative z-10">
                        <div className="flex items-center justify-center space-x-5"> 
                            <p>Repositório:</p>
                            <a target="_blank" href={projeto.urlgithub}>
                              <Image 
                              className="h-8 transition-transform duration-200 hover:scale-125 cursor-pointer" src="/img/github.png"
                               alt="" 
                               width={32} 
                               height={32}
                               />
                        
                               </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
      {/* Botões laterais */}
      <button
        onClick={scrollPrev}
        className="absolute text-black -left-10 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-md transition
         bg-white opacity-20 hover:bg-white hover:opacity-100 hover:text-black cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute text-black -right-10 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-md transition
         bg-white opacity-20 hover:bg-white hover:opacity-100 hover:text-black cursor-pointer"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
