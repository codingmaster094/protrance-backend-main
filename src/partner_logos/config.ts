import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const partnerlogo: Field = {
  name: 'partnerlogo',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
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
              name: 'partnerImage',
              type: 'upload',
              label: 'Partner Image',
              relationTo: 'media',
              required: false,
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
