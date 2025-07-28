import type { Field } from 'payload'

export const Blog_List_Title: Field = {
  name: 'blog_list_title',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
  ],
  label: false,
}
