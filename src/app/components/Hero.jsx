export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around px-10 py-20 bg-[#0a1633] text-white">
         <div className="fixed top-200 left-30 transform rotate-270 origin-bottom-left text-gray-400 text-7xl uppercase opacity-20 pointer-events-none z-0">
        BACKEND DEVELOPER
      </div>
      <div>  
        <h1 className="text-4xl font-bold">Olá, Murilo Aqui!</h1>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/" target="_blank">
            <img src="/img/github.png" alt="GitHub" className="w-8 transition-transform duration-200 hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/murilo-alessio-amaral/" target="_blank">
            <img src="/img/linkedin.png" alt="LinkedIn" className="w-8 transition-transform duration-200 hover:scale-125" />
          </a>
          <svg class="w-7 h-8 text-gray-800 dark:text-white transition-transform duration-200 hover:scale-125 cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
          </svg>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img src="/img/avatar.png" alt="Avatar" className="w-80 h-80 rounded-full" />
      </div>
    </section>
  );
}
