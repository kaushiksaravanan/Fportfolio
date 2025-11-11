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
  BarChart3Icon,
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
  { id: "projects", label: "Projects", icon: BarChart3Icon },
  { id: "hackathons", label: "Hackathons", icon: TrophyIcon },
  { id: "blogs", label: "Blogs", icon: BookOpenIcon },
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-6 top-1/2 z-50 hidden lg:block"
      style={{ transform: "translateY(-50%)" }}
    >
      <nav className="flex flex-col space-y-1 rounded-xl border bg-background/95 backdrop-blur-sm p-3 shadow-xl">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center justify-start space-x-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
                "hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={item.label}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="hidden xl:inline-block whitespace-nowrap font-medium">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </motion.aside>
  );
};