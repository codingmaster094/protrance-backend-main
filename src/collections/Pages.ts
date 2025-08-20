import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
    labels: {
    plural: {
      en: 'Pages',
      de: 'Seiten',
    },
  }, // This is the slug that Payload looks for
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      unique: true,
    },
    // ... other fields
  ],
}