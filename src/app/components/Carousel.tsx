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
    { title: "Cine+ API", img: "/img/cineApi.png", urlgithub: "https://github.com/Murilo013/ApiAppCine", tecs: ["/img/csharp-img.png", "/img/postgresql.png", "/img/azure-img.png", "/img/swagger-img.png"], description: "API para um aplicativo de cinema, com funcionalidades de CRUD para filmes, sessões e ingressos." },

    { title: "Cine+ FrontEnd", img: "/img/cine+.jpg", urlgithub: "https://github.com/Murilo013/AppCineFront", tecs: ["/img/csharp-img.png"], description: "Interface para o aplicativo de cinema, consumindo a Cine+ API para exibir filmes e sessões." },

    { title: "API Gerenciamento de Entregas", img: "/img/apiEntrega.png", urlgithub: "https://github.com/Murilo013/APIgerenciamentoDeCargas", tecs: ["/img/csharp-img.png", "/img/azure-img.png", "/img/swagger-img.png", "/img/postgresql.png"], description: "Aplicação de gerenciamento para transporte de cargas, permitindo o gerenciamento completo de motoristas, caminhões e entregas. A API oferece operações para cada entidade e suporta a associação de motoristas a caminhões e a atribuição de entregas a motoristas/caminhões." },

    { title: "Controle de Estoque com Log", img: "/img/EstoqueLog-img.png", urlgithub: "https://github.com/Murilo013/ControleDeEstoque", tecs: ["/img/java-img.png", "/img/postgresql.png"], description: "Sistema de controle de estoque com registro de logs de todas as operações." },

    { title: "Framework CRUD Java", img: "/img/FrameworkJAVA-img.png", urlgithub: "https://github.com/Murilo013/FrameworkJava", tecs: ["/img/java-img.png"], description: "Framework simples para criação de CRUDs em Java, abstraindo a complexidade do JDBC." },

    { title: "PanteraBOT", img: "/img/PanteraBOT.png", urlgithub: "https://github.com/Murilo013/PanteraBot", tecs: ["/img/js-img.png", "/img/nodejs-img.png", "/img/puppeteer-img.png"], description: "Bot para Discord com diversas funcionalidades, como moderação, música e jogos." },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-14 lg:py-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((projeto, i) => (
            <div key={i} className="group flex-[0_0_100%] p-2 sm:flex-[0_0_50%] sm:p-3 lg:flex-[0_0_33.333%] lg:p-4">
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]">
                <h3 className="my-4 px-3 text-center text-lg font-bold sm:text-xl lg:text-2xl">{projeto.title}</h3>

                <Image
                  src={projeto.img}
                  alt={projeto.title}
                  width={550}
                  height={550}
                  className="h-44 w-full object-cover shadow-md sm:h-48 lg:h-56"
                />

                <div className="flex flex-1 flex-col justify-between p-4 md:hidden">
                  <p className="mb-4 text-sm text-white/90">{projeto.description}</p>
                  <div className="mt-auto flex items-center justify-center space-x-4">
                    {projeto.tecs.map((tec, j) => (
                      <Image key={j} src={tec} alt={`Tecnologia ${j + 1}`} className="h-7 w-7" width={28} height={28} />
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-card/90 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <p className="text-center text-white">{projeto.description}</p>
                  <div className="mt-4 flex items-center justify-center space-x-4">
                    {projeto.tecs.map((tec, j) => (
                      <Image
                        key={j}
                        src={tec}
                        alt={`Tecnologia ${j + 1}`}
                        className="mb-2 h-8 w-8"
                        width={32}
                        height={32}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto w-full bg-card p-4">
                  <div className="flex items-center justify-center space-x-4">
                    <p className="text-sm sm:text-base">Repositório:</p>
                    <a target="_blank" href={projeto.urlgithub} rel="noreferrer">
                      <Image
                        className="h-8 w-8 cursor-pointer transition-transform duration-200 hover:scale-125"
                        src="/img/github.png"
                        alt="Repositório do projeto"
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

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-black opacity-60 shadow-md transition hover:opacity-100 sm:left-3 lg:-left-6"
        aria-label="Projeto anterior"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-black opacity-60 shadow-md transition hover:opacity-100 sm:right-3 lg:-right-6"
        aria-label="Próximo projeto"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </section>
  );
}
