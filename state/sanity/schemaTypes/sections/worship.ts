import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'worship',
  title: 'Worship',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Worship',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'cardThree'}]
    }),
  ],
});
