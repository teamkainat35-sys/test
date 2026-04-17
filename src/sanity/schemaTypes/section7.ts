import { defineField, defineType } from "sanity";

export default defineType({
  name: "premiumLearningSection7",
  title: "Premium Learning Section 7 (Footer)",
  type: "document",

  fields: [
    // ================= LEFT BRAND INFO =================
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    // ================= COMPANY LINKS =================
    defineField({
      name: "company",
      title: "Company Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),

    // ================= COURSES LINKS =================
    defineField({
      name: "courses",
      title: "Courses Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),

    // ================= SUPPORT LINKS =================
    defineField({
      name: "support",
      title: "Support Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),

    // ================= CONTACT INFO =================
    defineField({
      name: "contact",
      title: "Contact Info",
      type: "object",
      fields: [
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),

        defineField({
          name: "email",
          title: "Email",
          type: "string",
        }),

        defineField({
          name: "address",
          title: "Address",
          type: "text",
        }),
      ],
    }),

    // ================= COPYRIGHT =================
    defineField({
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      initialValue: "BookStore All Right Reserved, 2022",
    }),
  ],
});