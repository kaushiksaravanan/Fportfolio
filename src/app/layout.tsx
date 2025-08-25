import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

// Generate structured data for SEO
const generateStructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DATA.name,
    "alternateName": DATA.initials,
    "description": DATA.description,
    "url": DATA.url,
    "image": `${DATA.url}${DATA.avatarUrl}`,
    "sameAs": [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
      DATA.contact.social.IEEE1.url,
      DATA.contact.social.IEEE2.url
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "SAP Labs India"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Python",
      "React",
      "JavaScript",
      "TypeScript",
      "Go",
      "Java"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "Bengaluru"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "PSG College of Technology"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${DATA.name} Portfolio`,
    "description": `Portfolio of ${DATA.name}, a skilled Software Engineer specializing in AI, Cloud Computing, and scalable solutions.`,
    "url": DATA.url,
    "author": {
      "@type": "Person",
      "name": DATA.name
    },
    "publisher": {
      "@type": "Person",
      "name": DATA.name
    }
  };

  return [personSchema, websiteSchema];
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Software Engineer & AI Enthusiast Portfolio`,
    template: `%s | ${DATA.name}`,
  },
  description: `Portfolio of ${DATA.name}, a skilled Software Engineer specializing in AI, Cloud Computing, and scalable solutions. IEEE-published researcher, hackathon winner, and SAP developer with expertise in Python, Go, React, and cloud technologies.`,
  keywords: [
    "software engineer",
    "AI engineer",
    "cloud computing",
    "machine learning",
    "full stack developer",
    "Python developer",
    "React developer",
    "hackathon winner",
    "IEEE researcher",
    "SAP developer",
    "portfolio",
    "Bengaluru",
    "India"
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: `${DATA.name} - Software Engineer & AI Enthusiast`,
    description: `Discover ${DATA.name}'s portfolio featuring AI-driven projects, cloud solutions, and innovative software development. IEEE-published researcher and hackathon winner.`,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    images: [
      {
        url: "/kaushik.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Software Engineer`,
      },
    ],
    locale: "en_US",
    type: "website",
    profile: {
      firstName: DATA.name.split(" ")[0],
      lastName: DATA.name.split(" ")[1] || "",
      username: DATA.name.toLowerCase().replace(" ", ""),
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Software Engineer & AI Enthusiast`,
    description: `Portfolio of ${DATA.name} - AI Engineer, Cloud Developer, and Hackathon Winner. Explore innovative projects and technical expertise.`,
    images: ["/kaushik.png"],
    creator: "@Kaushiks0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  category: "technology",
  classification: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
