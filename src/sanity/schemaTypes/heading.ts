import { defineType, defineField } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",

  fields: [
    // 🔹 Logo
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // 🔹 Brand Name (Book Store)
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Book Store",
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Navigation Links
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "isActive",
              title: "Active Link",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
    }),

    // 🔹 CTA Button (Sign in)
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "string",
          initialValue: "Sign in",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "brandName",
      media: "logo",
    },
  },
});
