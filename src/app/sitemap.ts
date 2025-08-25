import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Blog posts would be added here if they exist
  // For now, we'll keep it simple with static pages

  return staticPages;
}