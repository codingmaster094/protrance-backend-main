import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'


export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerlogo',
      type: 'upload',
      label: 'Logo',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Footer Beschreibung',
    },
    {
      name: 'sprechzeiten',
      label: 'Sprechzeiten',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'text',
          label: 'Tag',
        },
        {
          name: 'time',
          type: 'text',
          label: 'Uhrzeit',
        },
      ],
    },
    {
      name: 'kontakt',
      label: 'Kontakt',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Telefonnummer',
        },
        {
          name: 'phone_url',
          type: 'text',
          label: 'Phone URL',
        },
        {
          name: 'email',
          type: 'text',
          label: 'E-Mail',
        },
        {
          name: 'email_url',
          type: 'text',
          label: 'Email URL',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Adresse',
        },
        {
          name: 'address_url',
          type: 'text',
          label: 'Address URL',
        },
      ],
    },
    {
      name: 'navigationLinks',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Linktext',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
    {
      name: 'legalLinks',
      label: 'Rechtliches',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Linktext',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
