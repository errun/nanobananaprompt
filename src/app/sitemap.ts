import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nanobananaprompt.art'

	  return [
	    {
	      url: baseUrl,
	      lastModified: new Date(),
	      changeFrequency: 'daily',
	      priority: 1,
	    },
	    {
	      url: `${baseUrl}/veo-prompt`,
	      lastModified: new Date(),
	      changeFrequency: 'weekly',
	      priority: 0.8,
	    },
	  ]
}