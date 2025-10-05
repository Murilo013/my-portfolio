export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      {/* Título de fundo */}
      <h1 className="text-[7rem] font-bold text-white opacity-20 pointer-events-none">
        SOBRE MIM
      </h1>

      {/* Conteúdo */}
      <section className="max-w-7xl text-center px-8">
        <p className="text-white text-[2rem] leading-relaxed">
          Sou estudante de Sistemas de Informação e atualmente atuo como estagiário de TI, com foco em desenvolvimento back-end e análise de dados. Tenho experiência em C#, SQL Server, TypeScript, Java, versionamento de código com Git e Azure DevOps, além de ferramentas como Power BI e Crystal Reports.

          Também realizo suporte aos sistemas corporativos, Rodopar e Microled, garantindo estabilidade e eficiência nas operações. Busco constantemente aprimorar meus conhecimentos em desenvolvimento, banco de dados e novas tecnologias, entregando soluções seguras, práticas e que agreguem valor ao negócio.
        </p>
      </section>
    </div>
  );
}
