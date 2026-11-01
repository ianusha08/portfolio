export const personalInfo = {
  name: "Anusha Singh",
  title: "AI/ML Engineer · Software Developer",
  institution: "IILM University",
  headline: "Building intelligent applications with machine learning.",
  subheadline: "Exploring machine learning, computer vision, and voice-based AI while building practical software applications that solve real-world problems.",
  status: "Available for Summer 2026 Engineering Internships",
  location: "India",
  github: "https://github.com/ianusha08",
  linkedin: "https://www.linkedin.com/in/anushasingh18/",
  email: "i.anushaa09@gmail.com",
  twitter: "https://x.com/imanusha09",
  resumeUrl: "#resume-modal",
  aboutPhilosophy: [
    {
      title: "Building Through Projects",
      description: "Learning by designing, developing, and improving practical AI/ML and software applications, turning concepts into working projects."
    },
    {
      title: "Mathematical Foundations",
      description: "Strengthening the mathematical foundations behind machine learning and data science through linear algebra, probability, statistics, and problem-solving."
    },
    {
      title: "Open Source Collaboration",
      description: "Exploring open-source development, contributing to community-driven projects, and learning through collaboration, documentation, and shared knowledge."
    }
  ]
};

export const projectsData = [
  {
    id: "saksham",
    title: "Saksham",
    category: "VOICE AI & REAL-TIME SYSTEMS",
    tagline: "A real-time, voice-first learning companion built for natural and interactive conversations.",
    problem: "Traditional voice interfaces can introduce latency and lack contextual continuity, limiting natural and engaging interactions.",
    solution: "Built a real-time voice pipeline using LiveKit Agents, Deepgram speech-to-text, and Murf Falcon text-to-speech, with conversational memory and interactive learning capabilities.",
    technologies: ["Next.js", "React", "TypeScript", "Python", "LiveKit", "Deepgram", "Murf Falcon"],
    impact: "Achieved sub-second conversational turnaround with responsive audio streaming and voice activity detection.",
    role: "Developer",
    github: "https://github.com/ianusha08/saksham",
    liveDemo: "",
    featured: true,
    highlights: [
      "Built a real-time voice-based learning companion using LiveKit Agents, Deepgram speech-to-text, and Murf Falcon text-to-speech.",
      "Implemented conversational memory and interactive learning tools for contextual voice interactions.",
      "Integrated outbound calling, call analytics, human escalation, and specialist-agent handoffs."
    ]
  },
  {
    id: "nuurai",
    title: "NUURAI",
    category: "GENERATIVE AI · WELLNESS TECHNOLOGY",
    tagline: "A wellness and self-reflection platform featuring mood tracking, journaling, and personalized insights.",
    problem: "Users often lack a structured way to track their emotional wellbeing and reflect on patterns in their daily experiences.",
    solution: "Developed a React-based platform with daily wellness check-ins, personal journaling, mood tracking, and an interactive dashboard. Prototyped a conversational AI companion for guided reflection.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    impact: "Delivered an intuitive digital assistant interface with real-time markdown rendering and prompt caching.",
    role: "Full-Stack AI Developer",
    github: "https://github.com/ianusha08/nuurai",
    liveDemo: "",
    featured: true,
    highlights: [
      "Created a React-based wellness platform featuring daily check-ins, personal journaling, and mood, energy, stress, and sleep tracking.",
      "Developed an interactive dashboard with wellness visualizations and weekly insights.",
      "Prototyped a conversational AI companion for guided reflection."
    ]
  },
  {
    id: "restricted-area-intrusion-detection",
    title: "Area-Restricted Intrusion Detection System",
    category: "COMPUTER VISION · REAL-TIME DETECTION",
    tagline: "A real-time computer vision system that detects unauthorized entry into predefined restricted zones.",
    problem: "Manual monitoring of restricted areas is unreliable and makes immediate intrusion detection difficult.",
    solution: "Implemented MediaPipe pose detection and polygon-based zone monitoring using OpenCV. Added a 3-second verification threshold to distinguish genuine intrusions from passersby, with Twilio SMS alerts and event logging.",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Twilio"],
    impact: "Automated real-time visual alerts and zone monitoring across video feeds.",
    role: "AI/ML Developer",
    github: "https://github.com/ianusha08/restricted-area-intrusion-detection",
    liveDemo: "",
    featured: true,
    highlights: [
      "Built a real-time surveillance system using Python, OpenCV, and MediaPipe pose estimation to detect unauthorized entry into restricted zones.",
      "Implemented polygon-based zone detection with a three-second verification threshold to reduce false alerts.",
      "Integrated Twilio SMS notifications and event logging, with a cooldown mechanism to prevent repeated alerts."
    ]
  },
  {
    id: "ets-platform",
    title: "ETS Platform",
    category: "FULL STACK & SYSTEMS",
    tagline: "A full-stack enterprise platform for tracking operations and managing dispatch schedules.",
    problem: "Logistics operations involve fragmented information and manual coordination, making dispatch scheduling and real-time tracking difficult to manage.",
    solution: "Contributed to frontend interfaces, dashboards, backend workflows, API integration, and dispatch scheduling to support a unified operations management platform.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    impact: "Centralized fleet operational workflows into a unified, responsive dashboard.",
    role: "Full Stack Engineer",
    github: "https://github.com/Diverse-Loopers/Ets",
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
    period: "Apr 2026 – Jul 2026",
    role: "Full Stack Developer Intern",
    organization: "Diverse Loopers Private Limited",
    type: "Internship",
    description: "Developed production-oriented web applications, focusing on responsive dashboards, frontend interfaces, application features, and backend-integrated workflows.",
    achievements: [
      "Built and optimized responsive dashboards and user interfaces with React, ensuring consistency across application modules.",
      "Developed modular frontend components, implemented application features, and resolved UI and functional issues.",
      "Integrated RESTful API endpoints and connected frontend views with backend services to support unified operational workflows."
    ]
  },
  {
    period: "2026",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC)",
    type: "Open Source",
    description: "Contributed to community open-source repositories, focusing on UI improvements, bug fixes, and documentation.",
    achievements: [
      "Collaborated with project maintainers and submitted merged pull requests for UI enhancements and accessibility fixes.",
      "Participated in community code reviews, issue discussions, and technical documentation updates."
    ]
  },
  {
    period: "Aug 2026",
    role: "Voice AI Challenge / Project Developer",
    organization: "Voice for Bharat",
    type: "Project / AI Challenge",
    description: "Developed voice-based AI workflows focused on speech recognition, conversational responses, and real-time audio interaction.",
    achievements: [
      "Prototyped speech recognition and conversational response workflows for real-time audio interactions.",
      "Applied prompt engineering techniques and latency reduction strategies to improve conversational turnaround."
    ]
  }
];

