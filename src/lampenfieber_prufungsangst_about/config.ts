import type { Field } from 'payload'

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
      label: 'Main Description',
    },
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
      name: 'description1',
      type: 'richText',
      label: 'Description-1',
    },
    {
      name: 'subdescription',
      type: 'richText',
      label: 'List Content',
    },
    {
      name: 'description2',
      type: 'richText',
      label: 'Description-2',
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
