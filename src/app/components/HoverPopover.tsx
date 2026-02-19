"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./HoverPopover.css";

const Popover = dynamic(
  () => import("flowbite-react").then(mod => mod.Popover),
  { ssr: false }
);

interface HoverPopoverProps {
  src: string;
  alt: string;
  label: string;
}

export default function HoverPopover({ src, alt, label }: HoverPopoverProps) {
  const content = (
    <div className="text-center px-3 py-2 text-lg text-white font-bold bg-[#3999FE] rounded-md">
      {label}
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="hover"
      placement="top"
      arrow={false}
      className="border-none"
    >
      <div className="skill-wrapper">
        <Image src={src} alt={alt} width={96} height={96} className="skill-image" />
      </div>
    </Popover>
  );
}
