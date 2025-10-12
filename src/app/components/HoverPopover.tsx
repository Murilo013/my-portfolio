
import { Button, Popover } from "flowbite-react";

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
        <img src={src} alt={alt} className="w-20 h-20 object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
        />
        
    </Popover>
  );
}


