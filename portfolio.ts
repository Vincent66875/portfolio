import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Vincent Hung",
  title: "Hi all, I'm Rung-Shiang (Vincent) Hung",
  description:
    "I'm a Computer Science senior at Clemson University and an aspiring software/cloud engineer. I have a strong focus on building scalable web applications and modernizing legacy systems using React, Java, AWS, and FastAPI. My background spans full-stack development, network IT operations, and cybersecurity research.",
  resumeLink: "/resume_.pdf", 
};

export const openSource = {
  githubUserName: "Vincent66875",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:rhung@clemson.edu",
  linkedin: "https://www.linkedin.com/in/rung-shiang-hung",
  github: "https://github.com/Vincent66875",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SOFTWARE & CLOUD ENGINEER WHO BUILDS SCALABLE AND INCLUSIVE SYSTEMS",
  data: [
    {
      title: "Full Stack & Cloud Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Developing responsive web apps with React, Next.js, and TypeScript"),
        emoji("⚡ Modernizing legacy infrastructure (COBOL to Java) using AWS tools"),
        emoji("⚡ Implementing secure backend services with FastAPI and Node.js"),
        emoji("⚡ Managing network infrastructure and cloud deployments"),
      ],
      softwareSkills: [
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Frontend/Design", progressPercentage: "85" },
  { Stack: "Backend (Java/Python)", progressPercentage: "85" },
  { Stack: "Cloud/Network IT", progressPercentage: "80" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Clemson University",
    subHeader: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    duration: "August 2021 - May 2026",
    grade: "GPA: 3.6/4.00 | Dean’s List",
    desc: "Relevant Coursework: Cloud Computing, Network Security, Software Engineering, Database Management Systems.",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Network IT Technician",
    company: "Clemson CCIT",
    companyLogo: "/img/icons/common/university.png", // Ensure you have a logo or use a placeholder
    date: "Aug 2022 - Dec 2025",
    desc: "Provided critical network support for the university campus. Configured Cisco switches, maintained UPS power systems, managed hardware inventory, and troubleshot connectivity issues for thousands of users in a high-demand environment.",
  },
  {
    role: "Research Assistant (Zonal Architecture)",
    company: "Clemson Creative Inquiry",
    companyLogo: "/img/icons/common/university.png",
    date: "Aug 2025 - Dec 2025",
    desc: "Conducted graduate-level research on automotive zonal network security. Configured simulations for vehicle ECUs, implemented embedded software components, and analyzed network topology to improve security protocols for next-gen vehicles.",
  },
  {
    role: "IT Intern",
    company: "First Quality",
    companyLogo: "/img/icons/common/company.png",
    date: "May 2024 - Aug 2024",
    desc: "Supported enterprise IT operations by handling helpdesk tickets, deploying workstations, and assisting with network infrastructure upgrades. Collaborated with the system admin team to improve reliability and user support response times.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Michelin Legacy Modernization",
    desc: "Capstone project focusing on migrating legacy COBOL mainframe systems to modern Java architecture using AWS Transform and cloud-native practices.",
    github: "https://github.com/Vincent66875", 
    img: "/projects/security-analyzer.png" // Update this image if you have a better one
  },
  {
    name: "Not Alone Online",
    desc: "An online adaptation of the Not Alone board game with multiplayer support using React, AWS DynamoDB, and API Gateway WebSockets.",
    github: "https://github.com/Vincent66875/not-alone",
    img: "/projects/not-alone.png"
  },
  {
    name: "System Security Log Analyzer",
    desc: "Developed a security tool to parse and analyze system logs, identifying potential threats and anomalies to improve proactive defense mechanisms.",
    github: "https://github.com/Vincent66875", 
    img: "/projects/task-manager.png"
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Available on Request",
    role: "",
    feedback: "References available upon request.",
  },
];

export const seoData: SEODataType = {
  title: "Vincent Hung | Software Engineer",
  description: greetings.description,
  author: "Rung-Shiang (Vincent) Hung",
  image: "https://avatars.githubusercontent.com/u/88233379?v=4", // Updated with your actual GitHub ID from previous context if available, or keep placeholder
  url: "https://vincent66875-portfolio.vercel.app",
  keywords: [
    "Vincent Hung",
    "Rung-Shiang Hung",
    "Clemson University",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
  ],
};