// 1️⃣ Define your section types
type WorkExperience = {
  company: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
  linkedinPosts?: { title: string; url: string }[];
  href?: string; // ✅ optional link
};

type Education = {
  school: string;
  degree: string;
  grade: string;
  logoUrl: string;
  start: string;
  end: string;
  href?: string; // ✅ optional link
};

type Project = {
  title: string;
  href?: string; // ✅ optional link
  dates: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: any;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  href?: string; // ✅ optional link
};

// 2️⃣ Type the DATA object explicitly
export const DATA: {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; icon: any; label: string }[];
  contact: any;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
  extracurriculars: any[];
  awards: any[];
  publications: any[];
  certifications: string[];
  funfacts: string[];
} = {
  // ... your existing DATA object
};
