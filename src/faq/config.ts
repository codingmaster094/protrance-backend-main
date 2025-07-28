import type { Field } from 'payload'
export const faq: Field = {
  name: 'faq',
  type: 'group',
  fields: [
     {
    name: 'enableFAQ',
    type: 'checkbox',
    label: 'Enable FAQ Section',
    defaultValue: true, // optional
  },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'nestedfaq',
      type: 'array',
      label: 'Nested faq',
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: false,
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Description',
            }
            // Add more fields here as needed
          ],
        },
      ],
    },
  ],
  label: false,
}
