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
      <section className="main-section">
        <p className="main-text">
          Sou estudante de Sistemas de Informação e atuo como estagiário de TI com foco em desenvolvimento back-end e engenharia de dados aplicada ao negócio. Desenvolvo APIs e soluções em C#, trabalho com modelagem e otimização de bancos SQL Server, criação de views estratégicas e integração entre sistemas.
          <br />
          <br />
          Também desenvolvo scripts em Python para coleta, tratamento e automação de dados, apoiando a construção de dashboards e indicadores no Power BI. Tenho experiência com TypeScript, C#, Python, versionamento com Git e Azure DevOps, sempre priorizando código limpo, performance e organização.
          <br />
          <br />
          Meu objetivo é evoluir constantemente como desenvolvedor, criando soluções escaláveis, seguras e orientadas a resultados.
        </p>
        <TimeLime/>
      </section>


      <section className="skills-section">
        <h1 id="skills" className="main-title-bg">
          SKILLS
        </h1>
        <div className="skills-grid">
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML logo" label="HTML" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS logo" label="CSS" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C# logo" label="C#"/>
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java logo" label="Java" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript logo" label="JavaScript" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript logo" label="TypeScript" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js logo" label="Node.js" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server logo" label="SQL Server" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL logo" label="PostgreSQL" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git logo" label="Git" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" alt="Azure DevOps logo" label="Azure DevOps" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" label="Azure" />
          <HoverPopover src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js logo" label="Next.js" />
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
