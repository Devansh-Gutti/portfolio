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

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const experiences = [
  {
    company: "NVIDIA",
    role: "Software Engineer — CUDA Safety Team",
    period: "Jul 2025 - Present",
    description:
      "Designing cross-VM AI inference infrastructure for safety-critical autonomous driving platforms. Building zero-copy shared-memory data paths and priority-based scheduling to enable GPU-accelerated perception workloads across mixed-criticality VMs. Co-inventor on a patent for inter-VM inference proxy architecture.",
    tech: ["C++", "CUDA", "TensorRT", "QNX", "Linux", "Python"],
  },
  {
    company: "NVIDIA",
    role: "SPRING Intern — OpenCL Driver Team",
    period: "Jan 2025 - Jul 2025",
    description:
      "Ramped up on CUDA and OpenCL internals, contributing to driver-level features while learning GPU programming from the ground up. Leveraged Gen AI tooling to accelerate onboarding and deepen understanding of low-level GPU architecture.",
    tech: ["C++", "CUDA", "OpenCL", "Python"],
  },
  {
    company: "Sensara Technologies",
    role: "Research Engineer — Aerospace & Defence",
    period: "Mar 2024 - Dec 2024",
    description:
      "Engineered deep learning cost estimation framework with Explainable AI dashboards (Shapley, DeepLift) for manufacturing process optimization. Co-authored a RAG-based XAI framework paper presented at ICAART 2025.",
    tech: ["Python", "TensorFlow", "React", "RAG", "LLMs", "Shapley", "DeepLift"],
  },
  {
    company: "E-commerce Startup",
    role: "Data Analyst Intern",
    period: "Jun 2023 - Aug 2023",
    description:
      "Built ETL pipeline on 150K rows integrating Magento and Viniculum APIs. Deployed unified analytics store on Zoho for real-time trend analysis.",
    tech: ["Python", "Pandas", "Postman", "Zoho Analytics"],
  },
  {
    company: "CIE, PES University",
    role: "Project Lead",
    period: "Jan 2023 - May 2023",
    description:
      "Led team from ideation to customer validation building an Extended Reality educational platform MVP.",
    tech: ["XR", "Prototyping", "Customer Discovery"],
  },
];

export const projects = [
  {
    title: "Explainable AI: A RAG-Based Framework for Model Interpretability",
    description:
      "Co-authored research paper presenting a Retrieval-Augmented Generation framework for model interpretability. Demonstrated across healthcare, finance, and manufacturing. Presented orally at ICAART 2025.",
    tech: ["RAG", "LLMs", "Shapley", "DeepLift", "Python"],
    github: "https://github.com/Devansh-Gutti",
  },
  {
    title: "Youtube Viralomics",
    description:
      "Curated dataset of 10,000 trending YouTube videos and developed a novel statistical framework for measuring virality.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "YouTube Data API"],
    github: "https://github.com/Devansh-Gutti",
  },
  {
    title: "CloudCommerce",
    description:
      "Microservices e-commerce platform with REST APIs, Docker/Kubernetes orchestration, and automated CI/CD via Jenkins.",
    tech: ["Docker", "Kubernetes", "Jenkins", "React", "MongoDB"],
    github: "https://github.com/Devansh-Gutti",
  },
  {
    title: "AttendAI",
    description:
      "Real-time facial recognition attendance system for educational institutions using OpenCV with MySQL backend.",
    tech: ["Python", "OpenCV", "MySQL", "Tkinter"],
    github: "https://github.com/Devansh-Gutti",
  },
];

export const skills = [
  "C++",
  "CUDA",
  "TensorRT",
  "QNX",
  "Python",
  "Claude Code",
  "Cursor",
  "Codex",
  "Java",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Scikit-Learn",
  "Docker",
  "Kubernetes",
  "AWS",
  "React",
  "Next.js",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "Neo4j",
  "Git",
  "Jenkins",
  "Pandas",
  "NumPy",
  "XGBoost",
];
