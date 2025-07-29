import { NextRequest } from 'next/server'
export const GET = async (req) => {
const robotsTxt = `
User-agent: *
Allow: /
Sitemap: https://protrance-backend-main.vercel.app/sitemap.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
