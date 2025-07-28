import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const abouts2: Field = {
  name: 'abouts2',
  type: 'group',
  fields: [ 
    {
      name: 'aboutsImage',
      type: 'upload',
      label: 'abouts Image',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'title',
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
    {
      name: 'nestedSections',
      type: 'array',
      label: 'Nested sections',
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'nestedaboutsImage',
              type: 'upload',
              label: 'nested abouts Image',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'title',
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
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
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
