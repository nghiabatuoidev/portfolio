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
    "Web Developer Intern who likes working with .NET and Next.js. Has experience building real projects from start to finish and working in Agile/Scrum teams. Looking to improve backend and full-stack skills in a professional environment.",
  avatarUrl: "/me.png",
  skills: [
    ".NET",
    "C#",
    "RESTful API",
    "SQL Server",
    "PostgreSQL",
    "Docker",
    "Redis",
    "VPS",
    "MediatR",
    "Clean Architecture",
    "Design Patterns",
    "Agile/Scrum",
    "ReactJS",
    "NextJS",
    "Typescript",
    "TailwindCSS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "huynhhuunghia.dev@gmail.com",
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
        url: "mailto:huynhhuunghia.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Becamex IDC Corporation",
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
        "Joined daily meetings to share progress and issues",
        "Helped plan tasks during sprint planning",
        "Presented completed work in sprint reviews and received feedback",
        "Joined sprint retrospectives to improve team work",
        "Worked with Scrum Master and team to complete sprint goals",
        "Followed Scrum process in daily work",
      ],
      technologies: "C#, .Net Core API, Nextjs, SQL Server",
      online: "https://becamex.com.vn",
      source: "",
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
      title: "TDMU Student Market Web App",
      href: "https://chosinhvien.cloud",
      dates: "Mar 2025 – Jun 2025",
      active: true,
      description:
        "Developed a student-focused online marketplace platform with features including product posting, real-time chat, online payment, noti cations, and admin management.",
      technologies: [
        "ASP .Net API",
        "PostgreSQL",
        "Redis",
        "Docker",
        "VPS",
        "Redis",
        "SignalR",
        "Cloudflare",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://chosinhvien.cloud",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web1.png",
    },
    {
      title: "Minh Mộc Avocado Oil E-commerce Web App",
      href: "https://minhmoc.vn",
      dates: "September 2025 – November 2025",
      active: true,
      description:
        "A full-stack e-commerce website for avocado oil products, designed and built from the beginning, focusing on performance, SEO, and user experience to increase conversions.",
      technologies: [
        "ASP .Net API",
        "PostgreSQL",
        "Docker",
        "VPS",
        "Cloudflare",
        "Next.js",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://minhmoc.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web2.png",
    },
  ],
} as const;
