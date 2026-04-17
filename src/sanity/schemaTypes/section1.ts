
import { defineType, defineField } from "sanity";

export default defineType({
  name: "section1",
  title: "Section 1 - Hero",
  type: "document",

  fields: [
    // 🔹 Hero Heading
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Highlight Words (Smart, Future)
    defineField({
      name: "highlightWords",
      title: "Highlight Words",
      type: "array",
      of: [{ type: "string" }],
      description: "Words to highlight (e.g. Smart, Future)",
    }),

    // 🔹 Description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Background Image
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    // 🔹 Right Side Illustration Image
    defineField({
      name: "sideImage",
      title: "Side Illustration",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    // 🔹 Search Input
    defineField({
      name: "search",
      title: "Search Bar",
      type: "object",
      fields: [
        defineField({
          name: "placeholder",
          title: "Placeholder Text",
          type: "string",
          initialValue: "Search for a location...",
        }),
      ],
    }),

    // 🔹 Button (Continue)
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          initialValue: "Continue",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "headline",
      media: "sideImage",
    },
  },
});