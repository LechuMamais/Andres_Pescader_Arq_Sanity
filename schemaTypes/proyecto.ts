import {defineType, defineField} from 'sanity'
import {categories} from './categories'

export default defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'proy_id',
      title: 'ID del Proyecto',
      type: 'string',
      description: 'Identificador único del proyecto',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Número para ordenar los proyectos manualmente',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: categories,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'hashTags',
      title: 'Hashtags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contenidoEspecifico',
      title: 'Contenido del proyecto',
      type: 'array',
      of: [{type: 'seccion'}],
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
    },
  },
})

/*export default defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'proy_id',
      title: 'ID del Proyecto',
      type: 'string',
      description: 'Identificador único del proyecto',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Número para ordenar los proyectos manualmente',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: categories,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'hashTags',
      title: 'Hashtags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contenidoEspecifico',
      title: 'Contenido Específico',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Título H1', value: 'h1'},
            {title: 'Título H2', value: 'h2'},
            {title: 'Cita', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Negrita', value: 'strong'},
              {title: 'Cursiva', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            }),
          ],
        },
        defineField({
          type: 'object',
          name: 'videoEmbed',
          title: 'Video embebido',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL del video',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
    },
  },
})
*/
