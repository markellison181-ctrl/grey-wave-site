import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import KeyStatistics from '@/components/KeyStatistics'
import SocialShare from '@/components/SocialShare'
import { generateMetadata as generateMetaTags } from '@/components/MetaTags'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetaTags({
  title: "The Grey Wave - Canada's most data-driven seniors housing newsletter",
  description: "Weekly analysis from James Baxter tracking Canada's aging crisis with CMHC data, StatsCan projections, and market intelligence for operators and investors.",
  image: "/api/og?title=The%20Grey%20Wave&subtitle=Data-driven%20seniors%20housing%20intelligence&category=Newsletter"
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Clean, Authoritative */}
      <section className="bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              The <span className="text-gold-400">Grey Wave</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-200 mb-12 max-w-3xl mx-auto leading-[1.6] font-light">
              Canada's most data-driven seniors housing newsletter. CMHC stopped tracking the sector in 2021. 
              I fill the gap with real market intelligence.
            </p>
            <p className="text-base text-navy-300 mb-12 font-medium">
              By <strong className="text-white">James Baxter</strong> <span className="text-navy-400">•</span> Calgary <span className="text-navy-400">•</span> Weekly, every Tuesday
            </p>
            
            <Link 
              href="#subscribe" 
              className="inline-flex items-center bg-white hover:bg-navy-50 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get the data
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics - Real Data Only */}
      <KeyStatistics />

      {/* What You Get - Simple Content-First */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
              Every Tuesday Morning
            </h2>
            <div className="prose prose-xl mx-auto text-navy-700 leading-relaxed">
              <p>
                Market data that CMHC no longer collects. Policy analysis you won't find elsewhere. 
                <strong>The intelligence that informs $100M+ acquisition and development decisions.</strong>
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Supply & Demand</h3>
              <div className="prose prose-lg text-navy-700 leading-relaxed">
                <p>
                  Construction permits by municipality. Project completions vs. population growth. 
                  Vacancy rates that operators don't publish. The fundamentals that drive cap rates 
                  and rent escalations.
                </p>
                <p className="text-base text-navy-600 font-medium">
                  Sources: CMHC Housing Starts, Municipal Building Permits, RHRA Database
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Demographics</h3>
              <div className="prose prose-lg text-navy-700 leading-relaxed">
                <p>
                  Which ridings have the most 75+ population growth. Where seniors are moving 
                  between provinces. Income distribution by age cohort. The demand drivers that 
                  most feasibility studies get wrong.
                </p>
                <p className="text-base text-navy-600 font-medium">
                  Sources: StatsCan CANSIM, Census, T1 Family File
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Policy Impact</h3>
              <div className="prose prose-lg text-navy-700 leading-relaxed">
                <p>
                  How federal budget changes affect CMHC loan programs. Provincial licensing 
                  requirements that add development costs. Zoning reforms that unlock sites. 
                  The policy environment shaping your pro formas.
                </p>
                <p className="text-base text-navy-600 font-medium">
                  Sources: Federal Budget, Provincial Housing Ministries, Regulatory Filings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Analysis - Featured Articles */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
              Latest Analysis
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed">
              Fresh market intelligence every week. Here's what operators are reading.
            </p>
          </div>
          
          {/* Featured Article */}
          <Link href="/blog/bc-seniors-housing-paradox-2026" className="block group mb-16">
            <article className="border-l-4 border-gold-400 pl-8 py-6 hover:pl-12 transition-all duration-300 bg-white/60 rounded-r-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-navy-600 text-sm">18 min read • March 3, 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors leading-tight">
                BC's Seniors Housing Paradox: Why the Most Expensive Province Has the Weakest Pipeline
              </h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Vancouver retirement suites average $8,200/month. Provincial vacancy sits at 2.3%. Yet BC's 
                seniors housing pipeline is the thinnest per capita in Canada. The math doesn't work for 
                families or investors.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full font-medium">BC</span>
                <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full font-medium">Development</span>
                <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full font-medium">Market Analysis</span>
              </div>
            </article>
          </Link>

          {/* Recent Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/blog/atlantic-canada-seniors-housing-boom-2026" className="block group">
              <article className="border-l-4 border-navy-200 pl-6 py-4 hover:pl-8 hover:border-navy-400 transition-all duration-300 bg-white/40 rounded-r-xl">
                <div className="text-navy-600 text-sm mb-3">March 3, 2026 • 12 min read</div>
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight">
                  Atlantic Canada's Quiet Seniors Housing Boom
                </h3>
                <p className="text-navy-700 mb-4 leading-relaxed">
                  While Ontario and BC struggle with expensive land and regulatory delays, Atlantic Canada offers 
                  compelling fundamentals: $280K/suite development costs vs $540K+ in BC.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-navy-100 text-navy-600 px-2 py-1 rounded font-medium">Atlantic Canada</span>
                  <span className="bg-navy-100 text-navy-600 px-2 py-1 rounded font-medium">Migration</span>
                </div>
              </article>
            </Link>

            <Link href="/blog/ontario-89000-unit-shortage-analysis" className="block group">
              <article className="border-l-4 border-navy-200 pl-6 py-4 hover:pl-8 hover:border-navy-400 transition-all duration-300 bg-white/40 rounded-r-xl">
                <div className="text-navy-600 text-sm mb-3">March 8, 2026 • 15 min read</div>
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight">
                  Ontario's 89,000 Unit Gap: Breaking Down the CMHC Numbers
                </h3>
                <p className="text-navy-700 mb-4 leading-relaxed">
                  CMHC projects Ontario needs 89,000 additional seniors housing units by 2035. Here's the 
                  regional breakdown and why current approaches won't close the gap.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-navy-100 text-navy-600 px-2 py-1 rounded font-medium">Ontario</span>
                  <span className="bg-navy-100 text-navy-600 px-2 py-1 rounded font-medium">CMHC</span>
                </div>
              </article>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center text-navy-800 hover:text-navy-900 font-semibold text-lg group">
              Read all analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-navy-600 mt-4">
              8 deep-dive reports • Updated weekly
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Final CTA */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Fill the CMHC Data Gap
          </h2>
          <p className="text-xl md:text-2xl text-navy-200 mb-12 leading-relaxed font-light">
            The market intelligence you need to make informed investment and development decisions.
          </p>
          <Link 
            href="#subscribe" 
            className="inline-flex items-center bg-white hover:bg-navy-50 text-navy-900 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Subscribe to The Grey Wave
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
          
          <div className="mt-12">
            <SocialShare 
              title="The Grey Wave - Essential data on Canada's seniors housing crisis" 
              className="justify-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}