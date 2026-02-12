import MainContent from "@/app/components/MainContent"
import Hero from "./components/Hero"
import GooeyNav from "@/app/components/GooevyNav";

export default function Home() {

const items = [
  { label: "Sobre Mim", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
];

  return (
    <>
        <div className="flex justify-center items-center mt-5">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}          
          />
        </div>
      <Hero />
      <MainContent />
    </>
  );
}
