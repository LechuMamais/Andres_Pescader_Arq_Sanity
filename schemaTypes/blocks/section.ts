import {defineField, defineType} from 'sanity'

export const seccion = defineType({
  name: 'seccion',
  title: 'Sección de contenido',
  type: 'object',
  fields: [
    defineField({
      name: 'tipo',
      title: 'Tipo de contenido',
      type: 'string',
      options: {
        list: [
          {title: 'Texto', value: 'texto'},
          {title: 'Imagen', value: 'image'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'layout',
      title: 'Layout (Grilla de columnas)',
      type: 'object',
      fields: [
        {
          name: 'desktop',
          title: 'Desktop (≥1024px)',
          type: 'number',
          validation: (Rule) => Rule.min(1).max(12),
        },
        {
          name: 'tablet',
          title: 'Tablet (≥768px)',
          type: 'number',
          validation: (Rule) => Rule.min(1).max(12),
        },
        {
          name: 'mobile',
          title: 'Mobile (<768px)',
          type: 'number',
          validation: (Rule) => Rule.min(1).max(12),
        },
      ],
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [
        {type: 'block'}, // Texto enriquecido
        {type: 'image'}, // Imágenes (definimos un tipo de imagen)
      ],
    }),
    defineField({
      name: 'fondoColor',
      title: 'Color de fondo',
      type: 'string',
      options: {
        list: [
          {title: 'Blanco', value: 'white'},
          {title: 'Gris claro', value: 'lightgray'},
          {title: 'Negro', value: 'black'},
          {title: 'Transparente', value: 'transparent'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'padding',
      title: 'Espaciado interno (padding)',
      type: 'string',
    }),
  ],
})
