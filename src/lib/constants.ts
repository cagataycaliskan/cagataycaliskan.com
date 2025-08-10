// Experience data structure
export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | "Present";
  duration: string;
  technologies: string[];
  achievements: string[];
  logo?: string;
  location?: string;
}

// Projects data structure
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  category: string;
  status?: "completed" | "in-progress" | "coming-soon";
}

// Tech Stack data structure
export interface TechStack {
  category: "Frontend" | "Backend" | "Tools" | "Learning";
  items: {
    name: string;
    icon: string;
    proficiency: number; // 0-100
    experience: string; // "2 years"
  }[];
}

// Certificate data structure
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl?: string;
  skills: string[];
}

// Helper function to calculate duration
function calculateExperienceDuration(startDate: Date, endDate: Date | "Present"): string {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} ay`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} yıl`;
  }
  
  return `${years} yıl ${remainingMonths} ay`;
}

// Real experience data
export const experienceData: Experience[] = [
  {
    company: "Net Call Center",
    position: "Frontend Developer",
    startDate: new Date("2025-03-01"),
    endDate: "Present",
    duration: calculateExperienceDuration(new Date("2025-03-01"), "Present"),
    technologies: ["React", "Next.js", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "WebSocket", "SignalR", "JSSIP", "DevExtreme"],
    achievements: [
      "netCallCenter.achievement1",
      "netCallCenter.achievement2",
      "netCallCenter.achievement3",
      "netCallCenter.achievement4",
      "netCallCenter.achievement5",
      "netCallCenter.achievement6",
      "netCallCenter.achievement7"
    ],
    location: "Türkiye"
  },
  {
    company: "Diatics",
    position: "Frontend Developer",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2025-03-15"),
    duration: calculateExperienceDuration(new Date("2023-06-01"), new Date("2025-03-15")),
    technologies: ["JavaScript", "React", "HTML", "CSS", "Git", "DevExtreme", "Bootstrap"],
    achievements: [
      "diatics.achievement1",
      "diatics.achievement2", 
      "diatics.achievement3",
      "diatics.achievement4",
      "diatics.achievement5",
      "diatics.achievement6",
      "diatics.achievement7",
      "diatics.achievement8",
      "diatics.achievement9"
    ],
    location: "Türkiye"
  }
];

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js 14 and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/cagataycaliskan",
    liveUrl: "https://cagataycaliskan.com",
    image: "/images/cagataycaliskan.png",
    featured: true,
    category: "Personal",
    status: "completed"
  },
  // Add more projects as needed
];

export const techStackData: TechStack[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: "javascript",
        proficiency: 85,
        experience: "2+ yıl"
      },
      {
        name: "TypeScript", 
        icon: "typescript",
        proficiency: 75,
        experience: "1+ yıl"
      },
      {
        name: "React",
        icon: "react",
        proficiency: 90,
        experience: "2+ yıl"
      },
      {
        name: "Next.js",
        icon: "nextjs",
        proficiency: 80,
        experience: "1+ yıl"
      },
      {
        name: "Flutter",
        icon: "flutter",
        proficiency: 60,
        experience: "6+ ay"
      },
      {
        name: "HTML",
        icon: "html",
        proficiency: 95,
        experience: "2+ yıl"
      },
      {
        name: "CSS",
        icon: "css",
        proficiency: 90,
        experience: "2+ yıl"
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
        proficiency: 90,
        experience: "1+ yıl"
      }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: "git",
        proficiency: 85,
        experience: "2+ yıl"
      },
      {
        name: "Figma",
        icon: "figma",
        proficiency: 70,
        experience: "1+ yıl"
      },
      {
        name: "VS Code",
        icon: "vscode",
        proficiency: 95,
        experience: "2+ yıl"
      },
      {
        name: "Cursor",
        icon: "cursor",
        proficiency: 80,
        experience: "6+ ay"
      },
      {
        name: "Claude Code",
        icon: "claude",
        proficiency: 75,
        experience: "3+ ay"
      }
    ]
  },
  {
    category: "Learning",
    items: [
      {
        name: "Go",
        icon: "go",
        proficiency: 30,
        experience: "Learning"
      },
      {
        name: "Node.js",
        icon: "nodejs",
        proficiency: 40,
        experience: "Learning"
      }
    ]
  }
];

export const certificatesData: Certificate[] = [
  // This will be populated with existing certificate data
];