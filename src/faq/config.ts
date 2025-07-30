import { EXPERIMENTAL_TableFeature, FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(), // This enables the table functionality in the editor
        ],
      }),
      label: false,
    }
            // Add more fields here as needed
          ],
        },
      ],
    },
  ],
  label: false,
}
