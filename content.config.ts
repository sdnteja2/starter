import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean().default(false),
        date: z.date(),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
          alt: z.string(),
        }),
        icon: z.string().optional().editor({ input: 'icon' }),
      }),
    }),
    berita: defineCollection({
      type: 'page',
      source: 'berita/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['Alps', 'Himalaya', 'Pyrenees']).optional(),
        date: z.date(),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
          alt: z.string(),
        }),
      }),
    }),
    guru: defineCollection({
      type: 'page',
      source: 'guru/*.yml',
      schema: z.object({
        nama: z.string(),
        kelas: z.string(),
        foto: z.string().editor({ input: 'media' }),
        catatan: z.string(),
        nip: z.string(),
        nuptk: z.string(),
        jabatan: z.string(),
        pendidikan: z.string(),
        pelatihan: z.array(z.object({
          title: z.string(),
          tahun: z.string(),
        }),
        ),
      }),
    }),
  },
})
