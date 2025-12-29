import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url;
  const currentDate = new Date();

  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Section anchors for better indexing (hash links for single-page app)
  const sectionPages = [
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#work`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#education`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#coding-stats`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#hackathons`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ];

  // Blog posts - dynamic entries
  const blogPosts = DATA.blogs.map((blog) => ({
    url: `${baseUrl}${blog.href}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Project pages (if they have dedicated URLs)
  const projectPages = DATA.projects
    .filter((project) => project.href && project.href.startsWith('http'))
    .map((project) => ({
      url: project.href!,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }));

  return [...mainPages, ...sectionPages, ...blogPosts];
}