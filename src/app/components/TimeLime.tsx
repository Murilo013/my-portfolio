import Image from "next/image";

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

  return (
    <div className="w-full text-white mt-30">
      <div className="max-w-4xl mx-auto relative">

        {/* Linha vertical */}
        <div className="absolute left-1/2 top-0 h-225 w-[3px] bg-white/40 transform -translate-x-1/2"></div>

        <div className="space-y-20">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 ${
                event.side === "left"
                  ? "flex-row-reverse text-left"
                  : "flex-row text-right"
              }`}
            >
              {/* Conteúdo */}
              <div className="w-1/2">

                <p className="text-xl font-bold">{event.year}</p>

                <h3 className="text-lg font-semibold mt-2">
                  {event.title}
                </h3>
                <p className="text-sm mt-2 text-gray-300">{event.description}</p>
                {event.work && (
                  <p className="text-lg font-bold mt-1 text-gray-300">{event.work}</p>
                )}
              </div>

              {/* Ícone + linha */}
              <div className="relative flex flex-col items-center">
                <div className="w-14 h-14 flex items-center justify-center text-2xl bg-white rounded-full font-bold shadow-lg">
                    <Image 
                    className="w-10 h-9" 
                    src={event.icon} 
                    alt="" 
                    width={100} 
                    height={100}
                    />
                </div>
              </div>

              {/* Espaçador */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
