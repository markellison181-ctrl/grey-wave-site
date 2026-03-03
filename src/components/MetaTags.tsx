import { Metadata } from 'next'

interface MetaTagsProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title = "The Grey Wave - Canada's seniors housing crisis newsletter",
  description = "Weekly data-driven analysis from Calgary expert James Baxter. Track demographics, policy, and market trends that will reshape Canadian real estate.",
  image = "/og-image.png",
  url = "https://grey-wave-site.vercel.app",
  type = "website",
  publishedTime,
  author = "James Baxter",
  section = "Seniors Housing",
  tags = ["seniors housing", "Canadian demographics", "real estate", "Calgary", "market analysis"]
}: MetaTagsProps = {}): Metadata {
  const fullImage = image.startsWith('http') ? image : `${url}${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "The Grey Wave",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      type,
      ...(type === 'article' && publishedTime && {
        publishedTime,
        authors: [author],
        section,
        tags
      })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      creator: '@jamesbaxter_cre',
      site: '@jamesbaxter_cre'
    },
    authors: [{ name: author }],
    keywords: tags,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      }
    }
  }
}

// Default OG image generation utility
export function generateOGImageUrl(
  title: string, 
  subtitle?: string, 
  category?: string
): string {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
    ...(category && { category })
  })
  
  return `/api/og?${params.toString()}`
}