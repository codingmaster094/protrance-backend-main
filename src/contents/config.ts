import type { Field } from 'payload'

import {
  lexicalEditor,
  lexicalHTMLField,
  EXPERIMENTAL_TableFeature
} from '@payloadcms/richtext-lexical'

export const Contents: Field = {
  name: 'contents',
  type: 'group',
  fields: [
    {
      name: 'Gutenberg',
      type: 'richText',
     editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          EXPERIMENTAL_TableFeature(), 
        ],
      }),
    },
    lexicalHTMLField({
      htmlFieldName: 'Gutenberg_html',
      lexicalFieldName: 'Gutenberg',
    }),
    {
      name: 'Featured_image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: false,
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
    },
  ],
  label: false,
}
