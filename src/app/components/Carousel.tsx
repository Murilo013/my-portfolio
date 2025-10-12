
import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel 
        leftControl="←"
        rightControl="→"
        indicators={true}
        slideInterval={3000}
        pauseOnHover={true}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="/img/cine+.jpg" alt="Project 1" className="w-full h-full object-cover" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="/img/csharp-img.png" alt="Project 2" className="w-full h-full object-cover" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src="/img/azure-img.png" alt="Project 3" className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
}