export const achievementsData = [
  {
    title: "ICPC Algo Queen 2023",
    rank: "All India Rank 14",
    period: "2023",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
    description: "Secured All India Rank 14 in ICPC Algo Queen 2023, a competitive programming challenge focused on algorithmic problem-solving. The experience strengthened my ability to approach complex problems systematically and work under competitive constraints."
  },
  {
    title: "GirlScript Summer of Code 2026",
    rank: "Open-Source Contributor",
    period: "2026",
    tags: ["Open Source", "React", "Community"],
    description: "Contributed to community open-source repositories through code improvements, accessibility enhancements, and collaborative pull requests."
  }
];

export const openSourceData = [
  {
    organization: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    year: "2026",
    description: "Contributed features, accessibility improvements, and bug fixes across community web projects during the summer program.",
    tags: ["React", "JavaScript", "Git", "Community"]
  },
  {
    organization: "Independent Development",
    role: "Personal Projects & Technical Exploration",
    year: "2025 – Present",
    description: "Building and experimenting with independent applications across AI/ML, voice-based systems, and software development, with a focus on practical implementation and continuous technical improvement.",
    tags: ["Python", "AI/ML", "React", "Voice AI"]
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
    category: "AI/ML",
    skills: ["Machine Learning", "Generative AI", "LLMs", "PyTorch", "Computer Vision", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
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
