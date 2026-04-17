import { defineField, defineType } from "sanity";

export default defineType({
  name: "premiumLearningSection4",
  title: "Premium Learning Section 4",
  type: "document",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "highlightWord",
      title: "Highlight Word (e.g. Learning)",
      type: "string",
    }),

    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "image",
      type: "image",
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Feature Description",
              type: "text",
            }),
            defineField({
              name: "icon",
              title: "Feature Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "testimonialSectionTitle",
      title: "Testimonial Section Title",
      type: "string",
      initialValue: "What Student`s Say",
    }),

    defineField({
      name: "testimonialText",
      title: "Testimonial Text",
      type: "text",
    }),
  ],
});