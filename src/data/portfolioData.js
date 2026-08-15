export const personalInfo = {
  name: "Anusha Singh",
  title: "B.Tech CSE • AI/ML",
  institution: "IILM University",
  headline: "AI/ML Engineer in training focused on building practical systems at the intersection of Artificial Intelligence and software engineering.",
  subheadline: "Spanning Voice AI, Generative AI, Computer Vision, and Full-Stack Development with a focus on real-time conversational systems.",
  status: "Available for Summer 2026 Engineering Internships",
  location: "India",
  github: "https://github.com/ianusha08",
  linkedin: "https://www.linkedin.com/in/anushasingh18/",
  email: "ianushaa09@gmail.com",
  twitter: "https://x.com/imanusha09",
  resumeUrl: "#resume-modal",
  aboutPhilosophy: [
    {
      title: "Building by Shipping",
      description: "Learning the deepest principles of AI/ML and software engineering by actually architecting and shipping working projects."
    },
    {
      title: "Mathematical Foundations",
      description: "Grounding machine learning and data science work in core linear algebra, probability, and algorithmic problem solving."
    },
    {
      title: "Open Source Collaboration",
      description: "Contributing to developer communities, valuing clear documentation, and building transparent software."
    }
  ]
};

export const projectsData = [
  {
    id: "saksham",
    title: "Saksham",
    category: "Voice AI & Real-time Systems",
    tagline: "Ultra-low latency conversational AI voice agent with real-time audio streaming",
    problem: "Conventional voice pipelines introduce noticeable latency between speech recognition, LLM reasoning, and speech synthesis, resulting in unnatural pauses and fragmented conversations.",
    solution: "Built an end-to-end real-time voice pipeline using LiveKit WebRTC for bidirectional audio, Murf for speech synthesis, and LLMs for conversational reasoning.",
    technologies: ["Python", "LiveKit", "Murf AI", "FastAPI", "WebSockets", "AsyncIO", "LLMs"],
    impact: "Achieved sub-second conversational turnaround with responsive audio streaming and voice activity detection.",
    role: "Developer",
    github: "https://github.com/ianusha08/murf-livekit-starter",
    liveDemo: "",
    featured: true,
    highlights: [
      "Built bidirectional low-latency audio streaming over LiveKit WebRTC.",
      "Integrated Murf TTS for real-time, expressive speech generation.",
      "Implemented asynchronous interruption handling for natural mid-response turn-taking."
    ]
  },
  {
    id: "nuurai",
    title: "NUURAI",
    category: "Generative AI • Intelligent Systems",
    tagline: "AI-powered assistant designed for contextual conversations, personalized interactions, and intelligent assistance.",
    problem: "Most AI assistants treat each interaction as an isolated prompt, limiting continuity, personalization, and useful context across conversations.",
    solution: "Built NUURAI as a context-aware AI platform combining conversational AI, persistent memory, streaming responses, and a responsive interface into a unified experience.",
    technologies: ["React", "TypeScript", "Node.js", "Python", "OpenAI", "Gemini", "Tailwind CSS"],
    impact: "Delivered an intuitive digital assistant interface with real-time markdown rendering and prompt caching.",
    role: "Full-Stack AI Developer",
    github: "https://github.com/ianusha08/nuurai",
    liveDemo: "",
    featured: true,
    highlights: [
      "Implemented streaming LLM responses for responsive real-time interaction.",
      "Built persistent conversation state to maintain context across sessions.",
      "Integrated multiple AI models and APIs through a unified application layer.",
      "Designed a focused interface around conversational interaction and usability."
    ]
  },
  {
    id: "restricted-area-intrusion-detection",
    title: "Restricted Area Intrusion Detection",
    category: "Computer Vision • Real-Time Detection",
    tagline: "Real-time computer vision system for detecting unauthorized entry into defined restricted zones.",
    problem: "Manual monitoring of restricted areas is unreliable at scale, making automated detection and immediate visual alerts essential for real-time surveillance.",
    solution: "Built a computer vision pipeline that processes video frames, detects subjects within monitored scenes, and evaluates their position against predefined restricted regions to identify potential intrusions.",
    technologies: ["Python", "OpenCV", "Computer Vision", "NumPy", "Machine Learning"],
    impact: "Automated real-time visual alerts and zone monitoring across video feeds.",
    role: "AI/ML Developer",
    github: "https://github.com/ianusha08/restricted-area-intrusion-detection",
    liveDemo: "",
    featured: true,
    highlights: [
      "Processed video streams frame-by-frame using OpenCV.",
      "Defined restricted regions using region-of-interest geometry.",
      "Evaluated detected subjects against zone boundaries to identify intrusions.",
      "Generated real-time visual feedback when unauthorized entry was detected."
    ]
  },
  {
    id: "ets-platform",
    title: "ETS Platform",
    category: "Full Stack & Systems",
    tagline: "Enterprise tracking and dispatch scheduling management platform",
    problem: "Logistics coordinators face data fragmentation and manual overhead when scheduling dispatches and tracking fleet milestones in real time.",
    solution: "Architected a full-stack tracking dashboard with live status updates, structured scheduling queues, and role-based access management.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    impact: "Centralized fleet operational workflows into a unified, responsive dashboard.",
    role: "Full Stack Engineer",
    github: "https://github.com/ianusha08/ets-platform",
    liveDemo: "",
    featured: true,
    highlights: [
      "Designed responsive data tables with instant filtering, search, and sorting.",
      "Implemented RESTful API endpoints for schedule management and status tracking.",
      "Created intuitive modal workflows for quick dispatch creation."
    ]
  }
];

