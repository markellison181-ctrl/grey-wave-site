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
      
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            Analysis & Insights
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            In-depth market analysis, demographic trends, and policy insights 
            for Canada's seniors housing industry.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="space-y-16">
            {/* Featured Article */}
            <Link href="/blog/seniors-housing-financing-crisis-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <span className="bg-gold-100 text-gold-800 px-4 py-2 rounded-full font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 3, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  The Seniors Housing Financing Crisis: What Actually Pencils in 2026
                </h2>
                
                <p className="text-xl text-navy-700 mb-8 leading-relaxed">
                  Construction costs up 47%, prime rates at 6.45%, and CMHC getting pickier. Here's the math 
                  on what actually gets built in this environment, and why most seniors housing projects 
                  can't find capital.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Financing</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">CMHC</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Development</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read full article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Recent Articles */}
            <Link href="/blog/ontario-89000-unit-shortage-analysis" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 8, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  Ontario's 89,000 Unit Gap: Breaking Down the CMHC Numbers
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                  CMHC projects Ontario needs 89,000 additional seniors housing units by 2035. Here's the 
                  regional breakdown, construction pipeline analysis, and why current approaches won't come 
                  close to closing the gap.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Data Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Ontario</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">CMHC</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/calgary-seniors-housing-crisis-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 1, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                  Calgary's seniors housing vacancy rate hit a record low 0.8% in Q4 2025. Here's what 
                  15 years of building seniors housing in Calgary has taught me about what happens when 
                  a market gets this tight.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Market Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Calgary</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Vacancy Rates</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Coming Soon Articles */}
            <div className="bg-navy-50 p-12 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">Coming Soon</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-gold-500 pl-8 py-4">
                  <div className="flex items-center text-sm text-navy-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 15, 2026</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    The $4.2B Federal Funding Gap: Where the Money Really Goes
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Analysis of federal budget allocations versus actual seniors housing need. 
                    How much money is actually flowing to construction, and what happens to the rest.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-8 py-4">
                  <div className="flex items-center text-sm text-navy-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 22, 2026</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    Why Every Provincial Housing Plan Ignores Seniors
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Provincial governments love announcing housing targets. But when you read the fine print, 
                    seniors housing gets maybe 5% of the attention. Here's why that's a problem.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-8 py-4">
                  <div className="flex items-center text-sm text-navy-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 29, 2026</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    BC vs Alberta: Two Models for Seniors Housing Policy
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    British Columbia and Alberta have taken completely different approaches to seniors housing 
                    development. Five years in, the results tell us everything about what works and what doesn't.
                  </p>
                </div>

                <div className="border-l-4 border-gold-500 pl-8 py-4">
                  <div className="flex items-center text-sm text-navy-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">April 5, 2026</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    The Memory Care Crisis: Why Dementia Housing is the Next Shortage
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Canada has 597,000 people with dementia today. By 2050: 1.7 million. The specialized 
                    housing they need barely exists. Here's what the math looks like.
                  </p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Browse by Topic</h3>
                <p className="text-xl text-navy-600 leading-relaxed">
                  Deep analysis across the key areas driving Canada's seniors housing market.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-navy-200 p-8 rounded-2xl text-center hover:shadow-lg hover:border-navy-300 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Market Analysis</h4>
                  <p className="text-navy-600 leading-relaxed">Vacancy rates, construction data, regional trends</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-8 rounded-2xl text-center hover:shadow-lg hover:border-navy-300 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Demographics</h4>
                  <p className="text-navy-600 leading-relaxed">Population projections, aging trends, migration patterns</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-8 rounded-2xl text-center hover:shadow-lg hover:border-navy-300 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Policy Analysis</h4>
                  <p className="text-navy-600 leading-relaxed">Government programs, funding, regulatory changes</p>
                </div>
                
                <div className="bg-white border border-navy-200 p-8 rounded-2xl text-center hover:shadow-lg hover:border-navy-300 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Regional Focus</h4>
                  <p className="text-navy-600 leading-relaxed">Province and city-specific analysis</p>
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