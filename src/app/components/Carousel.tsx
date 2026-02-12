"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import Image from "next/image";
import "./Carousel.css";

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
    <section className="carousel-section">
      {/* Área principal do carrossel */}
      <div className="carousel-container" ref={emblaRef}>
        <div className="carousel-wrapper">
          {projects.map((projeto, i) => (
            <div
              key={i}
              className="carousel-item group" // mostra 3 por vez em desktop, 1 por vez em mobile
            >
              <div className="carousel-card">

                <h3 className="carousel-title">{projeto.title}</h3>

                <Image
                  src={projeto.img}
                  alt={projeto.title}
                  width={550}
                  height={550}
                  className="carousel-image"
                />

                <div className="carousel-overlay group-hover:opacity-100">
                  
                  <p className="carousel-description">{projeto.description}</p>
                  <div className="carousel-tech-container">
                    {projeto.tecs.map((tec, j) => (
                      <Image
                        key={j}
                        src={tec}
                        alt={`Tecnologia ${j + 1}`}
                        className="carousel-tech-img"
                        width={32}
                        height={32}
                      />
                    ))}
                        </div>
                      </div>
                      <div className="carousel-footer">
                        <div className="carousel-repo-container"> 
                            <p>Repositório:</p>
                            <a target="_blank" href={projeto.urlgithub} className="carousel-repo-link">
                              <Image 
                              className="carousel-repo-img" src="/img/github.png"
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
        className="carousel-nav-btn carousel-nav-btn-prev"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="carousel-nav-btn carousel-nav-btn-next"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
