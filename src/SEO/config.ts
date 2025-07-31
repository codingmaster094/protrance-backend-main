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
            beforeChange: [async ({ value }) => value || process.env.BASE_DOMAIN],
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
    {
      name: 'structuredData',
      type: 'json',
      admin: {
        hidden: true,
      },
      hooks: {
        afterRead: [
          ({ siblingData }) => {
            const meta = siblingData?.meta || {}

            return {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: meta.title || 'PROTRANCE Sandra Kircher',
              description: meta.description || 'Hypnose am Bodensee',
              url: meta.canonicalUrl || 'https://protrance.de',
              image: meta.image?.url,
              telephone: '+49 7556 2476 007',
              email: 'info@protrance.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Alte Poststr. 12',
                addressLocality: 'Uhldingen',
                postalCode: '88690',
                addressCountry: 'DE',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Monday',
                  opens: '00:00',
                  closes: '00:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Tuesday',
                  opens: '08:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Wednesday',
                  opens: '08:00',
                  closes: '12:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Thursday',
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Friday',
                  opens: '08:00',
                  closes: '12:00 Uhr Sowie nach Vereinbarung.',
                },
              ],
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Zusätzliche Termine',
                  value: 'sowie nach Vereinbarung',
                },
              ],
            }
          },
        ],
      },
    },
  ],
  label: false,
}
