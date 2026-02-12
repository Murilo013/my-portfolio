import HoverPopover from "@/app/components/HoverPopover";
import Carousel from "./Carousel";
import TimeLime from "./TimeLime";
import Footer from "./Footer";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Título de fundo */}
      <h1 id="about-me" className="main-title-bg">
        SOBRE MIM
      </h1>

      {/* Conteúdo */}
      <section  className="main-section">
        <p className="main-text">
          Sou estudante de Sistemas de Informação e atualmente atuo como estagiário de TI, com foco em desenvolvimento back-end e análise de dados. Tenho experiência em C#, SQL Server, TypeScript, Java, versionamento de código com Git e Azure DevOps, além de ferramentas como Power BI e Crystal Reports.
          <br />
          <br />
          Também realizo suporte aos sistemas corporativos, Rodopar e Microled, garantindo estabilidade e eficiência nas operações. Busco constantemente aprimorar meus conhecimentos em desenvolvimento, banco de dados e novas tecnologias, entregando soluções seguras, práticas e que agreguem valor ao negócio.
        </p>
        <TimeLime/>
      </section>

      <section className="skills-section">
        <h1 id="skills" className="main-title-bg">
          SKILLS
        </h1>
        <div className="skills-grid">
          <HoverPopover src="/img/html-img.png" alt="HTML logo" label="HTML" />
          <HoverPopover src="/img/css-img.png" alt="CSS logo" label="CSS" />
          <HoverPopover src="/img/csharp-img.png" alt="C# logo" label="C#"/>
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



     <section className="projects-section">
        <h1 id="projects" className="main-title-bg">
          PROJETOS
        </h1>
        <Carousel/>
     </section>

    <Footer/>

    </div>
  );
}
