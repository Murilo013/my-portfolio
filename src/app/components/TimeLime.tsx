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
        "Início da minha trajetória profissional como estagiário de TI, atuando no desenvolvimento de soluções internas e automações. Desenvolvimento de scripts em Python para coleta e tratamento de dados, criação de views e consultas SQL estratégicas, além de apoio na construção de dashboards no Power BI. Evoluindo diariamente tanto tecnicamente quanto na responsabilidade sobre entregas e processos.",
      work: "Gelog — 07/2025 → Atual",
      side: "right",
    },
    {
      year: "2024",
      icon: "/img/trophy-img.png",
      title: "Primeiro Hackaton",
      description: "Participação em hackathon acadêmico, desenvolvendo uma solução funcional em equipe sob pressão e prazo limitado. Experiência prática com arquitetura, divisão de tarefas e entrega de produto.",

      side: "left",
    },
    {
      year: "2024",
      icon: "/img/university-img.png",
      title: "Continuidade nos estudos",
      description:
"Definição de foco profissional em desenvolvimento back-end. Aprofundamento em C#, APIs, modelagem de banco de dados e boas práticas de código.",
      side: "right",
    },
    {
      year: "2023",
      icon: "/img/notebook-img.png",
      title: "Começando com o pé direito",
      description:
  "Início dos estudos em desenvolvimento web e fundamentos de programação (HTML, CSS, JavaScript), construindo a base para evolução técnica.",
      side: "left",
    },
    {
      year: "2023",
      icon: "/img/university-img.png",
      title: "Meu começo…",
      description:
  "Ingresso no curso de Sistemas de Informação, iniciando minha jornada na área de tecnologia.",
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
