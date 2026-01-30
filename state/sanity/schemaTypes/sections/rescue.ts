import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'rescue',
  title: 'Rescue',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Rescue',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardOne'
    }),
  ],
});
