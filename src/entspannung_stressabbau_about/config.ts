import type { Field } from 'payload'

import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const abouts: Field = {
  name: 'abouts',
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
    {
      name: 'aboutsImage',
      type: 'upload',
      label: 'abouts Image',
      relationTo: 'media',
      required: false,
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
            EXPERIMENTAL_TableFeature()
            // UnorderedListFeature({ enabledUnorderList: ['ul'] }),
            // OrderedListFeature({ enabledOrderList: ['ol'] }),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'subdescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            EXPERIMENTAL_TableFeature()
            // UnorderedListFeature({ enabledUnorderList: ['ul'] }),
            // OrderedListFeature({ enabledOrderList: ['ol'] }),
          ]
        },
      }),
      label: false,
    },
            {
              name: 'aboutsImage',
              type: 'upload',
              label: 'abouts Image',
              relationTo: 'media',
              required: false,
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
            EXPERIMENTAL_TableFeature()
          ]
        },
      }),
      label: false,
    },
    {
      name: 'link',
      type: 'group',
      label: 'Link',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Link Label',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
        {
          name: 'target',
          type: 'select',
          label: 'Target',
          options: [
            {
              label: 'Same Tab',
              value: '_self',
            },
            {
              label: 'New Tab',
              value: '_blank',
            },
          ],
          defaultValue: '_self',
        },
      ],
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
