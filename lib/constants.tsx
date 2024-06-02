import { FooterButton } from "@/types/types";
import { Icons } from "./icons";

export const FooterButtons: FooterButton[] = [
  {
    link: "mailto:bhaumiksingh2000@gmail.com",
    name: "e-mail",
    icon: <Icons.email className="w-[16px] h-[16px]" />,
  },
  {
    link: "https://www.github.com/Mic-360/",
    name: "github",
    icon: <Icons.github className="w-[16px] h-[16px]" />,
  },
  {
    link: "https://www.linkedin.com",
    name: "linkedin",
    icon: <Icons.linkedin className="w-[16px] h-[16px]" />,
  },
  {
    link: "https://t.me/bhaumic_kun",
    name: "telegram",
    icon: <Icons.telegram className="w-[16px] h-[16px]" />,
  },
  {
    link: "https://www.facebook.com/Miczx.in",
    name: "facebook",
    icon: <Icons.facebook className="w-[16px] h-[16px]" />,
  },
  {
    link: "https://www.instagram.com/just.a.fat.rat/",
    name: "instagram",
    icon: <Icons.instagram className="w-[16px] h-[16px]" />,
  },
];
