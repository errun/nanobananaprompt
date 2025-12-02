import { groq } from 'next-sanity'

export const promptsQuery = groq`
  *[_type == "prompt"] | order(order asc, _createdAt desc) {
    _id,
    title,
    category,
    image,
    promptText,
    tags
  }
`

