import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'posts',
  collections: {
    posts: {
      name: 'Post', 
      pattern: 'posts/**/*.md', 
      schema: s.object({
        title: s.string().max(99), 
        slug: s.slug('posts'), 
        date: s.isodate(), 
        excerpt: s.excerpt(), 
        content: s.markdown() 
      })
    }
  }
})