import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Andres_Pescader_Arq',

  projectId: '3t9g3iys',
  dataset: 'andres_pescader_arq_01',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
