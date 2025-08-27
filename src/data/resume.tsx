import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Add Project type
export type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: string[];
  links?: {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
  images?: string[];
  themeColor?: string;
  bgColor?: string;
};

export const DATA = {
  name: "Harsh Range",
  initials: "Harsh",
  url: "https://google.com",
  location: "Jabalpur, Madhya Pradesh, India",
  description:
    "Full Stack Developer passionate about solving complex challenges with modern web technologies. With a keen interest in the decentralized space, I'm open to new collaborations and opportunities to build the future of the web.",
  summary:
    "I'm driven by the challenge of solving complex problems through code. As a Full Stack Developer, I leverage modern technologies to create robust and efficient web solutions, with a strong focus on the decentralized space and its potential for building more equitable applications. As a testament to my commitment and technical foundation. I'm actively seeking opportunities to collaborate on projects that push the boundaries of the web.",
  avatarUrl: "/me.jpeg",
  skillGroups: [
    {
      group: "Programming Languages",
      color: "green",
      skills: [
        { label: "C", icon: "c" },
        { label: "C++", icon: "c++" },
        { label: "Python", icon: "python" },
        { label: "JavaScript", icon: "javascript" },
        { label: "TypeScript", icon: "typescript" },
        { label: "PHP", icon: "php" },
        { label: "Go", icon: "go" },
        { label: "HTML/CSS", icon: "htmlcss" },
      ],
    },
    {
      group: "Frameworks & Libraries",
      color: "green",
      skills: [
        { label: "React", icon: "react" },
        { label: "Next.js", icon: "nextjs" },
        { label: "Node.js", icon: "nodeJs" },
        { label: "Express.js", icon: "expressJs" },
        { label: "Nest.js", icon: "nestJs" },
        { label: "Vue.js", icon: "vueJs" },
        { label: "React Native", icon: "reactNative" },
        { label: "Vite", icon: "vite" },
        { label: "Laravel", icon: "laravel" },
        { label: "Tailwind CSS", icon: "tailwindcss" },
        { label: "Bootstrap", icon: "bootstrap" },
        { label: "Material-UI", icon: "materialUi" },
        { label: "Shadcn-UI", icon: "shadcnUi" },
        { label: "Mantine UI", icon: "mantineUi" },
        { label: "Framer Motion", icon: "framermotion" },
        { label: "Jest", icon: "jest" },
        { label: "FastAPI", icon: "fastapi" },
        { label: "Django", icon: "django" },
        { label: "Socket.io", icon: "socketIo" },
        { label: "Prisma", icon: "prisma" },
        { label: "Drizzle", icon: "drizzle" },
        { label: "Redux", icon: "redux" },
      ],
    },
    {
      group: "Tools, Platforms & DevOps",
      color: "green",
      skills: [
        { label: "Git", icon: "git" },
        { label: "GitHub", icon: "github" },
        { label: "Docker", icon: "docker" },
        { label: "Nginx", icon: "nginx" },
        { label: "Linux", icon: "linux" },
        { label: "Firebase", icon: "firebase" },
        { label: "Google Cloud", icon: "googlecloud" },
        { label: "AWS", icon: "aws" },
        { label: "Vercel", icon: "vercel" },
      ],
    },
    {
      group: "Databases",
      color: "green",
      skills: [
        { label: "PostgreSQL", icon: "postgresql" },
        { label: "MySQL", icon: "mysql" },
        { label: "MongoDB", icon: "mongodb" },
        { label: "SQLite", icon: "sqlite" },
        { label: "Redis", icon: "redis" },
        { label: "Oracle", icon: "oracle" },
        { label: "Supabase", icon: "supabase" },
        { label: "SQL", icon: "sql" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harshrange123@gmail.com",
    tel: "+917420884367",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/haarsh157",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/harsh-range",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:harshrange123@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Freelance",
    //   href: "#",
    //   badges: [],
    //   location: "Remote",
    //   title: "Blockchain & Full Stack Developer",
    //   logoUrl: "/self-employed.png",
    //   start: "Jan 2023",
    //   end: "Current",
    //   description:
    //     "Integrated blockchain solutions with front-end frameworks like React and Node.js to build seamless full-stack applications."
    // },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology Jabalpur",
      href: "https://iiitdmj.ac.in/",
      degree:
        "Bachelor's of Technology (BTech) - Computer Science and Engineering",
      logoUrl: "/iiitdmj.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "ChatterBox",
      href: "https://chatter-box-v1.vercel.app/",
      dates: "2024",
      active: true,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "ChatterBox is a real-time chat application featuring user authentication and scalable database architecture using MongoDB; enabled seamless communication with an average latency of under 200ms. Built a real-time chat app with messaging, voice/video calls, server/channel creation, roles, themes, and invitations.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn/ui",
        "Vercel",
        "PrismaDB",
        "SocketIO",
        "LiveKit",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatter-box-v1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haarsh157/ChatterBox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/chatterbox/ss1.png",
        "/chatterbox/ss2.png",
      ],
    },
    {
      title: "FusionIIIT",
      href: "https://chatter-box-v1.vercel.app/",
      dates: "2024",
      active: true,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "Contributed to the migration of IIITDM Jabalpur’s ERP system frontend from Django templates to a modern React-based architecture. Developed and integrated dynamic pages with Django-based APIs, improving usability and modularity across academic, faculty and administrative modules. Resolved 10+ bug requests and implemented new features, enhancing software stability and functionality for end-users",
      technologies: ["React", "Redux", "PostgreSQL", "Django", "MantineUI"],
      links: [
        {
          type: "Website",
          href: "http://fusion.iiitdmj.ac.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haarsh157/Fusion-client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/fusion/ss1.png",
        "/fusion/ss2.png",
        "/fusion/ss3.png",
      ],
    },
    {
      title: "Hostel Utilities",
      href: "#",
      dates: "2023",
      active: false,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "Built a full-stack app to manage hostel services, improving operational efficiency by 40%. Automated service request handling for 15+ common hostel issues like maintenance, complaints, and inventory, reducing response time",
      technologies: [
        "React",
        "NodeJs",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haarsh157/Hostel_Utilities",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/hostelutilities/ss1.png",
        "/hostelutilities/ss2.png",
        "/hostelutilities/ss3.png",
      ],
    },
  ] as Project[],
} as const;
