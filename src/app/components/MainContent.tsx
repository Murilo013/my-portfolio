import HoverPopover from "@/app/components/HoverPopover";
import Carousel from "./Carousel";
import TimeLime from "./TimeLime";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        id="about-me"
        className="pointer-events-none px-4 text-center text-4xl font-bold text-white opacity-20 sm:text-6xl lg:text-[7rem]"
      >
        SOBRE MIM
      </h1>

      <section className="my-12 w-full max-w-7xl px-4 text-center sm:px-8 lg:my-20">
        <p className="text-base leading-relaxed text-white sm:text-xl lg:text-[2rem]">
          Sou estudante de Sistemas de Informação e atualmente atuo como estagiário de TI, com foco em
          desenvolvimento back-end e análise de dados. Tenho experiência em C#, SQL Server, TypeScript, Java,
          versionamento de código com Git e Azure DevOps, além de ferramentas como Power BI e Crystal Reports.
          <br />
          <br />
          Também realizo suporte aos sistemas corporativos, Rodopar e Microled, garantindo estabilidade e eficiência
          nas operações. Busco constantemente aprimorar meus conhecimentos em desenvolvimento, banco de dados e novas
          tecnologias, entregando soluções seguras, práticas e que agreguem valor ao negócio.
        </p>
        <TimeLime />
      </section>

      <section className="w-full max-w-7xl px-4 text-center sm:px-8">
        <h1
          id="skills"
          className="pointer-events-none text-4xl font-bold text-white opacity-20 sm:text-6xl lg:text-[7rem]"
        >
          SKILLS
        </h1>
        <div className="mb-20 mt-10 grid grid-cols-3 gap-6 place-items-center sm:grid-cols-4 sm:gap-8 lg:mb-40 lg:mt-16 lg:grid-cols-5 lg:gap-10">
          <HoverPopover src="/img/html-img.png" alt="HTML logo" label="HTML" />
          <HoverPopover src="/img/css-img.png" alt="CSS logo" label="CSS" />
          <HoverPopover src="/img/csharp-img.png" alt="C# logo" label="C#" />
          <HoverPopover src="/img/java-img.png" alt="Java logo" label="Java" />
          <HoverPopover src="/img/js-img.png" alt="JavaScript logo" label="JavaScript" />
          <HoverPopover src="/img/ts-img.png" alt="TypeScript logo" label="TypeScript" />
          <HoverPopover src="/img/nodejs-img.png" alt="Node.js logo" label="Node.js" />
          <HoverPopover src="/img/sqlserver-img.png" alt="SQL Server logo" label="SQL Server" />
          <HoverPopover src="/img/postgresql.png" alt="PostgreSQL logo" label="PostgreSQL" />
          <HoverPopover src="/img/git-img.png" alt="Git logo" label="Git" />
          <HoverPopover src="/img/azure-img.png" alt="Azure DevOps logo" label="Azure DevOps" />
          <HoverPopover src="/img/nextjs-original.png" alt="Next.js logo" label="Next.js" />
          <HoverPopover src="/img/pwbi-img.png" alt="Power BI logo" label="Power BI" />
        </div>
      </section>

      <section className="w-full">
        <h1
          id="projects"
          className="pointer-events-none px-4 text-center text-4xl font-bold text-white opacity-20 sm:text-6xl lg:text-[7rem]"
        >
          PROJETOS
        </h1>
        <Carousel />
      </section>

      <Footer />
    </div>
  );
}
