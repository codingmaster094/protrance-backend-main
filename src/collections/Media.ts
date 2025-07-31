  import type { CollectionConfig } from 'payload' 

  export const Media: CollectionConfig = {
    slug: 'media',
    access: {
      read: () => true,
    },
   upload: true,
    fields: [
      {
      name: 'title',
      type: 'text',
      required: false,
    },
 {
        name: 'alt',
        type: 'text',
        required: true,
      },
      {
            name: 'creditText',
            type: 'text',
            required: true,
        },
    ],
  }
