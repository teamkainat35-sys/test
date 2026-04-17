// sanity/schemas/tracksSection.ts
import { defineType, defineField } from "sanity";

export const tracksSection = defineType({
  name: "tracksSection",
  title: "Tracks Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Our Tracks",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),

    // Top 3 features (purple box)
    defineField({
      name: "features",
      title: "Top Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "icon",
              type: "image",
              title: "Icon",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    // Courses list
    defineField({
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "reference", to: [{ type: "course" }] }],
    }),
  ],
})