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
          label: 'Abouts',
          fields: [abouts],
        },
        {
          label: 'Service Section',
          fields: [service],
        },
        {
          label: 'wichtige meilensteine Section',
          fields: [Wichtige_Meilensteine],
        },
        {
          label: 'Abouts-2',
          fields: [abouts2],
        },
        {
          label: 'Map',
          fields: [uberMap],
        },
        {
          label: 'Protance Zahlen',
          fields: [protance_zahlen],
        },
        {
          label: 'Reviews',
          fields: [Reviews],
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
    afterChange: [revalidateUber_mich],
  },
}
