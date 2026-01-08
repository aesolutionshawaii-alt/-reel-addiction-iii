import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*,.heic,.heif',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      placeholder: 'Optional caption...',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      date: 'date',
    },
    prepare(selection) {
      const {title, media, date} = selection
      const dateObj = date ? new Date(date) : new Date()
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
      return {
        title: title || 'Gallery Photo',
        subtitle: formattedDate,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
})