"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  GraduationCapIcon, 
  CodeIcon, 
  TrophyIcon, 
  FolderOpenIcon,
  ActivityIcon,
  BookOpenIcon,
  MailIcon 
} from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: UserIcon },
  { id: "work", label: "Experience", icon: BriefcaseIcon },
  { id: "education", label: "Education", icon: GraduationCapIcon },
  { id: "skills", label: "Skills", icon: CodeIcon },
  { id: "coding-stats", label: "Coding Stats", icon: ActivityIcon },
  { id: "projects", label: "Projects", icon: FolderOpenIcon },
  { id: "blogs", label: "Blogs", icon: BookOpenIcon },
  { id: "hackathons", label: "Hackathons", icon: TrophyIcon },
  { id: "contact", label: "Contact", icon: MailIcon },
];

export const NavigationSidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
      className="fixed inset-y-0 left-4 z-50 hidden lg:flex"
      aria-label="Site section navigation"
      role="complementary"
    >
      <nav
        role="navigation"
        aria-label="Primary"
        className="my-auto flex flex-col space-y-1 rounded-xl border bg-background/95 backdrop-blur-sm p-3 shadow-xl w-48"
      >
        <ul className="flex flex-col space-y-1" role="list">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", 
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", 
                    isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={item.label}
                >
                  <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.aside>
  );
};