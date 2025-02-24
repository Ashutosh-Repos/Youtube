import React from "react";
import {
  Home,
  UserCircle,
  ListVideo,
  TvMinimalPlay,
  Clapperboard,
  Bird,
} from "lucide-react";
//import subscriptionIcon from "@/public/icons/subscriptions.svg";
import Image from "next/image";
import Link from "next/link";

const SideNav: React.FC = () => {
  const icons: {
    Icon: React.FC<{ size: string }>;
    label: string;
    nav: string;
  }[] = [
    { Icon: Home, label: "Home", nav: "/vidtube/" },
    { Icon: ListVideo, label: "Playlists", nav: "/vidtube/playlist" },
    {
      Icon: TvMinimalPlay,
      label: "Subscriptions",
      nav: "/vidtube/subscription",
    },
    { Icon: Bird, label: "Tweet", nav: "/vidtube/tweet" },
    { Icon: UserCircle, label: "You", nav: "/vidtube/user" },
  ];

  return (
    <div className="w-18 h-full bg-zinc-950 flex flex-col items-center justify-start gap-6 py-2.5 border-r-2">
      {icons.map((e, index) => (
        <Link href={e.nav} key={index}>
          <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
            {<e.Icon size="2rem" />}
            <p className="text-[0.5rem] font-bold ">{e.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
