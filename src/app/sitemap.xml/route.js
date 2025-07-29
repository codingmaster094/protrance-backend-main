import { getPayload } from 'payload'
import config from '@payload-config'
import { getServerSideURL } from '@/utilities/getURL'

export async function GET() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    limit: 0,
    where: {},
  })
  const pages = await payload.find({
    collection: 'pages',
    limit: 0,
    where: {},
  })

  const url = getServerSideURL()

  const sitemapUrls = [
    ...posts.docs.map(({ slug, updatedAt }) => ({
      url: `${url}/${slug}`,
      lastModified: new Date(updatedAt),
    })),
    ...pages.docs.map(({ slug, updatedAt }) => ({
      url: `${url}/${slug}`,
      lastModified: new Date(updatedAt),
    })),
  ]

  // Build the XML sitemap string manually
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapUrls
      .map(
        (item) => `
      <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
      </url>
    `,
      )
      .join('')}
  </urlset>`

  // Return the XML string as a Response object with the correct content type
  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
