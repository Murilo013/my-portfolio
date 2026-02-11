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
      description: "Ano em que ingressei na faculdade no curso de Sistemas de Informação.",
      side: "right",
    },
  ];

  return (
    <div className="mt-16 w-full text-white sm:mt-24 lg:mt-30">
      <div className="relative mx-auto max-w-4xl px-2 sm:px-4">
        <div className="absolute left-6 top-0 h-full w-[3px] bg-white/30 sm:left-1/2 sm:-translate-x-1/2"></div>

        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          {events.map((event, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-4 pl-14 sm:pl-0 ${
                event.side === "left" ? "sm:flex-row-reverse sm:text-left" : "sm:flex-row sm:text-right"
              }`}
            >
              <div className="w-full sm:w-1/2">
                <p className="text-lg font-bold sm:text-xl">{event.year}</p>

                <h3 className="mt-2 text-base font-semibold sm:text-lg">{event.title}</h3>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">{event.description}</p>
                {event.work && <p className="mt-2 text-sm font-bold text-gray-300 sm:text-lg">{event.work}</p>}
              </div>

              <div className="absolute left-0 top-0 sm:static sm:flex sm:flex-col sm:items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold shadow-lg sm:h-14 sm:w-14">
                  <Image className="h-7 w-7 sm:h-9 sm:w-10" src={event.icon} alt="" width={100} height={100} />
                </div>
              </div>

              <div className="hidden sm:block sm:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
