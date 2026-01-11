import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourBelieves',
  title: 'Our Believes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our Believes',
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
      of: [{ type: 'cardTwo' }],
    }),
  ],
});
