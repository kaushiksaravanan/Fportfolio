import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all standard search engine crawlers
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
      {
        // Explicitly allow Google's AI/ML crawlers
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Allow Google's extended crawler for AI training
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Allow Bingbot
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // Allow ChatGPT/OpenAI crawler
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Allow Claude/Anthropic crawler
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        // Allow Claude/Anthropic Claude-Web crawler
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        // Allow CCBot (Common Crawl) - used for AI training datasets
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        // Allow Facebook crawler
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        // Allow Twitter/X crawler
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        // Allow LinkedIn crawler
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        // Allow Slack crawler
        userAgent: 'Slackbot',
        allow: '/',
      },
      {
        // Allow Discord crawler
        userAgent: 'Discordbot',
        allow: '/',
      },
      {
        // Allow Apple's Applebot
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        // Allow DuckDuckBot
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        // Allow Perplexity AI crawler
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Allow Cohere AI crawler
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        // Allow Amazon/Alexa crawler
        userAgent: 'amazonbot',
        allow: '/',
      },
      {
        // Allow Yandex
        userAgent: 'YandexBot',
        allow: '/',
      },
      {
        // Allow Baidu
        userAgent: 'Baiduspider',
        allow: '/',
      },
    ],
    sitemap: `${DATA.url}/sitemap.xml`,
    host: DATA.url,
  };
}