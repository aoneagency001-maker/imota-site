import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Статья",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Краткое описание",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "date"
    }),
    defineField({
      name: "tags",
      title: "Теги",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "body",
      title: "Содержание",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Альтернативный текст"
            }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt"
    }
  }
});
