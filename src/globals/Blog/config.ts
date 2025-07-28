import type { GlobalConfig } from 'payload'
import { revalidateBlog } from './hooks/revalidateBlog'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'

import { cta } from '@/CTA/config'
import { SEO } from '@/SEO/config'
import { Blog_List_Title } from '@/text_field/config'
export const BlogPage: GlobalConfig = {
  slug: 'blog',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
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
          label: 'CTA',
          fields: [cta],
        },
        {
          label: 'Blog Title',
          fields: [Blog_List_Title],
        },
        {
          label: 'SEO',
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
    },
  ],
  hooks: {
    afterChange: [revalidateBlog],
  },
}
