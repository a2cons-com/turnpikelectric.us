import type { APIRoute } from 'astro';
import { indexable } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).toString();
  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
    : `# Preview domain: not for indexing yet\nUser-agent: *\nDisallow:\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
