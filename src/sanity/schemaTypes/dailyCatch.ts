import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dailyCatch',
  title: 'Daily Catch',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Catch Photo',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*,.heic,.heif', // Accept HEIC files
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 3,
      placeholder: 'Tell us about this catch...',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'species',
      title: 'Species Caught',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Blue Marlin', value: 'blue-marlin'},
          {title: 'Striped Marlin', value: 'striped-marlin'},
          {title: 'Ahi (Yellowfin Tuna)', value: 'ahi'},
          {title: 'Mahi Mahi', value: 'mahi-mahi'},
          {title: 'Ono (Wahoo)', value: 'ono'},
          {title: 'Spearfish', value: 'spearfish'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'charterType',
      title: 'Charter Type',
      type: 'string',
      options: {
        list: [
          {title: '3/4 Day', value: '34-day'},
          {title: 'Full Day', value: 'full-day'},
          {title: 'Extravaganza', value: 'extravaganza'},
          {title: 'Custom', value: 'custom'},
        ],
      },
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
      const dateObj = new Date(date)
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      return {
        title: title || 'Daily Catch',
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