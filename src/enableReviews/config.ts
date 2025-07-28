import type { Field } from 'payload'
export const Reviews: Field = {
  name: 'Reviews',
  type: 'group',
  fields: [
    {
      name: 'enableReviews',
      type: 'checkbox',
      label: 'Enable Reviews Section',
      defaultValue: true,
    },
  ],
  label: false,
}
