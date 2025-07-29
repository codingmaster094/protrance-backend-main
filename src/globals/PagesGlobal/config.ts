import { GlobalConfig } from 'payload';

export const PagesGlobal: GlobalConfig = {
  slug: 'pages-global', // This is the unique identifier for your global
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    // ... other fields for your global page
  ],
};