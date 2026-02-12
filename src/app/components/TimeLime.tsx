"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./TimeLime.css";

export default function TimeLime() {
  const events = [
    {
      year: "2025",
      icon: "/img/notebook-img.png",
      title: "Entrada no mercado de trabalho",
      description:
        "Meu primeiro estágio, onde estou aprendendo muito, podendo evoluir tanto tecnicamente como pessoa.",
      work: "Gelog — 07/2025 → O momento",
      side: "right",
    },
    {
      year: "2024",
      icon: "/img/trophy-img.png",
      title: "Primeiro Hackaton",
      description:
        "Eu e minha equipe nos desafiamos em um hackaton organizado pela faculdade. Conseguimos o 3º lugar e foi uma experiência sensacional.",
      side: "left",
    },
    {
      year: "2024",
      icon: "/img/university-img.png",
      title: "Continuidade nos estudos",
      description:
        "Descobri vários caminhos que a tecnologia oferece, mas me identifiquei com backend. Desde então venho me especializando cada vez mais.",
      side: "right",
    },
    {
      year: "2023",
      icon: "/img/notebook-img.png",
      title: "Começando com o pé direito",
      description:
        "No mesmo ano que ingressei na faculdade, comecei cursos de desenvolvimento web (HTML, CSS, JS) para entender o mundo que estava entrando.",
      side: "left",
    },
    {
      year: "2023",
      icon: "/img/university-img.png",
      title: "Meu começo…",
      description:
        "Ano em que ingressei na faculdade no curso de Sistemas de Informação.",
      side: "right",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-max-width">

        {/* Linha vertical */}
        <div className="timeline-line"></div>

        <div className="timeline-space">
          {events.map((event, i) => (
            <div
              key={i}
              className={`timeline-item ${
                event.side === "left"
                  ? "timeline-left"
                  : "timeline-right"
              }`}
            >
              {/* Conteúdo */}
              <div className="timeline-content">
                <p className="timeline-year">{event.year}</p>

                <h3 className="timeline-title">
                  {event.title}
                </h3>

                <p className="timeline-description">
                  {event.description}
                </p>

                {event.work && (
                  <p className="timeline-work">{event.work}</p>
                )}
              </div>

              {/* Ícone central */}
              <div className="timeline-icon-wrapper">
                <div className="timeline-icon">
                  <Image
                    className="timeline-icon-img"
                    src={event.icon}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              {/* Espaçador */}
              <div className="timeline-spacer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
