import type { GlobalConfig } from 'payload'

export const menus: GlobalConfig = {
  slug: 'menus',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'menus',
      label: 'Menus',
      type: 'array',
      fields: [
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
          name: 'submenus',
          label: 'Submenus',
          type: 'array',
          fields: [
            {
              name: 'links',
              label: 'Submenu Links',
              type: 'array',
              fields: [
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
      ],
    },
  ],
}
