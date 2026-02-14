import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Somnath Paul",
  initials: "SP",
  url: "https://somnathpaul.com",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "I'm an App Developer specializing in Modern Mobile Applications.",
  summary:
    "I craft seamless mobile experiences using Flutter and Dart. Passionate about elegant UI, smooth performance, and transforming creative ideas into powerful cross-platform apps.\n\n**Passionate about creating digital experiences that matter.**\n\nWith experience in App development, I've collaborated on projects that blend creativity and technology to deliver smooth, impactful mobile experiences. My journey started with a fascination for how apps come to life — and it's grown into a full-fledged passion for designing and developing user-centric solutions.\n\nI specialize in **Flutter**, **Dart**, and **Firebase**, crafting cross-platform apps that are fast, beautiful, and reliable. Along the way, I've also worked with Python, Git, SQL, and design tools like Figma and Procreate, allowing me to handle both the technical and creative sides of app development. When I'm not coding, you'll often find me sketching UI ideas, experimenting with new Flutter widgets, or exploring innovative design trends to make every project stand out.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Flutter", icon: Icons.flutter },
    { name: "Dart", icon: Icons.dart },
    { name: "Firebase", icon: Icons.firebase },
    { name: "Appwrite", icon: Icons.appwrite },
    { name: "Git/GitHub", icon: Icons.git },
    { name: "Python", icon: Icons.python },
    { name: "Java", icon: Icons.java },
    { name: "Figma", icon: Icons.figma },
    { name: "AWS", icon: Icons.aws },
    { name: "GCP", icon: Icons.gcp },
    { name: "SQL", icon: Icons.sql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "raxalpha36@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/som120",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/somnath03",
        icon: Icons.linkedin,
        navbar: true,
      },
      "Play Store": {
        name: "Play Store",
        url: "https://play.google.com/store/apps/dev?id=7813188865661448232&hl=en_IN",
        icon: Icons.playstore,
        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/somnathpaul7",
        icon: Icons.behance,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raxalpha36@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RAVI PANKHA (INDIA) PRIVATE LIMITED",
      href: "https://ravifans.com/",
      badges: [],
      location: "Varanasi, U.P.",
      title: "UI/UX Designer (Internship)",
      logoUrl: "/ravi logo.png",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Created responsive high-fidelity interfaces in Figma, improving user navigation efficiency by 25%. Worked with developers and product managers to build scalable design systems, cutting handoff time by 40%. Created wireframes and interactive prototypes in Figma and Procreate, reducing review cycles to 1–2 rounds.",
    },
    {
      company: "BuildMyBody",
      href: "#",
      badges: [],
      location: "New Delhi, Delhi",
      title: "UI/UX Designer (Internship)",
      logoUrl: "/bmb logo.png",
      start: "Jun 2023",
      end: "Dec 2023",
      description:
        "Led the complete UI/UX lifecycle for 2+ digital platforms, maintaining consistent visual design across web and mobile experiences. Built and tested high-fidelity prototypes to identify and fix usability issues before development. Redesigned navigation workflows to improve accessibility and task completion flow, making the interface easier to use for first-time users.",
    },
  ],
  education: [
    {
      school: "SRM Institute of Science and Technology",
      href: "https://www.srmist.edu.in",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/srmlogo.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "Christ Deemed to be University",
      href: "https://christuniversity.in",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/christ.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "AniFlux",
      href: "https://www.aniflux.in/",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "A sleek anime discovery app built with Flutter and Firebase, allowing users to explore, search, and bookmark their favorite anime. Features a clean UI, smooth performance, and real-time data updates. Integrates the AniList GraphQL API for efficient real-time search and metadata retrieval. Built with a hybrid backend using Firebase for data storage and Appwrite Cloud Functions for server-side logic. Implements secure user authentication via Firebase Auth to synchronize personalized watchlists and preferences across devices.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Firestore",
        "Appwrite Cloud Functions",
        "AniList GraphQL API",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.aniflux.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/som120/AniFlux",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.aniflux.app&hl=en_IN",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/Frame 79.png",
      video: "",
    },
    {
      title: "NutriVision",
      href: "https://github.com/som120/NutriVision",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "NutriVision is an AI-powered nutrition tracking app that uses your phone's camera to detect and identify food in real time. It automatically calculates nutritional values and adds them to your personal dashboard, helping you monitor calories, macros, and daily food goals with ease.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Firestore",
        "Appwrite",
        "Gemini Model API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/som120/NutriVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ambimed Dashboard",
      href: "https://www.figma.com/design/CrjADPreblHygEK7p3eGlW/Ambimed-Dashboard-s?node-id=0-1&p=f",
      dates: "",
      active: false,
      description:
        "Designed a comprehensive medical dashboard interface for Ambimed, featuring intuitive navigation, data visualization, and streamlined workflows for healthcare professionals.",
      technologies: ["Figma", "UI/UX Design", "Dashboard", "Healthcare"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/CrjADPreblHygEK7p3eGlW/Ambimed-Dashboard-s?node-id=0-1&p=f",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/ambimed-dashboard.png",
      video: "",
    },
    {
      title: "MCJ",
      href: "https://www.figma.com/design/8FVtUCmVA6fuUOQkIpL4gS/MCJ?node-id=0-1&t=bKspnyFehGxGw2YQ-1",
      dates: "",
      active: false,
      description:
        "Created a polished and user-friendly interface design for the MCJ platform, focusing on clean layouts, accessibility, and a seamless user experience.",
      technologies: ["Figma", "UI/UX Design"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/8FVtUCmVA6fuUOQkIpL4gS/MCJ?node-id=0-1&t=bKspnyFehGxGw2YQ-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/mcj.png",
      video: "",
    },
    {
      title: "FitApp",
      href: "https://www.figma.com/design/xeZWCvwe9bbXV3uhpGSD9E/FitApp?node-id=0-1&t=vYXhW2ZyYPXGBoX9-1",
      dates: "",
      active: false,
      description:
        "Designed a fitness application with engaging UI, workout tracking features, and a modern aesthetic tailored for health-conscious users.",
      technologies: ["Figma", "UI/UX Design", "Mobile App", "Fitness"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/xeZWCvwe9bbXV3uhpGSD9E/FitApp?node-id=0-1&t=vYXhW2ZyYPXGBoX9-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/fitapp.png",
      video: "",
    },
    {
      title: "WORO Media App",
      href: "https://www.figma.com/design/lZVa6AZPcyjYkI4eIp3Z5N/WORO-Media-App-Design?node-id=0-1&t=pOaXoAQAQaHCmrAC-1",
      dates: "",
      active: false,
      description:
        "Designed a media application for WORO with focus on content discovery, social interactions, and an immersive viewing experience.",
      technologies: ["Figma", "UI/UX Design", "Mobile App", "Media"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/lZVa6AZPcyjYkI4eIp3Z5N/WORO-Media-App-Design?node-id=0-1&t=pOaXoAQAQaHCmrAC-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/woro-media.png",
      video: "",
    },
    {
      title: "Ambimed App",
      href: "https://www.figma.com/design/OYocvIiquylYji4Id3E69W/Ambimed-App-User-Driver--Design?node-id=0-1&t=hwcGwtKtp2CfGiit-1",
      dates: "",
      active: false,
      description:
        "Designed the user and driver interfaces for the Ambimed mobile app, creating intuitive flows for both patients and drivers in the healthcare transport space.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Mobile App",
        "Healthcare",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/OYocvIiquylYji4Id3E69W/Ambimed-App-User-Driver--Design?node-id=0-1&t=hwcGwtKtp2CfGiit-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/ambimed-app.png",
      video: "",
    },
    {
      title: "Build My Body",
      href: "https://www.figma.com/design/XRb2heEBtGdkXWutswrl19/Build-My-Body?node-id=0-1&p=f&t=o6ofkIXTj9hvCSbY-0",
      dates: "",
      active: false,
      description:
        "Designed the complete UI/UX for the Build My Body platform, creating a visually engaging interface for fitness and body-building enthusiasts with workout plans and progress tracking.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Web & Mobile",
        "Fitness",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/XRb2heEBtGdkXWutswrl19/Build-My-Body?node-id=0-1&p=f&t=o6ofkIXTj9hvCSbY-0",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/build-my-body.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
