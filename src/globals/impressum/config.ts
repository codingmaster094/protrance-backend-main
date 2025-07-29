import type { GlobalConfig } from 'payload'
import { Contents } from '@/contents/config'
import { SEO } from '@/SEO/config'
import slugify from 'slugify'

export const Impressum: GlobalConfig = {
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
