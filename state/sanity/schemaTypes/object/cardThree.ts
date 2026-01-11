import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cardThree',
  title: 'Card Three',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Title',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
});
