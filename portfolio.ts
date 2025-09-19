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
    "I'm a Computer Science student at Clemson University and an aspiring software/cloud engineer. I enjoy building scalable, inclusive applications with React, Next.js, AWS, and FastAPI. I have hands-on experience in IT operations, cloud backend development, and accessible UI design, and I'm always looking to learn and take on new challenges.",
  resumeLink: "/resume_.pdf", // Add your resume link here
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
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Developing responsive web apps with React and TypeScript"),
        emoji("⚡ Designing REST APIs and backend services with FastAPI and Node.js"),
        emoji("⚡ Implementing real-time synchronized features using WebSockets and cloud databases"),
        emoji("⚡ Deploying scalable, serverless applications on AWS"),
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
          skillName: "FastAPI",
          iconifyTag: "logos:fastapi-icon",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
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
  { Stack: "Frontend/Design", progressPercentage: "80" },
  { Stack: "Backend", progressPercentage: "85" },
  { Stack: "Programming", progressPercentage: "90" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Clemson University",
    subHeader: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    duration: "August 2021 - May 2026",
    grade: "GPA: 3.58/4.00 | Dean’s List",
    desc: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "IT Intern",
    company: "—",
    companyLogo: "/img/icons/common/company.png",
    date: "2024 - Present",
    desc: "Handled support tickets, performed switch configuration and UPS maintenance, and contributed to improving IT infrastructure reliability.",
  },
  {
    role: "Zonal Architecture Testbed Research Assistant",
    company: "Clemson Creative Inquiry",
    companyLogo: "/img/icons/common/university.png",
    date: "Aug 2025 - Present",
    desc: "Conducted graduate research to configure and monitor automotive zonal network simulations. Implemented embedded software components for low-cost computers simulating ECUs. Supported topology analysis and security protocol testing for next-generation in-vehicle networks.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Not Alone Online",
    desc: "An online adaptation of the Not Alone board game with multiplayer support using React, AWS DynamoDB, and API Gateway WebSockets.",
    github: "https://github.com/Vincent66875/not-alone",
    img: "/projects/not-alone.png"
  },
  {
    name: "Collaborative Task Management Tool",
    desc: "A React + TypeScript application with Firebase integration and drag-and-drop functionality for managing tasks across boards.",
    github: "https://github.com/Vincent66875", // update with correct repo
    img: "/projects/security-analyzer.png"
  },
  {
    name: "Job Helper Tool",
    desc: "Cloud-native job application tracker built with FastAPI and DynamoDB, designed to assist students in organizing applications.",
    github: "https://github.com/Vincent66875",
    img: "/projects/task-manager.png"
  },
];
export const feedbacks: FeedbackType[] = [
  {
    name: "Your Name",
    role: "Mentor / Colleague",
    feedback: "This is a placeholder feedback until I gather real testimonials.",
  },
];
export const seoData: SEODataType = {
  title: "Vincent Hung",
  description: greetings.description,
  author: "Rung-Shiang (Vincent) Hung",
  image: "https://avatars.githubusercontent.com/u/XXXXX?v=4", // replace with your GitHub avatar URL
  url: "https://vincent-portfolio.vercel.app",
  keywords: [
    "Vincent Hung",
    "Rung-Shiang Hung",
    "@Vincent66875",
    "Portfolio",
    "Software Engineer",
    "Cloud Engineer",
  ],
};
