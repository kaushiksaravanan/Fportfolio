import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kaushik S",
  initials: "KS",
  url: "https://kaushiks.vercel.app",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Software Engineer | AI & Cloud Computing Enthusiast | IEEE-Published Researcher | Hackathon Winner",
  summary:
    "Software engineer and IEEE-published researcher specializing in AI, cloud computing, and scalable software solutions. Experienced in delivering impactful projects across AI-driven chatbots, cloud cost optimization, multimedia indexing, and real-time data processing. Proven track record in hackathons, academic excellence, and community leadership. Curse of High Achiever.",
  avatarUrl: "/kaushik.png",
  resumeUrl: "https://drive.google.com/file/d/1kPvuawGaUpUhNq05BZNGkFXLiDZMnw4A/view?usp=sharing",
  skills: [
    "Python", "Go", "Java", "C", "JavaScript", "TypeScript", "SQL",
    "FastAPI", "Flask", "TensorFlow", "PyTorch", "LangChain", "OpenCV", "MediaPipe",
    "PyQt5", "NumPy", "Pandas", "Scikit-learn",
    "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Redis", "ChromaDB",
    "Docker", "Jenkins", "Grafana",
    "Microsoft Azure", "Google Cloud Platform", "AWS", "Cloudflare", "N8N",
    "Git", "Kubernetes", "Selenium",
    "Android Development", "React", "Next.js", "TailwindCSS"
  ],
  codingProfiles: {
    leetcode: {
      username: "kaushiksaravanan",
      url: "https://leetcode.com/u/kaushiksaravanan/"
    },
    codeforces: {
      username: "s-kaushik-s",
      url: "https://codeforces.com/profile/s-kaushik-s"
    }
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kaushik.s.saravanan@gmail.com",
    tel: "+918925736581",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kaushiksaravanan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kaushik-ss",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@jetfalse1",
        icon: Icons.youtube,
        navbar: true,
      },
      IEEE1: {
        name: "IEEE - C-ITS Paper",
        url: "https://ieeexplore.ieee.org/document/11033077",
        icon: Icons.globe,
        navbar: false,
      },
      IEEE2: {
        name: "IEEE - Cognitive IDS Paper",
        url: "https://ieeexplore.ieee.org/document/10780078",
        icon: Icons.globe,
        navbar: false,
      },
      Personal: {
        name: "Portfolio",
        url: "https://kaushiks.vercel.app",
        icon: Icons.globe,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Kaushiks0",
        icon: Icons.x,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1kPvuawGaUpUhNq05BZNGkFXLiDZMnw4A/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "SAP Labs India",
      location: "Bengaluru, India",
      title: "Associate Developer",
      logoUrl: "/sap.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "• Built real-time cross-cloud observability dashboard (React + Node + Python)\n• Implemented Python-based event mesh collector for cross-cloud telemetry ingestion\n• Rewrote password-fetch client for 9,000+ Linux servers from Python to dependency-free Golang (std lib only), eliminating insecure 3rd-party library and enabling secure patching at scale\n• Owned privacy-first, GDPR-compliant RAG pipeline: Detected PII via Presidio + fine-tuned BERT on 300k+ records pre-ChromaDB indexing\n• Added recovery mechanisms for ingestion over 5K+ docs. Scaled to 400 users from 25 users in 2 months\n• Demoed in SAP Development Kickoff Meeting (DKOM)\n• Slashed RAG chatbot query latency from 180s to 2s (90x speedup) using batching, delta loads, SQL caching, and DB WAL optimizations\n• Engineered CI/CD pipeline reducing chatbot downtime 15 minutes per deployment and saved 6 hours/month\n• Integrated LangChain + PostgreSQL for scalable indexing\n• Led multi-cloud consolidation (GCP, Azure, OpenStack) via Jenkins (20 steps, 200+ logs/step), dismantling 550+ instances\n• Handled 2.2M logging events and 0% reported data loss",

      linkedinPosts: [
        {
          title: "Still learning. Still shipping.",
          url: "https://www.linkedin.com/posts/activity-7353099451999162369-gDwx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYgcTQB3p7eTm2gAqn1Ue9YE6GrPtBEsvg"
        },
        {
          title:"SAP Development Kickoff Meeting (DKOM) Demopod - RAG-Privacy Chatbot",
          url: "https://www.linkedin.com/posts/activity-7304514591273664513-P2lx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYgcTQB3p7eTm2gAqn1Ue9YE6GrPtBEsvg"
        }
      
      ]

    },
    {
      company: "SAP Labs India",
      location: "Bengaluru, India",
      title: "Software Engineer Intern",
      logoUrl: "/sap.png",
      start: "Jan 2024",
      end: "Jul 2024",
      description:
        "• Built FastAPI service aggregating metrics from GCP, Azure, and OpenStack\n• Cut retrieval time from 76 min to 13 min (5.8×) and reduced API calls by 40%\n• Implemented multiprocessing, LRU cache, batching, and compression for optimization\n• Designed scalable architecture for cross-cloud telemetry\n• Solved cold-start and burst-load issues using connection pooling, file caching and async processing",
        linkedinPosts: [
        {
          title: "Still learning. Still shipping.",
          url: "https://www.linkedin.com/posts/activity-7353099451999162369-gDwx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYgcTQB3p7eTm2gAqn1Ue9YE6GrPtBEsvg"
        },]
    },
    {
      company: "SAP Labs India",
      location: "Bengaluru, India",
      title: "Software Engineer Intern",
      logoUrl: "/sap.png",
      start: "May 2023",
      end: "Jun 2023",
      description:
        "• Created automatic error-parsing pipeline that extracted Odata from SAP System and sent alert emails\n• Designed and executed comprehensive smoke, regression, and A/B testing on SAP Fiori UI components\n• Identified and triaged 172+ accessibility and functionality defects",
        linkedinPosts: [
        {
          title: "Still learning. Still shipping.",
          url: "https://www.linkedin.com/posts/activity-7353099451999162369-gDwx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYgcTQB3p7eTm2gAqn1Ue9YE6GrPtBEsvg"
        },]
    },
    {
      company: "Samsung R&D Institute India",
      location: "Remote",
      title: "PRISM Project Intern",
      logoUrl: "/samsung.png",
      start: "Jan 2023",
      end: "Sep 2023",
      description:
        "• Developed scalable algorithm for asynchronous noise injection into images and videos\n• Recognized with an Excellent Performance Award\n• Awarded 90,000 INR cash prize for outstanding contributions",
        linkedinPosts: [
        {
          title: "Still learning. Still shipping.",
          url: "https://www.linkedin.com/posts/activity-7353099451999162369-gDwx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYgcTQB3p7eTm2gAqn1Ue9YE6GrPtBEsvg"
        },]
    },
  ],

  education: [
    {
      school: "PSG College of Technology",
      degree: "B.Tech in Information Technology",
      grade: "CGPA: 9.54",
      logoUrl: "/psg.png",
      start: "2020",
      end: "2024",
      website: "https://psgtech.edu",
    },
  ],

  projects: [
    {
      title: "SentinelPII – GE Healthcare Hackathon",
      href: "https://github.com/kaushiksaravanan/GE-Healthcare-Hackathon-PII",
      dates: "Jun 2024 - Jul 2024",
      description:
        "Developed a multilingual PII/PHI redaction system using DeBERTa, QLoRA, spaCy, and Presidio. Implemented a Flask backend with React frontend to process sensitive text data in multiple languages. Selected as a Top 12 finalist in the GE Precision Care Challenge.",
      technologies: ["Python", "DeBERTa", "spaCy", "QLoRA", "Presidio", "Flask", "React"],
      image: "/sentinelpii.png",
      // video: "https://www.youtube.com/watch?v=3D0TpPXrRAs",
    },
    {
      title: "Real-time Multimedia File Indexer – Smart India Hackathon",
      href: "https://github.com/Kaushiksaravanan/MI-Multimedia-Indexer",
      dates: "2022",
      description:
        "Implemented a GPU-accelerated TF-IDF and NLP pipeline to index 1,000+ multimedia files within 2 seconds. Solution deployed for MP Police after winning SIH 2022 AT980 challenge.",
      technologies: ["Python", "NLP", "TF-IDF", "PostgreSQL"],
      image: "/multimedia-indexer.gif",
    },
    {
      title: "Multimedia Augmentation using Noise – Samsung PRISM",
      dates: "Jan 2023 - Sep 2023",
      description:
        "Developed a PyQt5-based GUI to apply 14+ types of noise to images and videos for dataset robustness, leveraging multiprocessing to reduce processing time by up to 60%.",
      technologies: ["Python", "PyQt5", "OpenCV", "NumPy"],
      // video: "https://www.youtube.com/watch?v=6JQuTVdgvY4",
      image: "/multimedia-noise.png",
      href:"https://github.com/kaushiksaravanan/Multimedia-Augmentation-using-Noise-GUI"
    },
    {
      title: "PSG Tech FineArts Android App",
      href: "https://github.com/Kaushiksaravanan/PSGTech-FineArts-Android-App",
      dates: "Nov 2022 - Feb 2023",
      description:
        "Created an Android app with Firebase integration, role-based access control, and real-time Firestore sync to manage Fine Arts Club events.",
      technologies: ["Java", "Android", "Firebase", "Firestore"],
      image: "/finearts-app.gif",
    },
    {
      title: "DFS and BFS Visualizer",
      href: "https://github.com/Kaushiksaravanan/DFS-and-BFS-visualizer",
      dates: "Jul 2022 - Sep 2022",
      description:
        "Built a Flask and Mermaid.js-powered tool to visualize graph traversal algorithms interactively from dynamic adjacency matrices.",
      technologies: ["Python", "Flask", "JavaScript", "Mermaid.js"],
      image: "/dfs-bfs.png",
    },
    {
      title: "Hostel WiFi Login Automation",
      href: "https://github.com/Kaushiksaravanan/WiFi-Login-Automation",
      dates: "May 2022 - Jun 2022",
      description:
        "Automated captive portal logins using Selenium in Python, enabling persistent logins without manual input.",
      technologies: ["Python", "Selenium"],
      image: "/wifi-login.png",
    },
    {
      title: "Travel-Safe",
      href: "https://github.com/Kaushiksaravanan/Travel-Safe---PSG-Hackathon-Wind-Falcons",
      dates: "May 2022",
      description:
        "Developed a crime-aware routing application using KNN and time series analysis to suggest safer navigation paths.",
      technologies: ["Python", "MongoDB", "Flask", "Machine Learning"],
      image: "/travel-safe.png",
    },
    {
      title: "American Sign Language Bidirectional Interpreter",
      href: "https://github.com/Kaushiksaravanan/Sign-language-Camera-to-Text-LSTM-Real-time",
      dates: "2022",
      description:
        "Implemented an LSTM-based American Sign Language interpreter with 93% accuracy, enabling bidirectional translation between ASL gestures and text. Won 2nd place in PSG Tech Annual Hackathon.",
      technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "LSTM"],
      image: "/asl-interpreter.png",
    },
  ],

  hackathons: [
    {
      title: "Smart India Hackathon 2022 – Winner",
      dates: "Aug 2022",
      location: "India",
      description:
        "Developed and deployed a GPU-accelerated multimedia file indexing system for MP Police. Solution indexes 1,000+ files in under 2 seconds using TF-IDF and NLP techniques.",
      image: "/multimedia-indexer.gif",
    },
    {
      title: "GE Precision Care Challenge – Top 12 Finalist",
      dates: "Jul 2024",
      location: "India",
      description:
        "Built a multilingual PII/PHI redaction system with DeBERTa, QLoRA, spaCy, and Presidio for healthcare data privacy.",
      image: "/sentinelpii.png",
    },
  ],

  extracurriculars: [
    {
      title: "Coding Club – PSG Tech",
      role: "Secretary",
      dates: "Jun 2023 - Aug 2024",
      description:
        "Led 15+ technical events including ODE2CODE, Game of Codes, and Code Cipher. Coordinated workshops and competitive programming contests."
    },
    {
      title: "Fine Arts Club – PSG Tech",
      role: "Technical Team Member",
      dates: "Sep 2023 - Apr 2024",
      description:
        "Developed the club’s Android event management app, designed promotional materials, and supported event tech logistics."
    },
    {
      title: "International Education Cell – PSG Tech",
      role: "Event Management Officer",
      dates: "Sep 2023 - Apr 2024",
      description:
        "Organized 'Map Match Madness' cultural festival event with 200+ participants."
    },
  ],

  awards: [
    { title: "Best Outgoing Student – IT Department", issuer: "PSG College of Technology", date: "Apr 2024" },
    { title: "Smart India Hackathon Winner", issuer: "Govt. of India", date: "Aug 2022" },
    { title: "GE Precision Care Challenge – Top 12 Finalist", issuer: "General Electric Healthcare", date: "Jul 2024" },
    { title: "Excellence Award – Samsung PRISM", issuer: "Samsung R&D Institute India", date: "Nov 2023" },
  ],

  publications: [
    {
      title: "Swarm Intelligence-Based Cooperative Intelligent Transportation System",
      href: "https://ieeexplore.ieee.org/document/11033077",
      date: "Apr 2025",
      conference: "ICCIES 2025",
      publisher: "IEEE",
    },
    {
      title: "Cognitive Intrusion Detection System in Autonomous Vehicles Using Machine Learning",
      href: "https://ieeexplore.ieee.org/document/10780078",
      date: "Oct 2024",
      conference: "ICPECTS 2024",
      publisher: "IEEE",
    },
  ],

  blogs: [
    {
      title: "🎧 I Reverse-Engineered ChatGPT's Voice Data Flow and Found My Own Voice Hidden in a ZIP File",
      href: "/blog/Zips_and_Files",
      publishedAt: "2025-08-11",
      summary: "How I went from missing transcript frustration to finding my actual ChatGPT voice recordings through reverse engineering, DevTools, Burp Suite, and… a simple ZIP file.",
      readTime: "8 min read",
    },
  ],

  certifications: [
    "Google Cloud – Generative AI Leader Certification",
    "Google Cloud – Associate Cloud Engineer Certification",
    "Microsoft Azure – DP-900 Azure Data Fundamentals",
    "AWS Machine Learning Foundations – Udacity",
    "SAP – AI Developer Foundation Program",
    "Pluralsight – Algorithms and Data Structures Part 2",
    "Coursera – Data Science Math Skills",
    "Dataquest.io – Data Visualization Fundamentals",
    "HackerRank – Problem Solving Basics",
  ],
} as const;
