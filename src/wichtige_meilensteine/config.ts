import type { Field } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Wichtige_Meilensteine: Field = {
  name: 'wichtige_meilensteine',
  type: 'group',
  fields: [
    {
      name: 'headding',
      type: 'text',
      required: false,
    },
    {
      name: 'main_description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            // UnorderedListFeature({ enabledUnorderList: ['ul'] }),
            // OrderedListFeature({ enabledOrderList: ['ol'] }),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'nestedSections',
      type: 'array',
      label: 'Nested sections',
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'Year',
              type: 'text',
              required: false,
            },
            {
            name: 'description',
            type: 'richText',
            editor: lexicalEditor({
              features: ({ rootFeatures }) => {
                return [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  // UnorderedListFeature({ enabledUnorderList: ['ul'] }),
                  // OrderedListFeature({ enabledOrderList: ['ol'] }),
                ]
              },
            }),
            label: false,
          },
          ],
        },
      ],
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
