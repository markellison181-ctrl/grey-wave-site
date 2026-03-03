import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Grey Wave',
  description: 'In-depth analysis and insights on Canadian seniors housing, demographics, and market trends by James Baxter.',
  openGraph: {
    title: 'Blog | The Grey Wave',
    description: 'In-depth analysis and insights on Canadian seniors housing, demographics, and market trends.',
    type: 'website',
  },
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Analysis & Insights
          </h1>
          <p className="text-xl text-navy-200 mb-8">
            In-depth market analysis, demographic trends, and policy insights 
            for Canada's seniors housing industry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {/* Featured Article */}
            <article className="border-b border-gray-200 pb-12">
              <div className="flex items-center space-x-4 text-sm text-navy-600 mb-4">
                <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 3, 2026</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>James Baxter</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-navy-900 mb-4 hover:text-navy-700 transition-colors">
                <Link href="/blog/seniors-housing-financing-crisis-2026">
                  The Seniors Housing Financing Crisis: What Actually Pencils in 2026
                </Link>
              </h2>
              
              <p className="text-lg text-navy-700 mb-6 leading-relaxed">
                Construction costs up 47%, prime rates at 6.45%, and CMHC getting pickier. Here's the math 
                on what actually gets built in this environment, and why most seniors housing projects 
                can't find capital.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-navy-600">
                  <span className="bg-navy-100 px-2 py-1 rounded">Financing</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">CMHC</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">Development</span>
                </div>
                <Link 
                  href="/blog/seniors-housing-financing-crisis-2026"
                  className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                >
                  Read full article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>

            {/* Recent Articles */}
            <article className="border-b border-gray-200 pb-12">
              <div className="flex items-center space-x-4 text-sm text-navy-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 8, 2026</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>James Baxter</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-navy-900 mb-4 hover:text-navy-700 transition-colors">
                <Link href="/blog/ontario-89000-unit-shortage-analysis">
                  Ontario's 89,000 Unit Gap: Breaking Down the CMHC Numbers
                </Link>
              </h2>
              
              <p className="text-navy-700 mb-6 leading-relaxed">
                CMHC projects Ontario needs 89,000 additional seniors housing units by 2035. Here's the 
                regional breakdown, construction pipeline analysis, and why current approaches won't come 
                close to closing the gap.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-navy-600">
                  <span className="bg-navy-100 px-2 py-1 rounded">Data Analysis</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">Ontario</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">CMHC</span>
                </div>
                <Link 
                  href="/blog/ontario-89000-unit-shortage-analysis"
                  className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>

            <article className="border-b border-gray-200 pb-12">
              <div className="flex items-center space-x-4 text-sm text-navy-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 1, 2026</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>James Baxter</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-navy-900 mb-4 hover:text-navy-700 transition-colors">
                <Link href="/blog/calgary-seniors-housing-crisis-2026">
                  Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means
                </Link>
              </h2>
              
              <p className="text-navy-700 mb-6 leading-relaxed">
                Calgary's seniors housing vacancy rate hit a record low 0.8% in Q4 2025. Here's what 
                15 years of building seniors housing in Calgary has taught me about what happens when 
                a market gets this tight.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-navy-600">
                  <span className="bg-navy-100 px-2 py-1 rounded">Market Analysis</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">Calgary</span>
                  <span className="bg-navy-100 px-2 py-1 rounded">Vacancy Rates</span>
                </div>
                <Link 
                  href="/blog/calgary-seniors-housing-crisis-2026"
                  className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>

            {/* Coming Soon Articles */}
            <div className="bg-navy-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Coming Soon</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gold-500 pl-6">
                  <div className="flex items-center text-sm text-navy-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 15, 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    The $4.2B Federal Funding Gap: Where the Money Really Goes
                  </h4>
                  <p className="text-navy-700">
                    Analysis of federal budget allocations versus actual seniors housing need. 
                    How much money is actually flowing to construction, and what happens to the rest.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-6">
                  <div className="flex items-center text-sm text-navy-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 22, 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Why Every Provincial Housing Plan Ignores Seniors
                  </h4>
                  <p className="text-navy-700">
                    Provincial governments love announcing housing targets. But when you read the fine print, 
                    seniors housing gets maybe 5% of the attention. Here's why that's a problem.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-6">
                  <div className="flex items-center text-sm text-navy-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 29, 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    BC vs Alberta: Two Models for Seniors Housing Policy
                  </h4>
                  <p className="text-navy-700">
                    British Columbia and Alberta have taken completely different approaches to seniors housing 
                    development. Five years in, the results tell us everything about what works and what doesn't.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-6">
                  <div className="flex items-center text-sm text-navy-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>April 5, 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    The Memory Care Crisis: Why Dementia Housing is the Next Shortage
                  </h4>
                  <p className="text-navy-700">
                    Canada has 597,000 people with dementia today. By 2050: 1.7 million. The specialized 
                    housing they need barely exists. Here's what the math looks like.
                  </p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Browse by Topic</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-navy-200 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-navy-900 mb-2">Market Analysis</h4>
                  <p className="text-sm text-navy-600">Vacancy rates, construction data, regional trends</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-navy-900 mb-2">Demographics</h4>
                  <p className="text-sm text-navy-600">Population projections, aging trends, migration patterns</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-navy-900 mb-2">Policy Analysis</h4>
                  <p className="text-sm text-navy-600">Government programs, funding, regulatory changes</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-navy-900 mb-2">Regional Focus</h4>
                  <p className="text-sm text-navy-600">Province and city-specific analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  )
}