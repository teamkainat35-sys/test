// export default {
//   name: "section8Newsletter",
//   title: "Section 8 - Newsletter",
//   type: "object",
//   fields: [
//     {
//       name: "title",
//       title: "Heading",
//       type: "string",
//       initialValue: "Subscribe to our newsletter",
//       validation: Rule => Rule.required()
//     },
//     {
//       name: "subtitle",
//       title: "Sub Text",
//       type: "text",
//       rows: 2,
//       initialValue: "Lorem Ipsum is simply dummy text of the printing."
//     },
//     {
//       name: "placeholder",
//       title: "Input Placeholder",
//       type: "string",
//       initialValue: "Email Address"
//     },
//     {
//       name: "buttonText",
//       title: "Button Text",
//       type: "string",
//       initialValue: "Send",
//       validation: Rule => Rule.required()
//     },
//     {
//       name: "backgroundColor",
//       title: "Background Color",
//       type: "string",
//       description: "Hex or Tailwind class",
//       initialValue: "#4B2C5E"
//     },
//     {
//       name: "textColor",
//       title: "Text Color",
//       type: "string",
//       initialValue: "#FFFFFF"
//     },
//     {
//       name: "buttonColor",
//       title: "Button Color",
//       type: "string",
//       initialValue: "#FF7A1A"
//     },
//     {
//       name: "buttonTextColor",
//       title: "Button Text Color",
//       type: "string",
//       initialValue: "#FFFFFF"
//     },
//     {
//       name: "decorations",
//       title: "Decorations (Optional)",
//       type: "object",
//       fields: [
//         {
//           name: "showCircles",
//           title: "Show Background Circles",
//           type: "boolean",
//           initialValue: true
//         },
//         {
//           name: "showArrow",
//           title: "Show Arrow Illustration",
//           type: "boolean",
//           initialValue: true
//         },
//         {
//           name: "showBulb",
//           title: "Show Bulb Icon",
//           type: "boolean",
//           type: "boolean",
//           initialValue: true
//         }
//       ]
//     }
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "subtitle"
//     }
//   }
// };

import { defineType, defineField } from "sanity";

export default defineType({
  name: "section8Newsletter",
  title: "Section 8 - Newsletter",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Sub Text",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "placeholder",
      title: "Input Placeholder",
      type: "string",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "Hex or Tailwind class",
    }),

    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
    }),

    defineField({
      name: "buttonColor",
      title: "Button Color",
      type: "string",
    }),

    defineField({
      name: "buttonTextColor",
      title: "Button Text Color",
      type: "string",
    }),

    defineField({
      name: "decorations",
      title: "Decorations",
      type: "object",
      fields: [
        defineField({
          name: "showCircles",
          title: "Show Background Circles",
          type: "boolean",
          initialValue: true,
        }),

        defineField({
          name: "showArrow",
          title: "Show Arrow Illustration",
          type: "boolean",
          initialValue: true,
        }),

        defineField({
          name: "showBulb",
          title: "Show Bulb Icon",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});