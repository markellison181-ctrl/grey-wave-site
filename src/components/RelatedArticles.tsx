import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

interface Article {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  readTime?: string
}

interface RelatedArticlesProps {
  currentArticle: string
  className?: string
}

const articles: Article[] = [
  {
    title: "Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means",
    slug: "calgary-seniors-housing-crisis-2026",
    description: "Calgary's seniors housing vacancy rate hit 0.8% in Q4 2025. Analysis of what happens when a market gets this tight.",
    date: "March 1, 2026",
    tags: ["Calgary", "Market Analysis", "Vacancy Rates"],
    readTime: "8 min read"
  },
  {
    title: "Ontario's 89,000 Unit Gap: Breaking Down the CMHC Numbers",
    slug: "ontario-89000-unit-shortage-analysis",
    description: "CMHC projects Ontario needs 89,000 additional seniors housing units by 2035. Regional breakdown and pipeline analysis.",
    date: "March 8, 2026",
    tags: ["Ontario", "Data Analysis", "CMHC"],
    readTime: "12 min read"
  }
]

export default function RelatedArticles({ currentArticle, className = '' }: RelatedArticlesProps) {
  // Filter out the current article and show related ones
  const relatedArticles = articles.filter(article => article.slug !== currentArticle).slice(0, 2)
  
  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <section className={`bg-navy-50 p-8 rounded-xl ${className}`}>
      <h3 className="text-2xl font-bold text-navy-900 mb-6">Related Analysis</h3>
      
      <div className="space-y-6">
        {relatedArticles.map((article) => (
          <article key={article.slug} className="bg-white p-6 rounded-lg border border-navy-100 hover:shadow-md transition-shadow">
            <div className="flex items-center text-sm text-navy-600 mb-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
              {article.readTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </>
              )}
            </div>
            
            <h4 className="text-xl font-bold text-navy-900 mb-3 hover:text-navy-700 transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h4>
            
            <p className="text-navy-700 mb-4 leading-relaxed">
              {article.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {article.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-navy-100 text-navy-700 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/blog/${article.slug}`}
                className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium text-sm"
              >
                Read analysis
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-navy-200">
        <Link 
          href="/blog"
          className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
        >
          View all analysis
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}