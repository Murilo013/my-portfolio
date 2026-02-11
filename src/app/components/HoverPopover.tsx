"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const Popover = dynamic(
  () => import("flowbite-react").then(mod => mod.Popover),
  { ssr: false }
);

interface HoverPopoverProps {
  src: string;
  alt: string;
  label: string;
}

export default function HoverPopover({src, alt, label}: HoverPopoverProps) {
  const content = (
    <div className="text-center px-3 py-2 text-lg text-white font-bold bg-[#3999FE] rounded-md">
        {label}
    </div>
  );

  return (
    <Popover content={content} trigger="hover" placement="top" arrow={false} className="border-none">
        <Image src={src} alt={alt} width={80} height={80} className="h-14 w-14 cursor-pointer object-contain transition-transform duration-200 hover:scale-110 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        />
        
    </Popover>
  );
}
