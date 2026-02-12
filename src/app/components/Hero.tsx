import TextType from '@/app/components/textType'
import Image from 'next/image';
import TiltedCard from './TiltedCard';
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-backdrop">
        BACKEND DEVELOPER
      </div>

      <div className="hero-content">
        <TextType 
          text={["Olá! Murilo Aqui","Seja bem vindo !"]}
          typingSpeed={70}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
          className="hero-title"
        />
        <div className="hero-social">
          <a href="https://github.com/Murilo013" target="_blank">
            <Image 
            src="/img/github.png" 
            alt="GitHub" 
            width={150} 
            height={150} 
            className="hero-social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/murilo-alessio-amaral/" target="_blank">
            <Image 
            src="/img/linkedin.png" 
            alt="LinkedIn" 
            width={150} 
            height={150}
            className="hero-social-icon" 
            />
          </a>
          <a 
  href="/Currículo - Murilo A. Amaral.pdf" 
  download="Currículo - Murilo A. Amaral.pdf"
>
  <svg 
    className="hero-social-svg" 
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
</a>
        </div>
      </div>
        <div className="hero-card">
          <TiltedCard
            imageSrc="/img/avatar.png"
            captionText="Murilo Amaral Icon"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={30}
            scaleOnHover={1.1}
          />
        </div>
    </section>
  );
}
