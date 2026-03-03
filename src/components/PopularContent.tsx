'use client'

import { TrendingUp, Eye, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PopularItem {
  title: string
  description: string
  href: string
  views: string
  readTime: string
  category: string
  trending?: boolean
  isNew?: boolean
}

const popularItems: PopularItem[] = [
  {
    title: "Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means",
    description: "15 years of building seniors housing tells us what happens when a market gets this tight.",
    href: "/blog/calgary-seniors-housing-crisis-2026",
    views: "2.1K",
    readTime: "6 min",
    category: "Market Analysis",
    trending: true
  },
  {
    title: "The Math Nobody Wants to Do: 2.1M Canadians Turning 75",
    description: "Current capacity vs. coming demand - the numbers that should terrify every Canadian.",
    href: "/newsletter/issue-1",
    views: "1.8K", 
    readTime: "8 min",
    category: "Demographics",
    trending: true
  },
  {
    title: "Why Every Retirement Home Has a 14-Month Waitlist",
    description: "Inside the supply-demand mismatch that's creating impossible waitlists across Canada.",
    href: "/blog/waitlist-crisis-canada",
    views: "1.5K",
    readTime: "5 min", 
    category: "Industry Insights"
  },
  {
    title: "Ontario's 89,000 Unit Shortage: Where Private Investment Must Go",
    description: "Breaking down CMHC data by region to find the biggest opportunities.",
    href: "/blog/ontario-shortage-analysis",
    views: "1.2K",
    readTime: "7 min",
    category: "Investment",
    isNew: true
  },
  {
    title: "The $4.2B Government Gap: Why Private Capital Must Fill the Void",
    description: "Federal budget analysis reveals massive underfunding of seniors housing.",
    href: "/blog/funding-gap-analysis",
    views: "960",
    readTime: "9 min",
    category: "Policy"
  }
]

export default function PopularContent() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-2">
              Most Read This Week
            </h2>
            <p className="text-slate-600">
              What industry professionals are reading and sharing
            </p>
          </div>
          
          <div className="hidden sm:flex items-center text-sm text-slate-500">
            <TrendingUp className="h-4 w-4 mr-2" />
            Updated daily
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured/Top Article */}
          <div className="lg:row-span-2">
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </span>
                    <span className="text-gold-600 font-medium text-sm">
                      {popularItems[0].category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {popularItems[0].views}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {popularItems[0].readTime} read
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                  <Link href={popularItems[0].href} className="hover:text-navy-700">
                    {popularItems[0].title}
                  </Link>
                </h3>

                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  {popularItems[0].description}
                </p>

                <Link 
                  href={popularItems[0].href}
                  className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                >
                  Read full analysis
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>

          {/* List of other popular items */}
          <div className="space-y-4">
            {popularItems.slice(1).map((item, index) => (
              <article 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {item.trending && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                        <TrendingUp className="h-2 w-2 mr-1" />
                        Trending
                      </span>
                    )}
                    {item.isNew && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        New
                      </span>
                    )}
                    <span className="text-gold-600 font-medium text-xs">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-xs text-slate-500">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-navy-900 mb-2 leading-tight">
                  <Link href={item.href} className="hover:text-navy-700">
                    {item.title}
                  </Link>
                </h4>

                <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>

                <Link 
                  href={item.href}
                  className="inline-flex items-center text-navy-600 hover:text-navy-800 text-sm font-medium"
                >
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View all analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}