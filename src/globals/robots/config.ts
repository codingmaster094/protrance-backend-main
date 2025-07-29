import type { GlobalConfig } from 'payload'
export const Robots: GlobalConfig = {
  slug: 'robots',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'robots',
      type: 'richText',
      label: 'robots Txt',
    },
  ],
}
