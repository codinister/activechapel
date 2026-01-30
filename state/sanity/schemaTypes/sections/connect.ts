import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'connect',
  title: 'Connect',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'How to Connect',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub title',
      type: 'string',
      initialValue: 'Get Involved',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'cardTwo'}]
    }),
  ],
});
