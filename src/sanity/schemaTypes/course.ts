import { defineType, defineField } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. UI/UX Design",
    }),
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g. 22hr 30min",
    }),
    defineField({
      name: "lessons",
      title: "Lessons",
      type: "number",
    }),
    defineField({
      name: "students",
      title: "Students",
      type: "number",
    }),
    defineField({
      name: "ctaText",
      title: "Button Text",
      type: "string",
      initialValue: "Join Course",
    }),
  ],
});
 