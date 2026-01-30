import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caption',
  title: 'Caption',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'At Active Believers Chapel International, we give ourselves away so you will experience excellence and the love of God.',
    }),
  ],
});
