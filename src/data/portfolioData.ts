export interface Experience {
  company: string
  role: string
  duration: string
  highlights: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  link?: string
}

export interface PersonalProject {
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

/** Skills from CV - well versed & hands-on */
export const skills: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "NextJS",
  "Node.js",
  "Python",
  "FastAPI",
  "Flask",
  "Django",
  "Go",
  "Java",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "SASS",
  "GraphQL",
  "REST API",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Jenkins",
  "Git",
  "Cypress",
  "Jest",
  "Pytest",
  "OpenAI GPT-4o",
  "LangChain",
  "LangGraph",
  "Weaviate",
  "RAG",
  "RabbitMQ",
  "Kafka",
  "Twilio",
  "Prisma ORM",
  "Pulumi",
  "Agile",
  "VueJS",
  "C#",
  "ASP.NET",
  "Redisearch",
  "Celery",
  "NLP",
  "Reinforcement Learning",
  "Linear Regression",
]

export const experiences: Experience[] = [
  {
    company: "Suntist Labs",
    role: "Senior Software Engineer",
    duration: "Aug 2025 – Jan 2026",
    highlights: [
      "AI-driven valuation models for infrastructure risk pricing",
      "Monte Carlo simulations dashboards",
      "Reduced admin time by 70% using conversational AI",
      "Predictive settlement optimization engine",
      "HIPAA-compliant real-time collaboration systems",
    ],
  },
  {
    company: "BlitzyAI",
    role: "Senior Software Engineer",
    duration: "Jan 2025 – June 2025",
    highlights: [
      "Served 10,000+ users with 99.8% uptime",
      "Improved API response time by 30%",
      "Achieved 85% test coverage with Pytest",
      "Customized systems for 15+ enterprise clients",
    ],
  },
  {
    company: "Slyce.io GmbH",
    role: "Senior Software Engineer",
    duration: "July 2024 – Dec 2024",
    highlights: [
      "Marketing platform handling $1.5M+ monthly ad spend",
      "Integrated 12 major ad platforms",
      "Reduced manual workflow by 80%",
      "99.9% reliability cloud schedulers",
    ],
  },
  {
    company: "WeightliftingAI",
    role: "Senior Software Engineer",
    duration: "March 2024 – June 2024",
    highlights: [
      "Served 5,000+ fitness professionals",
      "95% Pytest coverage",
      "AI-powered test programs increasing engagement by 85%",
      "Conversational AI coach using LLMs",
    ],
  },
  {
    company: "3INSYS",
    role: "Full Stack Engineer",
    duration: "Aug 2023 – Feb 2024",
    highlights: [
      "Managed 25,000+ IoT devices",
      "$500K+ monthly transactions (Stripe & Concur)",
      "Containerized with Docker + Kubernetes",
      "Reduced crash rate from 2.1% to 0.3%",
    ],
  },
  {
    company: "Redkenko Health Tech",
    role: "SDE 2",
    duration: "Dec 2021 – July 2023",
    highlights: [
      "100,000+ patient healthcare platform",
      "$2M+ annual transactions",
      "RAG chatbot using GPT-4o + LangChain",
      "RabbitMQ real-time systems",
      "Reduced technical debt by 40%",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    duration: "July 2019 – Nov 2021",
    highlights: [
      "Platforms serving 1M+ global users",
      "Reduced API latency by 35%",
      "NEFT/RTGS integration ₹50Cr+ daily",
      "150+ documented APIs",
      "MFA authentication systems",
    ],
  },
  {
    company: "IITSCL",
    role: "Web Developer Intern",
    duration: "Jan 2018 – July 2018",
    highlights: ["Built API integration POCs", "Managed deployment cycle"],
  },
]

export const projects: Project[] = [
  {
    name: "Kenko Web App",
    description:
      "Engineered cart and payment gateway integration processing $2.5M+ annual transactions. LLM-powered chatbot with OpenAI GPT-4o and LangChain, RAG with Weaviate embeddings for contextual triage across 75K monthly assessments. Reusable component library with 150+ components.",
    tech: ["Node", "React", "Redux", "AWS", "Python", "FastAPI", "Flask", "Jenkins", "RabbitMQ", "TypeScript", "NextJS", "MongoDB", "Mongoose", "JavaScript", "Docker", "Kubernetes", "AWS Lambda", "CI/CD", "Tailwind CSS", "Azure", "OpenAI GPT-4o", "LangChain", "LangGraph", "Weaviate", "RAG", "Redis"],
    link: "https://kenkohealth.in",
  },
  {
    name: "Kenko Employee Portal",
    description:
      "Architected from scratch serving 25,000+ corporate employees across 150+ partner companies. Conversational AI for employee health ticketing with entity extraction (spaCy), MongoDB vector search. Dual authentication with 99.5% login success rate.",
    tech: ["Node", "React", "Redux", "AWS", "Jenkins", "RabbitMQ", "Python", "FastAPI", "Flask", "TypeScript", "NextJS", "JavaScript", "Docker", "Kubernetes", "AWS Lambda", "CI/CD", "Tailwind", "Azure", "OpenAI GPT-4o", "LangChain", "Anthropic", "MongoDB", "Redis"],
    link: "https://employeeportal.kenkohealth.in",
  },
  {
    name: "Kenko Corporate App",
    description:
      "B2B platform serving 300+ corporate clients with $1.8M+ ARR. NLP engine for B2B quiz/chat using Hugging Face and LangGraph. Document parsing handling 10,000+ spreadsheets monthly with 99.2% parsing accuracy. Component library with 200+ reusable elements.",
    tech: ["Node", "React", "Redux", "AWS", "Jenkins", "RabbitMQ", "TypeScript", "NextJS", "JavaScript", "Python", "FastAPI", "Flask", "Docker", "Kubernetes", "AWS Lambda", "CI/CD", "Tailwind", "Azure", "OpenAI GPT-4o", "LangChain", "LangGraph", "Redis"],
    link: "https://corporate.kenkohealth.in",
  },
  {
    name: "Kenko HR Portal",
    description:
      "Medical reimbursements platform processing ₹15Cr+ annual claims for 40,000+ employees. Hospitalization benefits covering 150+ hospitals with 24/7 claim processing. OpenAI APIs with RAG for entity extraction; RabbitMQ for real-time CRM-like pushes.",
    tech: ["Node", "React", "Redux", "AWS", "Jenkins", "RabbitMQ", "Tailwind", "TypeScript", "NextJS", "JavaScript", "Docker", "Kubernetes", "AWS Lambda", "CI/CD", "Azure", "Python", "FastAPI", "Flask", "OpenAI GPT-4o", "LangChain", "LangGraph", "RAG", "Redis"],
    link: "https://hrportal.kenkohealth.in/#/login",
  },
  {
    name: "TCS Digitate",
    description:
      "Enterprise solution serving 500+ global clients with $50M+ platform valuation. Redux state management, 120+ reusable components, 150+ documented Python API endpoints. NLP categorization for 100K concurrent users with 99.9% uptime.",
    tech: ["Java", "MySQL", "SQS", "PostgreSQL", "Node", "Python", "Flask", "FastAPI", "React", "Jenkins", "TypeScript", "NextJS", "JavaScript", "MongoDB", "Mongoose", "SASS", "Django", "Azure", "OpenAI GPT-4o", "LangChain", "LangGraph", "Redis"],
    link: "https://digitate.com",
  },
  {
    name: "TCS Mastercraft",
    description:
      "250+ feature specifications across 8 product modules. HTTP/2 optimization for 45% faster load times. 95+ reusable components with 90% test coverage. Redis caching for sub-200ms latency; vector-like search across 250 feature modules.",
    tech: ["Java", "MySQL", "RabbitMQ", "PostgreSQL", "Node", "Flask", "FastAPI", "Jenkins", "TypeScript", "Python", "C#", "ASP.NET", "Azure", "Redis", "Pinecone", "Weaviate", "Linear Regression", "Reinforcement Learning"],
    link: "https://www.tcs.com/what-we-do/products-platforms/tcs-mastercraft",
  },
  {
    name: "EVES Product",
    description:
      "B2B PaaS for energy conservation controlling 1,200+ EV charging stations across 60+ cities. Cypress test suites with 92% automation coverage. Permission system managing 5,000+ site administrators with 15+ role-based access levels. Predictive ML (Linear Regression) with RabbitMQ updates.",
    tech: ["Cypress", "Docker", "Node", "React", "TypeScript", "NextJS", "JavaScript", "RabbitMQ", "SQS", "Kubernetes", "AWS Lambda", "CI/CD", "SASS", "Bitbucket", "Python", "FastAPI", "Flask", "Django", "Azure", "GraphQL", "Redis", "Linear Regression", "Reinforcement Learning", "Pinecone", "Weaviate", "NLP", "OpenAI", "LangGraph"],
    link: "https://bldgmgmt.demo.eves360.ai:3000/#/login",
  },
  {
    name: "Alpha Law",
    description:
      "AI case management for personal injury law firms: document generation, client intake, settlement workflows. Evidence analysis and predictive settlement optimization; HIPAA-compliant security. Real-time conversational AI with Twilio (STT/TTS via OpenAI Whisper/GPT-4o). Redis predictive caching for <200ms latency.",
    tech: ["Cypress", "Pytest", "Python", "Django", "FastAPI", "React", "TypeScript", "NextJS", "JavaScript", "Celery", "SQS", "Docker", "Kubernetes", "AWS Lambda", "CI/CD", "SASS", "Reinforcement Learning", "Linear Regression", "Weaviate", "OpenAI GPT-4o", "LangChain", "LangGraph", "Anthropic", "Twilio", "Redis"],
    link: "https://app.alphalaw.io/login",
  },
]

export const personalProjects: PersonalProject[] = [
  {
    name: "AI Resume Analyzer",
    description: "LLM-powered resume scoring system using RAG and embeddings (Weaviate). Intent classification and scoring automation.",
    tech: ["React", "TypeScript", "FastAPI", "OpenAI GPT-4o", "LangChain", "Weaviate", "RAG", "Docker"],
    github: "https://github.com/112schauhan/ai-resume-analyzer",
  },
  {
    name: "Real-time Chat App",
    description: "WebSocket-based scalable chat platform with Redis caching and real-time updates.",
    tech: ["React", "Node.js", "Redis", "Docker", "Web Sockets", "JavaScript"],
    github: "https://github.com/112schauhan/realtime-chat",
  },
  {
    name: "TMS Application",
    description: "AI-driven LLM Resume Analyzer with embeddings, vector search, and scoring for resume analysis and insights.",
    tech: ["LLM", "Embeddings", "Vector Search", "React", "Node.js", "TypeScript"],
    github: "https://github.com/112schauhan/tms-application",
  },
  {
    name: "Spreadsheet Application",
    description: "Web-based spreadsheet with formula entry, CSV import/export, and cloud status indicators—Excel-like functionality in the browser.",
    tech: ["JavaScript", "React", "CSV", "Formulas", "Web"],
    github: "https://github.com/112schauhan/spreadsheet-application",
  },
  {
    name: "Expense Tracker App",
    description: "Full-stack expense manager: register, login, add/edit/delete expenses, filter by date and category, with AI-powered insights. Node.js backend and Angular frontend.",
    tech: ["Node.js", "Angular", "REST API", "Authentication", "AI Insights"],
    github: "https://github.com/112schauhan/expense-tracker-app",
  },
  {
    name: "Workout App",
    description: "Fitness and workout tracking app: log exercises (sets, reps), manage routines, monitor progress, and view history. User authentication and progress tracking with optional AI insights for personalization.",
    tech: ["React", "Node.js", "REST API", "Authentication", "CRUD", "Progress Tracking"],
    github: "https://github.com/112schauhan/workout-app",
  },
]
