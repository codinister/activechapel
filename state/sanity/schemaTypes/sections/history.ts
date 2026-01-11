import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'history',
  title: 'History',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our History',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardOne'
    }),
  ],
});
