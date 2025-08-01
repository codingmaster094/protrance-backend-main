import type { GlobalConfig } from 'payload'
import { revalidateUber_mich } from './hooks/revalidateUber_mich'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'
import { abouts } from '@/uber_mich_about/config'
import { abouts2 } from '@/uber_mich_about2/config'
import { service } from '@/service_section/config'
import { uberMap } from '@/uber_map/config'
import { Wichtige_Meilensteine } from '@/wichtige_meilensteine/config'
import { Reviews } from '@/enableReviews/config'
import { protance_zahlen } from '@/Protance_Zahlen/config'
import { SEO } from '@/SEO/config'
import slugify from 'slugify'

export const Uber_michPage: GlobalConfig = {
  slug: 'uber-mich',
  label: {
    en: 'About Me',
    de: 'Über mich',
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
      label: {
        en: 'Slug',
        de: 'Kurzlink',
      },
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, originalDoc }) => {
            if (siblingData?.title && siblingData.title !== originalDoc?.title) {
              return slugify(siblingData.title, { lower: true })
            }
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
            de: 'Partnerlogo',
          },
          fields: [partnerlogo],
        },
        {
          label: {
            en: 'About Section',
            de: 'Über Abschnitt',
          },
          fields: [abouts],
        },
        {
          label: {
            en: 'Service Section',
            de: 'Dienstleistungsbereich',
          },
          fields: [service],
        },
        {
          label: {
            en: 'Milestones Section',
            de: 'Wichtige Meilensteine',
          },
          fields: [Wichtige_Meilensteine],
        },
        {
          label: {
            en: 'About Section 2',
            de: 'Über Abschnitt 2',
          },
          fields: [abouts2],
        },
        {
          label: {
            en: 'Map',
            de: 'Karte',
          },
          fields: [uberMap],
        },
        {
          label: {
            en: 'Protrance Numbers',
            de: 'Protrance Zahlen',
          },
          fields: [protance_zahlen],
        },
        {
          label: {
            en: 'Reviews',
            de: 'Bewertungen',
          },
          fields: [Reviews],
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
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateUber_mich],
  },
}
