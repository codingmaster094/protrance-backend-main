import type { Field } from 'payload'

import {
  lexicalEditor,
  lexicalHTMLField,
  EXPERIMENTAL_TableFeature,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature
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
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          EXPERIMENTAL_TableFeature(), // This enables the table functionality in the editor
        ],
      }),
      label: false,
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
