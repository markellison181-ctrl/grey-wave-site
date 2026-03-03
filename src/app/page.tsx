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

      {/* Sample Analysis - Content First */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
              Sample Analysis
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed">
              The kind of market intelligence you'll get every week.
            </p>
          </div>
          
          <Link href="/blog/calgary-seniors-housing-crisis-2026" className="block group">
            <article className="border-l-4 border-navy-900 pl-8 py-6 hover:pl-12 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors leading-tight">
                Calgary's 0.8% Vacancy: Tightest Market in 15 Years
              </h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Calgary hit 0.8% vacancy in Q4 2025—the lowest rate since CMHC began tracking. 
                Construction permits are up 40% YoY, but delivery won't hit until 2027. What this means for operators and cap rates.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600">
                <span className="font-medium">March 3, 2026</span>
                <span className="text-navy-400">•</span>
                <span>Market Analysis</span>
                <span className="text-navy-400">•</span>
                <span>Data: CMHC, City of Calgary</span>
              </div>
            </article>
          </Link>

          <div className="text-center mt-16 pt-12 border-t border-navy-200">
            <p className="text-navy-600 mb-6 text-lg">
              The Grey Wave launches Tuesday, March 4th.
            </p>
            <Link href="#subscribe" className="inline-flex items-center text-navy-800 hover:text-navy-900 font-semibold text-lg group">
              Subscribe now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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