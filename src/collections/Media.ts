  import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

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
