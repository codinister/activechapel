import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'welcomeMessage',
  title: 'Welcome Message',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Welcome Message',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardFour'
    }),
  ],
});
