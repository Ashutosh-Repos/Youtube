import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Upload, Radio } from "lucide-react";
import recorder from "@/public/icons/recorder.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { roboto, inter } from "@/app/fonts";
import { Plus } from "lucide-react";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

const UserMenu = async () => {
  const session = await auth();
  if (session?.user)
    return (
      <>
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
            <AvatarImage
              src={
                session?.user?.image
                  ? session?.user?.image
                  : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>
              {session?.user?.name ? session.user.name.at(0) : "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      </>
    );

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default UserMenu;
