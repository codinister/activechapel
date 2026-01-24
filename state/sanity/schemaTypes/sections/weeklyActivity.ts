import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'weeklyActivity',
  title: 'Weekly Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Weekly Activity',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'cardFour'}]
    }),
  ],
});
