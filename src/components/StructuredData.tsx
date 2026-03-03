interface StructuredDataProps {
  type: 'website' | 'newsletter' | 'article'
  title: string
  description: string
  url: string
  image?: string
  author?: {
    name: string
    url?: string
  }
  publisher?: {
    name: string
    logo: string
  }
  datePublished?: string
  dateModified?: string
}

export default function StructuredData({
  type,
  title,
  description,
  url,
  image,
  author,
  publisher,
  datePublished,
  dateModified
}: StructuredDataProps) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'newsletter' ? 'NewsMediaOrganization' : 'Article',
    name: title,
    description,
    url,
    ...(image && { image }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url })
      }
    }),
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher.name,
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo
        }
      }
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified })
  }

  // Additional schema for newsletter/publication
  if (type === 'newsletter') {
    Object.assign(baseStructuredData, {
      '@type': 'NewsMediaOrganization',
      foundingDate: '2026-03-04',
      areaServed: 'Canada',
      knowsAbout: [
        'Seniors Housing',
        'Demographics',
        'Real Estate',
        'Healthcare',
        'Government Policy'
      ],
      specialty: 'Data-driven analysis of Canada\'s seniors housing market and demographic trends'
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseStructuredData, null, 2)
      }}
    />
  )
}

export function NewsletterStructuredData() {
  return (
    <StructuredData
      type="newsletter"
      title="The Grey Wave - Canadian Seniors Housing Newsletter"
      description="Canada's premier newsletter on seniors housing and demographic trends. Weekly data-driven analysis by Calgary-based expert James Baxter."
      url="https://seniorshousingcanada.ca"
      image="https://seniorshousingcanada.ca/api/og?title=The%20Grey%20Wave&subtitle=Data-driven%20seniors%20housing%20intelligence&category=Newsletter"
      author={{
        name: "James Baxter",
        url: "https://x.com/jamesbaxter_cre"
      }}
      publisher={{
        name: "The Grey Wave",
        logo: "https://seniorshousingcanada.ca/api/og?title=The%20Grey%20Wave&subtitle=Logo&category=Brand"
      }}
    />
  )
}