import type { CollectionConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'
import { BlogAbout } from '@/blog-About/config'
import { cta } from '@/CTA/config'
import { faq } from '@/faq/config'
import { Contents } from '@/contents/config'
import { SEO } from '@/SEO/config'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    preview: (doc) => {
      if (!doc?.slug) return null
      return `https://protrance-backend-main.vercel.app/posts/${doc.slug}`
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'authors',
        type: 'relationship',
        relationTo: 'users',
        hasMany: true,
        admin: {
            position: 'sidebar'
        }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => value || slugify(siblingData.title, { lower: true }),
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [Hero],
        },
        {
          label: 'Partner Logo',
          fields: [partnerlogo],
        },
        {
          label: 'BlogAbout',
          fields: [BlogAbout],
        },
        {
          label: 'CTA',
          fields: [cta],
        },
        {
          label: 'FAQ',
          fields: [faq],
        },
        {
          label: 'Content',
          fields: [Contents],
        },
        {
          label: 'SEO',
          fields: [SEO],
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
  ],
}
