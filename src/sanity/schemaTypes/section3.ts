

import { defineField, defineType } from "sanity";

export default defineType({
    name: "premiumLearningSection",
    title: "Premium Learning Section",
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
            title: "Main Illustration",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        // defineField({
        //     name: "features",
        //     title: "Features",
        //     type: "array",
        //     of: [{ type: "featureItem" }],
        // }),
        // defineField({
        //     name: "courses",
        //     title: "Courses",
        //     type: "array",
        //     of: [{ type: "courseItem" }],
        // }),
    ]
});