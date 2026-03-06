export const siteConfig = {
  name: "Devansh Guttikonda",
  title: "Software Engineer @ NVIDIA",
  tagline:
    "Building safety-critical AI inference infrastructure for autonomous driving — prototype to production, every time",
  email: "devanshguttikonda@gmail.com",
  github: "https://github.com/Devansh-Gutti",
  linkedin: "https://www.linkedin.com/in/devansh-guttikonda-234360265/",
  resumeUrl: "/DevanshG.pdf",
};

export const heroFacts = [
  "Thanks for stopping by — welcome to my digital space!",
  "You'll find me working across GPU platforms, accelerated computing, and safety-critical software.",
  "And yes — I love pushing the boundaries with vibe coding :).",
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Research", link: "#research" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
];

export const experiences = [
  {
    company: "NVIDIA",
    role: "Software Engineer — CUDA Safety Team",
    period: "Jan 2025 - Present",
    description:
      "Joined as a SPRING Intern on the OpenCL Driver team and transitioned to full-time on the CUDA Safety team. Building cross-VM AI inference infrastructure for safety-critical autonomous driving platforms.",
    details: [
      "Designed zero-copy shared-memory data paths and priority-based scheduling for GPU-accelerated perception workloads across mixed-criticality VMs",
      "Co-inventor on a patent for inter-VM inference proxy architecture with nanosecond latency profiling",
      "Leveraged Gen AI tooling to rapidly onboard to CUDA and OpenCL internals during the SPRING internship",
    ],
    tech: ["C++", "CUDA", "TensorRT", "QNX", "Linux", "Python"],
  },
  {
    company: "Sensara Technologies",
    role: "Research Engineer — Aerospace & Defence",
    period: "Mar 2024 - Dec 2024",
    description:
      "Engineered deep learning cost estimation framework with Explainable AI dashboards for manufacturing process optimization.",
    details: [
      "Executed ETL on 10,000 rows of raw material data, building a deep learning framework for multi-phase cost estimation",
      "Designed interactive ReactJS dashboards powered by Shapley and DeepLift for explainable decision-making",
      "Co-authored a RAG-based Explainable AI framework paper, presented orally at ICAART 2025",
    ],
    tech: ["Python", "TensorFlow", "React", "RAG", "LLMs", "Shapley", "DeepLift"],
  },
  {
    company: "E-commerce Startup",
    role: "Data Analyst Intern",
    period: "Jun 2023 - Aug 2023",
    description:
      "Built ETL pipeline on 150K rows integrating Magento and Viniculum APIs. Deployed unified analytics store on Zoho for real-time trend analysis.",
    details: [
      "Developed an ETL pipeline integrating Magento and Viniculum datasets through APIs, with testing via Postman",
      "Deployed a unified data store on Zoho Analytics for real-time sales trend analysis",
      "Built custom dashboards visualizing sales KPIs tailored to client-specific requirements",
    ],
    tech: ["Python", "Pandas", "Postman", "Zoho Analytics"],
  },
];

export const research = [
  {
    title: "Explainable AI: A Retrieval-Augmented Generation Based Framework for Model Interpretability",
    venue: "ICAART 2025",
    year: 2025,
    status: "Published" as const,
    abstract:
      "Introduces a novel RAG-based framework leveraging Large Language Models and domain-specific knowledge bases to provide clear, interactive explanations of model outputs. Demonstrated across healthcare, finance, and manufacturing, offering a scalable solution for making ML/DL systems more trustworthy and accessible for non-technical users.",
    link: "https://www.insticc.org/node/TechnicalProgram/icaart/2025/presentationDetails/132413",
  },
  {
    title: "YouTube Viralomics: A Scoring Framework by Analyzing Engagement Metrics in the Indian Context",
    venue: "Under Review",
    year: 2024,
    status: "Submitted" as const,
    abstract:
      "Develops a unique 'viralomics' framework to measure virality using 10,000 trending YouTube videos from Indian creators. Employs statistical techniques for feature elimination, regression analysis, and Particle Swarm Optimization to derive a virality score achieving R² of 0.913 and MSE of 0.0020, validated through a two-step process.",
  },
];

export const education = [
  {
    institution: "PES University",
    degree: "B.Tech Computer Science Engineering",
    period: "Sep 2021 - Jun 2025",
    grade: "CGPA: 8.50",
    highlights: [
      "MRD Scholarship — Awarded to the top 20% of students",
      "Teaching Assistant — Centre of Innovation and Entrepreneurship",
      "Event Lead — Esummit, Maaya '23 and '24",
    ],
  },
  {
    institution: "Gear Innovative International School",
    degree: "CBSE Senior Secondary",
    period: "Jun 2019 - Jun 2021",
    grade: "Class 12: 88% | Class 10: 91.6%",
    highlights: [],
  },
];

export interface TechItem {
  name: string;
  icon: string | null;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const technologies: TechCategory[] = [
  {
    category: "Technologies",
    items: [
      { name: "CUDA", icon: "nvidia" },
      { name: "OpenCL", icon: null },
      { name: "TensorRT", icon: null },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "openjdk" },
      { name: "SQL", icon: null },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Django", icon: "django" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Keras", icon: "keras" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Cursor", icon: null },
      { name: "Claude Code", icon: "anthropic" },
      { name: "Codex", icon: "openai" },
    ],
  },
  {
    category: "Platforms",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Unix", icon: null },
      { name: "AWS", icon: "amazonwebservices" },
    ],
  },
];

export const projects = [
  {
    title: "CloudCommerce",
    description:
      "Microservices e-commerce platform with REST APIs, Docker/Kubernetes orchestration, and automated CI/CD via Jenkins.",
    details: [
      "Developed REST APIs for user, product, and order management modules",
      "Containerized microservices with Docker and orchestrated with Kubernetes for scalable deployment",
      "Automated CI/CD pipeline with Jenkins and Git for seamless integration",
    ],
    tech: ["Docker", "Kubernetes", "Jenkins", "React", "MongoDB"],
    github: "https://github.com/Devansh-Gutti",
  },
  {
    title: "AttendAI",
    description:
      "Real-time facial recognition attendance system for educational institutions using OpenCV with MySQL backend.",
    details: [
      "Implemented real-time facial recognition using OpenCV for accurate attendance tracking",
      "Integrated MySQL for database management and Tkinter for a user-friendly interface",
      "Designed for educational institutions to automate attendance logging",
    ],
    tech: ["Python", "OpenCV", "MySQL", "Tkinter"],
    github: "https://github.com/Devansh-Gutti",
  },
];
