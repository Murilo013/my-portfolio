import TextType from '@/app/components/textType'
import TiltedCard from './TiltedCard';

export default function Hero() {
  return (
    <section className="flex h-screen flex-row items-center justify-around px-40 text-white">

      <div className="absolute top-200 left-35 transform rotate-270 origin-bottom-left text-gray-400 text-[90px] font-medium uppercase opacity-20 pointer-events-none">
        BACKEND DEVELOPER
      </div>

      <div className="flex flex-col" style={{ minWidth: '550px', maxWidth: '450px', }}>
        <TextType 
          text={["Olá! Murilo Aqui","Seja bem vindo !"]}
          typingSpeed={70}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
          className="text-[70px] font-bold mb-4 "
        />
        <div className="flex gap-4">
          <a href="https://github.com/Murilo013" target="_blank">
            <img src="/img/github.png" alt="GitHub" className="w-15 transition-transform duration-200 hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/murilo-alessio-amaral/" target="_blank">
            <img src="/img/linkedin.png" alt="LinkedIn" className="w-15 transition-transform duration-200 hover:scale-125" />
          </a>
          <svg className="w-15 h-15 text-gray-800 dark:text-white transition-transform duration-200 hover:scale-125 cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
          </svg>
        </div>
      </div>
        <TiltedCard
          imageSrc="/img/avatar.png"
          captionText="Murilo Amaral Icon"
          containerHeight="650px"
          containerWidth="550px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={30}
          scaleOnHover={1.2}
        />
    </section>
  );
}
