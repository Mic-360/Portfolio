import { FooterButton, Work } from "@/types/types";
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
    link: "https://www.linkedin.com/in/bhaumic",
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

export const WorkExperience: Work[] = [
  {
    Year: "2022 - Present",
    Company: "Twinverse Technology Pvt. Ltd.",
    Duration: "1 year 7 months",
    Role: "Full-Stack developer",
    Skills: "Next, Python, Typescript & Node.js",
  },
  {
    Year: "2020 - 2021",
    Company: "ASUS X01BD Team",
    Duration: "11 months",
    Role: "Android Developer",
    Skills: "Git, C, Java & Kotlin, CMake, AOSP, GCP",
  },
  {
    Year: "2017 - 2019",
    Company: "Freelancer",
    Duration: "1 year 9 months",
    Role: "Android & Web Developer",
    Skills: "Git, Java, Kotlin, PHP, MySQL, HTML, CSS, JS",
  },
];
