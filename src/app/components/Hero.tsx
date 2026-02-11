import TextType from '@/app/components/textType'
import Image from 'next/image';
import TiltedCard from './TiltedCard';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-10 text-white sm:px-8 lg:flex-row lg:justify-between lg:px-16 xl:px-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-4xl font-medium uppercase opacity-10 sm:block sm:text-6xl lg:text-8xl">
        BACKEND DEVELOPER
      </div>

      <div className="z-10 flex w-full max-w-xl flex-col">
        <TextType
          text={["Olá! Murilo Aqui", "Seja bem vindo !"]}
          typingSpeed={70}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
          className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        />
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://github.com/Murilo013" target="_blank" rel="noreferrer">
            <Image
              src="/img/github.png"
              alt="GitHub"
              width={150}
              height={150}
              className="w-10 transition-transform duration-200 hover:scale-125 sm:w-12 lg:w-14"
            />
          </a>
          <a href="https://www.linkedin.com/in/murilo-alessio-amaral/" target="_blank" rel="noreferrer">
            <Image
              src="/img/linkedin.png"
              alt="LinkedIn"
              width={150}
              height={150}
              className="w-10 transition-transform duration-200 hover:scale-125 sm:w-12 lg:w-14"
            />
          </a>
          <svg
            className="h-10 w-10 cursor-pointer text-gray-800 transition-transform duration-200 hover:scale-125 dark:text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
            />
          </svg>
        </div>
      </div>

      <div className="z-10 flex w-full items-center justify-center lg:w-auto">
        <TiltedCard
          imageSrc="/img/avatar.png"
          captionText="Murilo Amaral Icon"
          containerHeight="clamp(320px, 60vw, 580px)"
          containerWidth="clamp(260px, 85vw, 500px)"
          imageHeight="clamp(240px, 50vw, 430px)"
          imageWidth="clamp(240px, 50vw, 430px)"
          rotateAmplitude={24}
          scaleOnHover={1.1}
        />
      </div>
    </section>
  );
}
