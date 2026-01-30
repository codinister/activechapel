import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'family',
  title: 'Family',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Becoming a Family Through Church',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardOne'
    }),
  ],
});
