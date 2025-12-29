import { DATA } from '@/data/resume';

export async function GET() {
    const baseUrl = DATA.url;

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${DATA.name}'s Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Technical blog posts about software engineering, AI, cloud computing, and more by ${DATA.name}</description>
    <language>en-US</language>
    <managingEditor>${DATA.contact.email} (${DATA.name})</managingEditor>
    <webMaster>${DATA.contact.email} (${DATA.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/kaushik.png</url>
      <title>${DATA.name}'s Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${DATA.blogs.map(blog => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${baseUrl}${blog.href}</link>
      <guid isPermaLink="true">${baseUrl}${blog.href}</guid>
      <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${DATA.name}]]></dc:creator>
      <description><![CDATA[${blog.summary}]]></description>
      <content:encoded><![CDATA[${blog.summary}]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`;

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
