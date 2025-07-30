import type { GlobalConfig } from 'payload'
import { revalidateKontakt } from './hooks/revalidateKontakt'
import { Hero } from '@/Hero/config'
import { Kontaktmoglichkeiten } from '@/Kontaktmoglichkeiten/config'
import { KontaktMap } from '@/KontaktMap/config'
import { Reviews } from '@/enableReviews/config'
import { SEO } from '@/SEO/config'
import slugify from 'slugify'
export const KontaktPage: GlobalConfig = {
  slug: 'kontakt',
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
  ({ siblingData, originalDoc }) => {
    if (siblingData?.title && siblingData.title !== originalDoc?.title) {
      return slugify(siblingData.title, { lower: true });
    }
  },
]
,
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
          label: 'Kontaktmoglichkeiten',
          fields: [Kontaktmoglichkeiten],
        },
        {
          label: 'KontaktMap',
          fields: [KontaktMap],
        },
        {
          label: 'SEO',
          fields: [SEO],
        },
        {
          label: 'Reviews',
          fields: [Reviews],
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
    afterChange: [revalidateKontakt],
  },
}
