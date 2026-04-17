import { defineField, defineType } from "sanity";

export default defineType({
  name: "premiumLearningSection6",
  title: "Premium Learning Section 6 (Our Tracks)",
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
      type: "string",
    }),

    defineField({
      name: "tracks",
      title: "Tracks / Instructors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Profile Image",
              type: "image",
              options: { hotspot: true },
            }),

            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),

            defineField({
              name: "role",
              title: "Role",
              type: "string",
              description: "e.g. Professor @George Brown College",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),

            defineField({
              name: "category",
              title: "Category",
              type: "string",
              description: "e.g. Engineering physics",
            }),

            defineField({
              name: "instagram",
              title: "Instagram URL",
              type: "url",
            }),

            defineField({
              name: "linkedin",
              title: "LinkedIn URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
  ],
});