import type { Field } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'


export const SEO: Field = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'meta',
      label: 'SEO',
      type: 'group', 
      fields: [
        MetaTitleField({ hasGenerateFn: true }),
        MetaDescriptionField({ hasGenerateFn: true }),
        MetaImageField({ relationTo: 'media' }),
        {
          name: 'canonicalUrl',
          label: 'Canonical URL',
          type: 'text',
          hooks: {
            beforeChange: [async ({ value }) => (value ? value : process.env.BASE_DOAMAIN)],
          },
        },
        PreviewField({ hasGenerateFn: true }),
        OverviewField({
          titlePath: 'meta.title',
          descriptionPath: 'meta.description',
          imagePath: 'meta.image',
        }),
      ],
    },
  ],
  label: false,
}
