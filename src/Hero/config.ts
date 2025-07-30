import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  EXPERIMENTAL_TableFeature,
  //   UnorderedListFeature, // This enables <ul>
  //   OrderedListFeature, // This enables <ol>
} from '@payloadcms/richtext-lexical'


export const Hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
   {
  name: 'container_Hight',
  type: 'select',
  options: [
    {
      label: 'Full',
      value: 'full',
    },
    {
      label: 'Normal',
      value: 'normal',
    },
  ],
  required: true, 
  defaultValue: 'normal', 
},
   {
  name: 'Image_Position',
  type: 'select',
  options: [
    {
      label: 'Top',
      value: 'top',
    },
    {
      label: 'Middle',
      value: 'middle',
    },
    {
      label: 'Bottam',
      value: 'bottam',
    },
  ],
  required: true, // optional: set to true if you want this field to be mandatory
  defaultValue: 'middle', // optional: set default
},
    {
      name: 'heroImage',
      type: 'upload',
      label: 'Hero Image',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'richText',
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
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
