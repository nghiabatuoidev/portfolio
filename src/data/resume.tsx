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
      source: "https://github.com/nghiabatuoidev/webchat-netcoremvc-signal.git",
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
      source: "https://github.com/nghiabatuoidev/typingfast-nextjs.git",
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
        {
          type: "Source",
          href: "https://github.com/nghiabatuoidev/typingfast-nextjs.git",
          icon: <Icons.github className="size-3" />,
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
