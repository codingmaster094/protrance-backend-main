import type { GlobalConfig } from 'payload'
import { revalidateBlog } from './hooks/revalidateBlog'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'
import { cta } from '@/CTA/config'
import { SEO } from '@/SEO/config'
import { Blog_List_Title } from '@/text_field/config'
import slugify from 'slugify'

export const BlogPage: GlobalConfig = {
  slug: 'blog',
  label: {
    en: 'Blog',
    de: 'Blog',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
      label: {
        en: 'Slug',
        de: 'Kurzlink',
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => {
            if (siblingData?.title) {
              return slugify(siblingData.title, { lower: true })
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Hero',
            de: 'Held',
          },
          fields: [Hero],
        },
        {
          label: {
            en: 'Partner Logo',
            de: 'Partner-Logo',
          },
          fields: [partnerlogo],
        },
        {
          label: {
            en: 'CTA',
            de: 'Handlungsaufforderung',
          },
          fields: [cta],
        },
        {
          label: {
            en: 'Blog Title',
            de: 'Blog-Titel',
          },
          fields: [Blog_List_Title],
        },
        {
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [SEO],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateBlog],
  },
}
