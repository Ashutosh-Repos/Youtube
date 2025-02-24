import React from "react";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import { Upload, Radio } from "lucide-react";
import recorder from "@/public/icons/recorder.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import VideoSearchForm from "./VideoSearchForm";
import { roboto, inter } from "@/app/fonts";
import { Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between  p-0.5 md:px-3 lg:px-4 gap-2 border-b-2 relative bg-inherit">
      <div className="flex items-center justify-between font-bold text-2xl gap-2">
        <Image src={logo} alt="logo" className="h-full aspect-square" />
        <h1>Vidtube</h1>
      </div>
      <VideoSearchForm />
      <div className="flex items-center justify-center gap-4 px-2">
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center justify-center p-3 rounded-full gap-2 bg-zinc-900 font-bold cursor-pointer">
              <Image src={recorder} alt="recorded" className="min-w-5" />
              <p className={`${inter.className} text-sm`}>Create</p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-1 w-28 flex flex-col gap-1">
            <div className="w-full h-auto p-0.5 grid grid-cols-3 place-items-center cursor-pointer">
              <Upload className="w-5" />
              <p className="text-sm col-span-2">Upload</p>
            </div>
            <Separator />
            <div className="w-full h-auto p-0.5 grid grid-cols-3 place-items-center cursor-pointer">
              <Radio className="w-5" />
              <p className="text-sm col-span-2">Upload</p>
            </div>
          </PopoverContent>
        </Popover>

        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
