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
  "And yes — I love pushing the boundaries with vibe coding :)",
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Research & Publications", link: "#research" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
];

export const experiences = [
  {
    company: "NVIDIA",
    logo: "nvidia",
    url: "https://www.nvidia.com/",
    role: "Software Engineer — CUDA Safety Team",
    period: "Jan 2025 - Present",
    description:
      "Joined as a SPRING Intern on the OpenCL Driver team and transitioned to full-time on the CUDA Safety team. Building projects for safety-critical autonomous driving platforms.",
    details: [
      "As a software engineer at NVIDIA on the CUDA Safety team, I've been working on DriveOS platforms that power autonomous driving systems.",
      "Along the way I've gotten exposure to technologies like CUDA, OpenCL, TensorRT, and Docker while contributing to feature development, debugging, testing, and performance improvements across the stack.",
      "I've also had the opportunity to prototype new ideas, participate in design discussions, and contribute to design documentation for upcoming features and projects.",
    ],
    tech: ["C++", "CUDA", "TensorRT", "QNX", "Linux", "Python"],
  },
  {
    company: "Sensara Technologies",
    logo: null,
    logoText: "SE",
    logoColor: "#2563eb",
    url: "https://sansera.in/",
    role: "Research Engineer — Aerospace & Defence",
    period: "Mar 2024 - Dec 2024",
    description:
      "Engineered deep learning cost estimation framework with Explainable AI dashboards for manufacturing process optimization.",
    details: [
      "At Sensara Technologies, I worked as a Research Engineer looking at how predictive modelling could actually fit into real manufacturing workflows — from early cost estimation all the way through purchasing and production planning.",
      "I spent a lot of time working with manufacturing data, building ETL pipelines and experimenting with deep learning models to estimate costs across different phases of the process. One of the interesting parts was making these models understandable for engineers on the floor, so I built interactive React dashboards using SHAP and DeepLIFT to explain what was driving the predictions.",
      "Along the way, this work also led into some research around RAG-based Explainable AI systems, which eventually turned into a paper we presented at ICAART 2025.",
    ],
    tech: ["Python", "TensorFlow", "React", "RAG", "LLMs", "SHAP", "DeepLIFT"],
  },
  {
    company: "CompanyStore.io",
    logo: null,
    logoText: "CS",
    logoColor: "#dc2626",
    url: "https://www.companystore.io/",
    role: "Data Analyst Intern",
    period: "Jun 2023 - Aug 2023",
    description:
      "Built ETL pipeline on 150K rows integrating Magento and Viniculum APIs. Deployed unified analytics store on Zoho for real-time trend analysis.",
    details: [
      "I worked on bringing together data from different e-commerce systems to make it easier for teams to understand their sales performance.",
      "I built an ETL pipeline that integrated Magento and Viniculum datasets through APIs, testing and validating the data flows along the way using Postman. The goal was to consolidate fragmented operational data into a single place where it could actually be used.",
      "I then deployed a unified data store on Zoho Analytics and built custom dashboards that visualized key sales KPIs, helping the client track trends and make more informed decisions.",
    ],
    tech: ["Python", "Pandas", "Postman", "Zoho Analytics"],
  },
];

export const research = [
  {
    title: "Prediction of Post-Stroke Vascular Events: A Novel Two-Stage Machine Learning Model Integrating Platelet Function and Clinical Data",
    venue: "Under Review",
    year: 2025,
    status: "Submitted" as const,
    abstract:
      "Had the opportunity to work with multiple faculty members of PES University and doctors to develop a novel two-stage ML model integrating AA-induced platelet aggregation, serum biomarkers, and clinical variables to predict recurrent vascular events after ischemic stroke. Uses Random Forest regression and classification with GAN-based class balancing, with interpretability via SHAP and LIME.",
  },
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
    venue: "IEEE ICDDS 2024",
    year: 2024,
    status: "Published" as const,
    abstract:
      "Develops a unique 'viralomics' framework to measure virality using 10,000 trending YouTube videos from Indian creators. Employs statistical techniques for feature elimination, regression analysis, and Particle Swarm Optimization to derive a virality score achieving R² of 0.913 and MSE of 0.0020, validated through a two-step process.",
    link: "https://ieeexplore.ieee.org/document/10910637",
  },
];

export const education = [
  {
    institution: "PES University",
    degree: "B.Tech Computer Science Engineering",
    period: "Sep 2021 – Jun 2025",
    grade: "CGPA: 8.71",
    highlights: [
      "MRD Scholarship — Awarded to the top 20% of students based on academic performance.",
      "Teaching Assistant — Centre of Innovation and Entrepreneurship. Mentored student teams and supported entrepreneurship programs focused on product development and innovation.",
      "Entrepreneurship & Innovation — Collaboratively led a team through ideation, prototyping, and customer discovery to build an Extended Reality educational platform, developing and validating a Minimum Viable Product (MVP) through user feedback.",
      "Leadership & Events — Event Lead for E-Summit and Maaya (2023, 2024), organizing entrepreneurship and innovation events and interacting with founders, investors, and student builders. Also actively participated in hackathons and coding competitions across campus.",
      "Coursework — OS, DSA, Compiler Design, Databases, Cloud Computing, ML/AI, Big Data (Kafka, Spark).",
    ],
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
      { name: "Codex", icon: null },
    ],
  },
  {
    category: "Platforms",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Unix", icon: null },
      { name: "AWS", icon: null },
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
