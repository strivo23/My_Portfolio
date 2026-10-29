export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  stack: string[];
  problemStatement: string;
  description: string;
  technicalContribution: string;
  highlight: string;
  githubUrl: string;
  demoUrl?: string | null;
  statusText?: string;
  previewType: 'leadflow' | 'care-connect' | 'transit-rescue' | 'api-platform';
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation: string;
  cgpa: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  detail: string;
  tag: string;
}

export const portfolioData = {
  profile: {
    name: "Chandrakanth Reddy Y",
    initials: "CR",
    role: "Software Developer | Python & Full-Stack Developer",
    badge: "COMPUTER SCIENCE STUDENT · CLASS OF 2027",
    headline: "Hi, I'm Chandrakanth. I build software that solves real problems.",
    bio: "I'm a computer science student focused on Python, backend development, and full-stack applications. I enjoy turning practical problems into useful, maintainable software.",
    aboutParagraphs: [
      "I am an undergraduate Computer Science and Engineering student at SRM Institute of Science and Technology, Tiruchirappalli, specializing in Cybersecurity. My primary engineering focus revolves around Python backend architecture, relational database design, and end-to-end full-stack web development.",
      "Rather than chasing fleeting development hype, I prioritize code readability, predictable data flow, clean REST interfaces, and practical software design. My everyday toolkit centers around Python, Django, PostgreSQL, SQL, and React.",
      "I am driven by steady consistency and active problem-solving. Whether configuring relational schema constraints or building resilient API endpoints, I enjoy understanding how software behaves under real-world constraints and learning from hands-on implementation."
    ],
    availability: {
      status: "Available",
      label: "Open to internships and graduate opportunities"
    },
    careerObjective: "Seeking software development internships and entry-level opportunities where I can build reliable applications and solve practical engineering problems.",
    contact: {
      email: "chandrakanthreddy.dev@gmail.com",
      emailPlaceholder: "chandrakanthreddy.dev@gmail.com",
      github: "https://github.com/strivo23",
      linkedin: "https://www.linkedin.com/in/chandrakanth-reddy-dev/",
      linkedinPlaceholder: "https://www.linkedin.com/in/chandrakanth-reddy-dev/",
      resumeFileName: "Chandrakanth_Reddy_Resume.pdf",
      resumeAvailable: false // Set to true once actual resume.pdf is placed in public/
    }
  },

  projects: [
    {
      id: "care-connect",
      number: "01",
      title: "CareConnect",
      subtitle: "Crisis & Emergency Relief Coordination Application",
      stack: ["Python", "Django", "React", "SQL"],
      problemStatement: "During urgent neighborhood emergencies, localized aid requests and volunteer coordination are often fragmented across disparate chat channels, delaying critical response times.",
      description: "A community-focused application designed to connect people with emergency response resources, verified local assistance, and real-time relief coordination.",
      technicalContribution: "Developed the full-stack architecture using Django and React. Designed relational database schemas to track urgent requests, inventory, and responder status. Built RESTful API endpoints for incident logging and created a synchronized frontend view for swift community updates.",
      highlight: "Full-stack application development and database integration.",
      githubUrl: "https://github.com/strivo23/CareConnect",
      demoUrl: null,
      statusText: "Active Repository",
      previewType: "care-connect"
    },
    {
      id: "leadflow",
      number: "02",
      title: "LeadFlow",
      subtitle: "Full-Stack Lead Management & Campaign Automation Platform",
      stack: ["React.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "REST APIs"],
      problemStatement: "Managing incoming client leads and multi-stage outreach campaigns often suffers from scattered data, untracked follow-ups, and inconsistent pipeline progression.",
      description: "A full-stack lead management platform designed to organize prospective client pipelines, execute campaigns, and track lead conversion statuses in real time.",
      technicalContribution: "Architected full-stack application with Prisma ORM and PostgreSQL database schema. Implemented RESTful campaign management endpoints, lead progression lifecycle state machines, and a responsive React client interface with real-time campaign status dashboards.",
      highlight: "Full-stack schema modeling, campaign tracking, and relational database management.",
      githubUrl: "https://github.com/strivo23/LeadFlow",
      demoUrl: null,
      statusText: "Active Repository",
      previewType: "leadflow"
    },
    {
      id: "transit-rescue-ai",
      number: "03",
      title: "TransitRescue AI",
      subtitle: "Travel Disruption Recovery & Alternative Routing Concept",
      stack: ["React.js", "Vite", "Python", "Django REST Framework", "PostgreSQL", "JWT"],
      problemStatement: "Unexpected transit disruptions leave commuters and travelers stranded with insufficient visibility into alternative connection routes and recovery options.",
      description: "An AI-powered travel disruption recovery platform concept designed to help users respond to travel disruptions and explore alternative recovery options.",
      technicalContribution: "Architected the backend with Django REST Framework backed by PostgreSQL. Implemented secure stateless JWT authentication. Structured modular routing services to evaluate disruption metrics and alternative pathways, paired with a responsive React/Vite user interface.",
      highlight: "REST API integration, authentication, and full-stack architecture.",
      githubUrl: "https://github.com/strivo23",
      demoUrl: null,
      statusText: "Architecture & Concept Prototype",
      previewType: "transit-rescue"
    },
    {
      id: "api-monitoring-platform",
      number: "04",
      title: "REST API Monitoring & Testing Platform",
      subtitle: "Backend Reliability & Automated Test Validation Suite",
      stack: ["Python", "REST APIs", "SQL", "Automated Testing"],
      problemStatement: "Distributed API endpoints frequently suffer from silent payload drifts, schema changes, and response latency spikes that bypass traditional manual testing checks.",
      description: "A testing platform designed to validate API responses, verify database consistency, execute automated tests, and produce test reports.",
      technicalContribution: "Built an automated Python test suite that queries live REST endpoints, inspects response payloads against strict contracts, validates state changes against database tables via SQL, and generates structured test diagnostics.",
      highlight: "API testing, database validation, error reporting, and backend reliability.",
      githubUrl: "https://github.com/strivo23",
      demoUrl: null,
      statusText: "Testing Tooling & Harness",
      previewType: "api-platform"
    }
  ] as ProjectItem[],

  skills: {
    categories: [
      {
        category: "Languages",
        description: "Core programming & querying languages",
        skills: ["Python", "Java", "JavaScript", "SQL"]
      },
      {
        category: "Backend",
        description: "Server architecture & API development",
        skills: ["Django", "Django REST Framework", "REST APIs"]
      },
      {
        category: "Frontend",
        description: "Modern component-driven web interfaces",
        skills: ["React.js", "HTML5", "CSS3"]
      },
      {
        category: "Databases",
        description: "Relational persistence & query modeling",
        skills: ["PostgreSQL", "SQL"]
      },
      {
        category: "Tools & Workflow",
        description: "Version control & developer environment",
        skills: ["Git", "GitHub", "VS Code"]
      }
    ] as SkillCategory[],
    additionalInterests: [
      "Java development",
      "Backend engineering",
      "Data analytics",
      "AI-powered applications"
    ]
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Cybersecurity",
    institution: "SRM Institute of Science and Technology",
    campus: "Tiruchirappalli Campus",
    period: "2023 – 2027",
    expectedGraduation: "May 2027",
    cgpa: "8.7 / 10",
    coreFocus: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Python, Java)",
      "Database Management Systems (RDBMS & SQL)",
      "Operating Systems & Computer Networks",
      "Network Security & Cybersecurity Fundamentals",
      "Web Application Development & REST Architecture"
    ]
  } as EducationItem & { campus: string; coreFocus: string[] },

  achievements: {
    enabled: true, // Set to false to hide this section if preferred
    items: [
      {
        title: "Academic Standing — 8.7/10 CGPA",
        organization: "SRM Institute of Science and Technology",
        detail: "Maintained a strong academic record across computer science fundamentals, system architecture, and security coursework.",
        tag: "Academic"
      },
      {
        title: "Independent Full-Stack Project Development",
        organization: "Self-Directed Engineering",
        detail: "Designed and built full-stack applications integrating Django, React, and PostgreSQL with a focus on database integrity and modular API design.",
        tag: "Projects"
      },
      {
        title: "Continuous Technical Exploration",
        organization: "Ongoing Competency",
        detail: "Expanding knowledge into enterprise Java development, automated testing harnesses, and AI application workflows.",
        tag: "Learning"
      }
    ] as AchievementItem[]
  }
};
