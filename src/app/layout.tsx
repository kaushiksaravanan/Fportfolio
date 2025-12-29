import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

// Generate comprehensive structured data for SEO
const generateStructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${DATA.url}/#person`,
    "name": DATA.name,
    "alternateName": ["Kaushik Saravanan", "Kaushik SDE", "Kaushik S SDE"],
    "description": "Software Development Engineer (SDE) at SAP Labs India specializing in AI, Cloud Computing, and scalable solutions",
    "url": DATA.url,
    "image": {
      "@type": "ImageObject",
      "url": `${DATA.url}${DATA.avatarUrl}`,
      "width": 400,
      "height": 400
    },
    "sameAs": [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
      DATA.contact.social.IEEE1.url,
      DATA.contact.social.IEEE2.url,
      DATA.codingProfiles.leetcode.url,
      DATA.codingProfiles.codeforces.url,
      DATA.contact.social.Youtube.url
    ],
    "jobTitle": "Software Development Engineer (SDE)",
    "worksFor": {
      "@type": "Organization",
      "name": "SAP Labs India",
      "url": "https://www.sap.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "email": DATA.contact.email,
    "knowsAbout": DATA.skills.slice(0, 20),
    "hasCredential": DATA.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert
    })),
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Development Engineer",
      "occupationalCategory": "15-1252.00",
      "occupationLocation": {
        "@type": "City",
        "name": "Bengaluru"
      },
      "skills": DATA.skills.join(", ")
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "PSG College of Technology",
      "url": "https://psgtech.edu"
    },
    "award": DATA.awards.map(award => award.title)
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DATA.url}/#website`,
    "name": "Kaushik S - SDE Portfolio",
    "alternateName": ["Kaushik SDE", "Kaushik Software Engineer Portfolio"],
    "description": "Portfolio of Kaushik S, a Software Development Engineer (SDE) at SAP Labs specializing in AI, Cloud Computing, and scalable solutions.",
    "url": DATA.url,
    "author": {
      "@id": `${DATA.url}/#person`
    },
    "publisher": {
      "@id": `${DATA.url}/#person`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DATA.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${DATA.url}/#profilepage`,
    "name": "Kaushik S - Software Development Engineer Portfolio",
    "description": DATA.summary,
    "url": DATA.url,
    "mainEntity": {
      "@id": `${DATA.url}/#person`
    },
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": DATA.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${DATA.url}/blog`
      }
    ]
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects by Kaushik S - SDE",
    "description": "Software engineering projects including AI, cloud computing, and full-stack applications by Kaushik S",
    "numberOfItems": DATA.projects.length,
    "itemListElement": DATA.projects.slice(0, 5).map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": project.title,
        "description": project.description,
        "dateCreated": project.dates,
        "programmingLanguage": project.technologies,
        "codeRepository": project.href
      }
    }))
  };

  return [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema, projectsSchema];
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Kaushik S - SDE (Software Development Engineer) | SAP Developer | AI & Cloud Expert",
    template: "%s | Kaushik S - SDE",
  },
  description: "Kaushik S is a Software Development Engineer (SDE) at SAP Labs India, specializing in AI, Cloud Computing, RAG pipelines, and scalable backend systems. IEEE-published researcher, Smart India Hackathon winner, 937+ LeetCode problems solved. Expert in Python, Go, React, and cloud technologies.",
  keywords: [
    // Primary target keywords for "Kaushik SDE" ranking
    "Kaushik SDE",
    "Kaushik S SDE",
    "Kaushik software engineer",
    "Kaushik S software developer",
    "Kaushik software development engineer",
    "Kaushik Saravanan",
    "Kaushik S",
    // Role variations
    "SDE",
    "software development engineer",
    "software engineer",
    "software developer",
    "full stack developer",
    "backend developer",
    "AI engineer",
    "cloud engineer",
    // Company and location
    "SAP developer",
    "SAP Labs India developer",
    "Bengaluru software engineer",
    "Bengaluru SDE",
    "India SDE",
    // Technical skills
    "Python developer",
    "Go developer",
    "Golang developer",
    "React developer",
    "cloud computing expert",
    "machine learning engineer",
    "LangChain developer",
    "RAG pipeline developer",
    "FastAPI developer",
    // Achievements
    "IEEE researcher",
    "IEEE published",
    "hackathon winner",
    "Smart India Hackathon winner",
    "LeetCode expert",
    // Competitive programming
    "LeetCode profile",
    "Codeforces profile",
    "competitive programmer",
    // Education
    "PSG College of Technology",
    "PSG Tech alumni",
    "PSG Tech IT",
  ],
  authors: [{ name: "Kaushik S", url: DATA.url }],
  creator: "Kaushik S",
  publisher: "Kaushik S",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Kaushik S - Software Development Engineer (SDE) | SAP Developer",
    description: "Discover Kaushik S's portfolio featuring AI-driven projects, cloud solutions, and innovative software development. IEEE-published researcher, Smart India Hackathon winner, and SDE at SAP Labs India.",
    url: DATA.url,
    siteName: "Kaushik S - SDE Portfolio",
    images: [
      {
        url: "/kaushik.png",
        width: 1200,
        height: 630,
        alt: "Kaushik S - Software Development Engineer at SAP Labs India",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Kaushik",
    lastName: "S",
    username: "kaushiksaravanan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik S - SDE | Software Development Engineer",
    description: "Portfolio of Kaushik S - SDE at SAP Labs, AI Engineer, Cloud Developer, and Hackathon Winner. 937+ LeetCode problems solved.",
    images: ["/kaushik.png"],
    creator: "@Kaushiks0",
    site: "@Kaushiks0",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
    languages: {
      "en-US": DATA.url,
    },
  },
  category: "technology",
  classification: "portfolio",
  referrer: "origin-when-cross-origin",
  other: {
    "ai-content-declaration": "human-created",
    "content-language": "en-US",
  },
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
        {/* Canonical URL */}
        <link rel="canonical" href={DATA.url} />

        {/* Favicons and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/kaushik.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* RSS/Atom feed for blog */}
        <link rel="alternate" type="application/rss+xml" title="Kaushik S Blog RSS Feed" href={`${DATA.url}/feed.xml`} />

        {/* Structured data for search engines and AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />

        {/* Additional meta tags for SEO */}
        <meta name="author" content="Kaushik S" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />

        {/* Dublin Core metadata for academic/research indexing */}
        <meta name="DC.title" content="Kaushik S - Software Development Engineer Portfolio" />
        <meta name="DC.creator" content="Kaushik S" />
        <meta name="DC.subject" content="Software Development Engineer, SDE, AI, Cloud Computing" />
        <meta name="DC.description" content={DATA.summary} />
        <meta name="DC.publisher" content="Kaushik S" />
        <meta name="DC.type" content="InteractiveResource" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content={DATA.url} />
        <meta name="DC.language" content="en" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
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
