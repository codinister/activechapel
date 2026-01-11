import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Hero Section',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardOne',
    }),
  ],
});
