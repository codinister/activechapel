import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourMission',
  title: 'Our Mission',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'cardOne',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
