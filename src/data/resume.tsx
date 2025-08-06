import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nghia",
  initials: "DV",
  url: "https://nghiadev.id.vn",
  location: "Viet Nam",
  locationLink: "https://www.google.com/maps/place/vietnam",
  description:
    "Hi there, welcome to look at my profile! I'm passionate about creating seamless user experiences and believe that simplifying code leads to more agile applications. I am good at teamwork, friendly, and easy to approach.",
  summary:
    "When I was in school, I was very sociable and activelyparticipated in school activities. I participated in communityactivities and scientific research projects.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "TailwindCSS",
    "Bootstrap",
    ".NET Core (ASP.NET Core)",
    "C#",
    "Java",
    "RESTful API",
    "Entity Framework",
    "OOP",
    "SQL Server",
    "Postgres",
    "MongoDb",
    "Docker",
    "Redis",
    "Agile/Scrum",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "nghiabatuoidev@gmail.com",
    tel: "0356014688",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nghiabatuoidev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/h%E1%BB%AFu-ngh%C4%A9a-hu%E1%BB%B3nh-a7a7b6299",
        icon: Icons.linkedin,

        navbar: true,
      },
      DownloadPDF: {
        name: "Download PDF",
        url: "/pdf/CV HUYNH HUU NGHIA.pdf",
        icon: Icons.download,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nghiabatuoidev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company:
        "Becamex IDC Corporation – Industrial Investment and Development Corporation",
      href: "https://becamex.com.vn/gioi-thieu/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/logo-becamex.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Joined the software development team as an intern. Contributed to maintaining and developing internal company systems. Worked in an Agile/Scrum environment under the guidance of senior developers.",
      responsibilities: [
        "Attended daily stand-ups to report progress and blockers",
        "Participated in sprint planning to estimate and assign tasks",
        "Joined sprint reviews to demo completed features and gather feedback",
        "Took part in retrospectives to improve team performance",
        "Collaborated with Scrum Master and team members to deliver sprint goals",
        "Applied Scrum practices throughout the development cycle",
      ],
      technologies: "C#, .Net core API, Nextjs, SQL Server, TailwindCSS",
      online: "https://becamex.com.vn",
      source: "",
    },
    {
      company: "Online Chat Web",
      href: "",
      badges: [],
      location: "On-site",
      title: "Personal Project",
      logoUrl: "/atomic.png",
      start: "October 2023",
      end: "December 2023",
      description:
        "Develop a real-time messaging application similar to Zalo. Implement core features such as text messaging, posting, connecting friends, creating groups.",
      responsibilities: [],
      technologies: "C#, .Net core MVC, SignalR, Mongodb,TaiwindCSS.",
      source: "https://github.com/nghiabatuoidev/webchat-dotnet-mvc.git",
      online: "",
    },
    {
      company: "Online Movie Web",
      href: "https://motchillzz.top",
      badges: [],
      location: "Remote",
      title: "Personal Project",
      logoUrl: "/motchill.png",
      start: "March 2024",
      end: "April 2024",
      description:
        "A movie streaming website where users canbrowse and watch movies.",
      responsibilities: [],
      technologies:
        "Next.js, ShadCN/UI, Tailwind CSS, Redux Toolkit, API integration, Redis, Docker.",
      source: "",
      online: "https://motchillzz.top",
    },
    {
      company: "Typing Practice Website Online",
      href: "https://xtypingfast.com/en",
      badges: [],
      location: "Remote",
      title: "Group project - Teamsize (2)",
      logoUrl: "/xtypingfast.png",
      start: "January 2025",
      end: "April 2025",
      description:
        "Online typing practice website supports multiple languages.",
      responsibilities: [
        "Collected and analyzed user requirements and market data",
        "Defined system requirements, data flows, and user interactions",
        "Designed system architecture, data models, APIs, and technology stack",
        "Developed a responsive, user-friendly, multilingual interface",
      ],
      technologies:
        "Typescript, Nextjs, Redux, Hook, TaiwindCSS, Shadcn/ui, .Net core API, C#, PosgreSQL, Docker.",
      source: "",
      online: "https://xtypingfast.com/en",
    },
  ],
  education: [
    {
      school: "Thu Dau Mot University",
      href: "https://tdmu.edu.vn",
      degree: "Software Engineering",
      logoUrl: "/tdmu.png",
      start: "2021",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Online movie web",
      href: "https://motchillzz.top",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "A movie streaming website where users can browse and watch movies.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Redux",
        "Api",
        "Redis",
        "Docker",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://motchillzz.top",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/demo1.mp4",
    },
    {
      title: "Typing Practice Website Online",
      href: "http://xtypingfast.com/en",
      dates: "January 2025 - April 2025",
      active: true,
      description:
        "Online typing practice website supports multiple languages.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
        ".Net core (ASP core API)",
        "PostgreSQL",
        "Docker",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://xtypingfast.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/demo2.mp4",
    },
    {
      title: "Download TikTok Video Without Watermark",
      href: "https://snaptikz.pro",
      dates: "June 2025 - August  2025",
      active: true,
      description:
        "Online tool for downloading TikTok videos without watermark.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Docker",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://snaptikz.pro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/demo3.mp4",
    },
  ],
} as const;
