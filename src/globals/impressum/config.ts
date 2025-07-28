import type { CollectionConfig } from 'payload'
import { Contents } from '@/contents/config'
import { SEO } from '@/SEO/config'

export const Impressum: CollectionConfig = {
  slug: 'impressum',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
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
