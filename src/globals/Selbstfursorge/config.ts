import type { GlobalConfig } from 'payload'
import { revalidateSelbstfursorge } from './hooks/revalidateSelbstfursorge'
import { Hero } from '@/Hero/config'
import { partnerlogo } from '@/partner_logos/config'
import { abouts } from '@/selbstfursorge_about/config'
import { cta } from '@/CTA/config'
import { service } from '@/service_section/config'
import { Meine_Referenzen } from '@/Meine_Referenzen/config'
import { Reviews } from '@/enableReviews/config'
import { faq } from '@/faq/config'
import { SEO } from '@/SEO/config'
export const SelbstfursorgePage: GlobalConfig = {
  slug: 'selbstfursorge',
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
          label: 'Abouts',
          fields: [abouts],
        },
        {
          label: 'Meine Referenzen',
          fields: [Meine_Referenzen],
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
    afterChange: [revalidateSelbstfursorge],
  },
}
