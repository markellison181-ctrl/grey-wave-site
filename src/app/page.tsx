import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import KeyStatistics from '@/components/KeyStatistics'
import PopularContent from '@/components/PopularContent'
import SocialShare from '@/components/SocialShare'
import { generateMetadata as generateMetaTags } from '@/components/MetaTags'
import { ArrowRight, TrendingUp, Users, AlertTriangle } from 'lucide-react'
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
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              The <span className="text-gold-400">Grey Wave</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-200 mb-12 max-w-3xl mx-auto leading-[1.6] font-light">
              Canada's most data-driven seniors housing newsletter. CMHC stopped tracking the sector in 2021. 
              I fill the gap with real market intelligence for operators and investors.
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

      {/* Market Reality Check - Hard Data */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              The CMHC Data Gap
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              CMHC killed the Seniors Housing Survey in 2021. Now operators are flying blind. 
              Here's what you're missing without centralized market data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-7 w-7 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-red-900">Market Tightness</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-red-900 mb-2">750+</div>
                  <div className="text-red-700 leading-relaxed">Licensed retirement homes in Ontario alone (RHRA registry)</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-red-900 mb-2">0.8%</div>
                  <div className="text-red-700 leading-relaxed">Calgary vacancy rate Q4 2025—tightest in 15 years</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-7 w-7 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-blue-900">Demographics</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">4.1%</div>
                  <div className="text-blue-700 leading-relaxed">Annual growth in Canada's 75+ population (StatsCan)</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">2031</div>
                  <div className="text-blue-700 leading-relaxed">Peak demand hits when boomers enter highest-need years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 text-white p-12 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 text-center leading-relaxed">
              "Without CMHC's Seniors Housing Survey, the market lacks the data infrastructure 
              that drives sound investment decisions."
            </blockquote>
            <p className="text-navy-200 text-center text-lg leading-relaxed max-w-3xl mx-auto">
              I track vacancy rates, construction starts, and demographic shifts across all provinces. 
              Data sources include StatsCan, CMHC, provincial housing corporations, and regulatory filings.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Weekly Market Intelligence
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Every Tuesday: vacancy data, construction permits, demographic shifts, and policy analysis. 
              The intel that CMHC no longer provides.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Supply & Demand Tracking</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Construction permits, project completions, vacancy rates by market. The fundamentals 
                that drive cap rate compression and rent growth.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: CMHC Housing Starts, Municipal Building Permits, RHRA Database
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Demographic Intelligence</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Population projections by age cohort, wealth distribution of seniors, interprovincial 
                migration. The demand drivers that inform acquisition and development decisions.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: StatsCan CANSIM Tables, Census, T1 Family File
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Policy & Capital Markets</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Federal transfer payments, provincial licensing changes, land use policy. 
                How government decisions affect your development pro formas and operating margins.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: Federal Budget, Provincial Housing Ministries, Regulatory Filings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Analysis */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Sample Analysis
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              The kind of market intelligence you'll get every week. Data-driven, sourced, actionable.
            </p>
          </div>
          
          <div className="space-y-12">
            <Link href="/blog/calgary-seniors-housing-crisis-2026" className="block group">
              <article className="border-l-4 border-gold-500 pl-8 py-6 hover:pl-10 transition-all duration-300">
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
                  <span className="text-gold-600 font-medium bg-gold-50 px-3 py-1 rounded-full">Market Analysis</span>
                  <span className="text-navy-400">•</span>
                  <span>Data: CMHC, City of Calgary</span>
                </div>
              </article>
            </Link>
          </div>

          <div className="text-center mt-16 pt-12 border-t border-navy-100">
            <p className="text-navy-600 mb-6 text-lg">
              The Grey Wave launches Tuesday, March 4th. Weekly market intelligence starts immediately.
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