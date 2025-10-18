"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const projects = [
    { title: "🎬 Cine+", img: "/img/cine+.jpg",urlgithub:"" },
    { title: "🎮 CSExpertise", img: "/projects/csexpertise.png",urlgithub:""  },
    { title: "🚚 Trucks Control", img: "/projects/trucks.png",urlgithub:""  },
    { title: "💡 UniStats", img: "/projects/unistats.png",urlgithub:""  },
    { title: "🧠 AI Portfolio", img: "/projects/aigen.png",urlgithub:""  },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Área principal do carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((projeto, i) => (
            <div
              key={i}
              className="flex-[0_0_33.333%] p-4" // mostra 3 por vez
            >
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] overflow-hidden">
                <img
                  src={projeto.img}
                  alt={projeto.title}
                  className="rounded-lg shadow-md w-full h-56 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold text-center">{projeto.title}</h3>
                <div className="flex items-center justify-center space-x-5 mt-5"> 
                    <a href={projeto.urlgithub}><img className="h-8" src="/img/github.png" alt="" /></a>
                    <a href=""><svg className="w-8 text-gray-800 dark:text-white transition-transform duration-200 hover:scale-125 cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                </svg></a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões laterais */}
      <button
        onClick={scrollPrev}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-secondary hover:bg-primary text-primary-foreground rounded-full p-2 shadow-md transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-secondary hover:bg-primary text-primary-foreground rounded-full p-2 shadow-md transition"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
