import type { GlobalConfig } from 'payload'
import { revalidateReviews } from './hooks/revalidateReviews'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const Reviews: GlobalConfig = {
  slug: 'reviews',
  access: {
    read: () => true,
  },
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
          ]
        },
      }),
      label: false,
    },
    {
      name: 'nestedlogos',
      type: 'array',
      label: 'Nested logos',
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'logosImage',
              type: 'upload',
              label: 'logos Image',
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
      name: 'nestedReviews',
      type: 'array',
      label: 'Nested Reviews',
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
              label: 'Description',
            },
            {
              name: 'reviewImage',
              type: 'upload',
              label: 'profile Image',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'profile_name',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateReviews],
  },
}
