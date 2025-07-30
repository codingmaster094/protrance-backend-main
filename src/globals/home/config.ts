import type { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'
import { abouts } from '@/home_about/config'
import { gallery } from '@/gallery/config'
import { protance_zahlen } from '@/Protance_Zahlen/config'
import { cta } from '@/CTA/config'
import { cta2 } from '@/CTA2/config'
import { service } from '@/service_section/config'
import { service2 } from '@/service_section2/config'
import { Meine_Referenzen } from '@/Meine_Referenzen/config'
import { Reviews } from '@/enableReviews/config'
import { faq } from '@/faq/config'
import { SEO } from '@/SEO/config'
import slugify from 'slugify'
export const HomePage: GlobalConfig = {
  slug: 'home',
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
          label: 'Abouts',
          fields: [abouts],
        },
        {
          label: 'Gallery',
          fields: [gallery],
        },
        {
          label: 'Partner Logo',
          fields: [partnerlogo],
        },
        {
          label: 'Protance Zahlen',
          fields: [protance_zahlen],
        },
        {
          label: 'CTA',
          fields: [cta],
        },
        { 
          label: 'Service Section',
          fields: [service],
        },
        {
          label: 'Meine Referenzen',
          fields: [Meine_Referenzen],
        },
        {
          label: 'CTA-2',
          fields: [cta2],
        },
        {
          label: 'Service Section-2',
          fields: [service2],
        },
        {
          label: 'Reviews',
          fields: [Reviews],
        },
        {
          label: 'FAQ',
          fields: [faq],
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
    afterChange: [revalidateHome],
  },
}
