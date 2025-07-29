import { getPayload } from 'payload';
import configPromise from '@payload-config'; // Rename to emphasize it's a promise
import { getServerSideURL } from '@/utilities/getURL';

export async function GET() {
  // Await the config promise to get the actual config object
  const config = await configPromise; 

  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: 'posts',
    limit: 0,
    where: {},
  });

  // console.log('Payload Config Globals:', config.globals); // Now this should show the array

  const url = getServerSideURL();

  const globalUrls = await Promise.all(
  (config.globals || []).map(async (globalConfig) => {
    try {
      const globalData = await payload.findGlobal({ slug: globalConfig.slug });

      if (globalData && globalData.updatedAt) {
        return {
          url: `${url}/${globalConfig.slug}`, // Use config's slug for the URL
          lastModified: new Date(globalData.updatedAt),
        };
      }

    } catch (error) {
      console.error(`Error fetching global: ${globalConfig.slug}`, error);
    }

    return null;
  })
);



 const sitemapUrls: { url: string; lastModified: Date }[] = [
  ...posts.docs.map(({ slug, updatedAt }) => ({
    url: `${url}/${slug}`,
    lastModified: new Date(updatedAt),
  })),
  ...globalUrls.flatMap((item) => (item ? [item] : [])), // avoids .filter(Boolean)
];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapUrls.map (item => `
      <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
      </url>
    `).join('')}
  </urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}