export const experienceData = [
  {
    period: "2025",
    role: "Python Development Intern",
    organization: "QSkill",
    type: "Internship",
    description: "Developed and optimized Python backend scripts, automated data processing tasks, and built modular utilities.",
    achievements: [
      "Constructed modular Python scripts to parse, clean, and structure raw dataset feeds.",
      "Collaborated on backend API endpoints and wrote unit tests for core validation logic."
    ]
  },
  {
    period: "2024 — 2025",
    role: "Voice AI Challenge / Project Developer",
    organization: "Voice for Bharat",
    type: "Project / AI Challenge",
    description: "Participated in developing voice AI workflows focused on Indian language accessibility, voice prompts, and real-time audio interaction.",
    achievements: [
      "Prototyped speech recognition and conversational response workflows for multilingual contexts.",
      "Experimented with prompt engineering to reduce latency and improve intent detection."
    ]
  },
  {
    period: "2024",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC)",
    type: "Open Source",
    description: "Actively contributed to open-source repositories under the GSSoC program, focusing on frontend improvements, bug fixes, and documentation.",
    achievements: [
      "Submitted merged pull requests for UI component enhancements and responsive fixes.",
      "Collaborated with project maintainers and participated in community code reviews."
    ]
  },
  {
    period: "2023 — 2027",
    role: "B.Tech in Computer Science and Engineering (AI/ML)",
    organization: "IILM University",
    type: "Education",
    description: "Undergraduate student specializing in Artificial Intelligence & Machine Learning. Building strong foundations in algorithms, mathematical foundations, and software development.",
    achievements: [
      "Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Linear Algebra, DBMS, Operating Systems.",
      "Active participant in technical hackathons and competitive programming."
    ]
  }
];

export const achievementsData = [
  {
    title: "ICPC Algo Queen 2023",
    rank: "14th Rank Nationwide",
    period: "2023",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
    description: "Secured 14th rank nationally in ICPC Algo Queen 2023, a competitive programming challenge focused on algorithmic problem-solving. The experience strengthened my ability to approach complex problems systematically and work under competitive constraints."
  }
];

export const openSourceData = [
  {
    organization: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    year: "2024",
    description: "Contributed features, accessibility improvements, and bug fixes across community web projects during the summer program.",
    tags: ["React", "JavaScript", "Git", "Community"]
  },
  {
    organization: "Developer Community Repositories",
    role: "Contributor & Maintainer",
    year: "2024 — Present",
    description: "Publishing and maintaining personal open-source projects including voice agents, ML classification notebooks, and developer utilities.",
    tags: ["Python", "AI/ML", "React", "Open Source"]
  }
];

export const toolboxData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Django", "Node.js", "Express", "FastAPI", "REST APIs"]
  },
  {
    category: "AI / ML",
    skills: ["Machine Learning", "Generative AI", "LLMs", "PyTorch", "Computer Vision", "Scikit-Learn", "OpenCV", "Pandas & NumPy"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Postman", "Vite"]
  }
];

export const learningJourneyData = [
  {
    topic: "Data Structures & Algorithms (DSA)",
    status: "Active Daily Rigor",
    focus: "Graphs, Trees, Dynamic Programming, and algorithmic problem solving."
  },
  {
    topic: "AI / Machine Learning & PyTorch",
    status: "Deepening Depth",
    focus: "Model architectures, transfer learning, computer vision, and evaluation pipelines."
  },
  {
    topic: "Generative AI & LLMs",
    status: "Active Building",
    focus: "RAG pipelines, context grounding, prompt engineering, and local model inference."
  },
  {
    topic: "Voice AI & Real-time Streaming",
    status: "Active Exploration",
    focus: "LiveKit WebRTC audio transport, STT/TTS latency optimization, and voice agents."
  },
  {
    topic: "Full-Stack Development",
    status: "Continuous Shipping",
    focus: "Next.js, Django, FastAPI backends, and responsive, accessible frontend design."
  },
  {
    topic: "Open Source & Software Fundamentals",
    status: "Community Engagement",
    focus: "Clean code practices, modular architectures, Git collaboration, and technical writing."
  }
];
