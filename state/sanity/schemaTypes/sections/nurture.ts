import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'nurture',
  title: 'Nurture',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'We Nurture',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'cardOne'}]
    }),
  ],
});
