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
            <Link href="/blog/saskatchewan-manitoba-seniors-housing-2026" className="block group">
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
                  Saskatchewan & Manitoba Seniors Housing: The Forgotten Opportunity
                </h2>
                
                <p className="text-xl text-navy-700 mb-8 leading-relaxed">
                  While the coasts struggle with $8,000/month averages and tight land markets, the prairie provinces 
                  offer compelling demographics and development economics that most operators overlook.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Market Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Prairie Provinces</span>
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
            <Link href="/blog/bc-seniors-housing-paradox-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
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
                  BC's Seniors Housing Paradox: Why the Most Expensive Province Has the Weakest Pipeline
                </h2>
                
                <p className="text-xl text-navy-700 mb-8 leading-relaxed">
                  Vancouver retirement suites average $8,200/month. Provincial vacancy sits at 2.3%. Yet BC's 
                  seniors housing pipeline is the thinnest per capita in Canada. The math doesn't work for 
                  families or investors.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Market Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">BC</span>
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
            <Link href="/blog/atlantic-canada-seniors-housing-boom-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 3, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  Atlantic Canada's Quiet Seniors Housing Boom: Why the Smartest Developers Are Looking East
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                  While Ontario and BC struggle with expensive land and regulatory delays, Atlantic Canada offers 
                  compelling fundamentals: Ontario retiree migration, $280K/suite development costs vs $540K+ in BC, 
                  and CMHC financing advantages that smart money is starting to notice.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Market Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Atlantic Canada</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Migration</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/alberta-seniors-housing-opportunity-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 3, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  Alberta's Seniors Housing Opportunity: What the Oil Money Built and What Comes Next
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                  While BC deals with land constraints and Ontario wrestles with regulatory complexity, 
                  Alberta sits in a unique position that most operators and investors are only beginning 
                  to understand. The fundamentals are quietly stacking up.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Market Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Alberta</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Investment</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ontario-staffing-crisis-seniors-housing" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 3, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  Ontario's Seniors Housing Staffing Crisis: 40,000 Empty Shifts and What It Means for Families
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                  Every month, Ontario seniors housing facilities can't fill 40,000+ staff shifts. 
                  It's not just a numbers problem—it's reshaping how care gets delivered and 
                  what families can expect when they choose seniors housing.
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3 text-sm text-navy-600">
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Crisis Analysis</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Ontario</span>
                    <span className="bg-navy-100 px-3 py-1 rounded-full font-medium">Staffing</span>
                  </div>
                  <div className="inline-flex items-center text-navy-700 group-hover:text-navy-900 font-semibold group">
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/seniors-housing-financing-crisis-2026" className="block group">
              <article className="border-b border-navy-100 pb-16 hover:pb-12 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">March 3, 2026</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">James Baxter</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 group-hover:text-navy-700 transition-colors leading-tight">
                  The Seniors Housing Financing Crisis: What Actually Pencils in 2026
                </h2>
                
                <p className="text-lg text-navy-700 mb-8 leading-relaxed">
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
                    Read article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
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

            {/* Upcoming Analysis */}
            <div className="mt-20 pt-12 border-t border-navy-200">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Coming Up</h3>
                <p className="text-xl text-navy-600">Weekly analysis launches March 4th</p>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-navy-900 pl-8 py-4">
                  <div className="text-sm text-navy-600 mb-3">March 15, 2026</div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    The $4.2B Federal Funding Gap: Where the Money Really Goes
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Analysis of federal budget allocations versus actual seniors housing need. 
                    How much money is actually flowing to construction, and what happens to the rest.
                  </p>
                </div>

                <div className="border-l-4 border-navy-900 pl-8 py-4">
                  <div className="text-sm text-navy-600 mb-3">March 22, 2026</div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    Why Every Provincial Housing Plan Ignores Seniors
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Provincial governments love announcing housing targets. But when you read the fine print, 
                    seniors housing gets maybe 5% of the attention.
                  </p>
                </div>

                <div className="border-l-4 border-navy-900 pl-8 py-4">
                  <div className="text-sm text-navy-600 mb-3">March 29, 2026</div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    BC vs Alberta: Two Models for Seniors Housing Policy
                  </h4>
                  <p className="text-navy-700 text-lg leading-relaxed">
                    Two completely different approaches to seniors housing development. 
                    Five years in, the results tell us everything about what works and what doesn't.
                  </p>
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