import { defineField, defineType } from "sanity";

export default defineType({
  name: "premiumLearningSection5",
  title: "Premium Learning Section 5",
  type: "document",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "What Our Students Say",
    }),

    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),

    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
            }),

            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),

            defineField({
              name: "role",
              title: "Role / Profession",
              type: "string",
            }),

            defineField({
              name: "avatar",
              title: "Profile Image",
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
      name: "settings",
      title: "Carousel Settings",
      type: "object",
      fields: [
        defineField({
          name: "autoplay",
          title: "Autoplay",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "autoplaySpeed",
          title: "Autoplay Speed (ms)",
          type: "number",
          initialValue: 5000,
        }),
        defineField({
          name: "showDots",
          title: "Show Dots",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "itemsDesktop",
          title: "Items (Desktop)",
          type: "number",
          initialValue: 3,
        }),
        defineField({
          name: "itemsTablet",
          title: "Items (Tablet)",
          type: "number",
          initialValue: 2,
        }),
        defineField({
          name: "itemsMobile",
          title: "Items (Mobile)",
          type: "number",
          initialValue: 1,
        }),
      ],
    }),
  ],
});