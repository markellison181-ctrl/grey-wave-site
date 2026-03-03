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
  title: "The Grey Wave - Canada's seniors housing crisis newsletter",
  description: "Weekly data-driven analysis from Calgary expert James Baxter. Track demographics, policy, and market trends that will reshape Canadian real estate.",
  image: "/api/og?title=The%20Grey%20Wave&subtitle=Canada's%20biggest%20demographic%20shift%20in%20history%20is%20here&category=Newsletter"
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
              Canada's seniors housing market is broken. Every week, I break down the data 
              that explains why—and what it means for operators, investors, and developers.
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
              The Numbers Everyone's Ignoring
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              While politicians debate housing policy, the seniors housing crisis deepens. Here's what the data actually shows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-7 w-7 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-red-900">Supply Crisis</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-red-900 mb-2">1.2%</div>
                  <div className="text-red-700 leading-relaxed">National vacancy rate in seniors housing (Q3 2025)</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-red-900 mb-2">18 months</div>
                  <div className="text-red-700 leading-relaxed">Average waitlist for private-pay seniors housing</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-7 w-7 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-blue-900">Demand Tsunami</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">2.1M</div>
                  <div className="text-blue-700 leading-relaxed">Canadians turning 75 in the next 8 years</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">206,000</div>
                  <div className="text-blue-700 leading-relaxed">Additional seniors housing units needed by 2035</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 text-white p-12 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 text-center leading-relaxed">
              "The demographic tsunami is here. We need data-driven solutions, not political soundbites."
            </blockquote>
            <p className="text-navy-200 text-center text-lg leading-relaxed max-w-3xl mx-auto">
              Every Tuesday, I cut through the noise with StatsCan data, CMHC reports, 
              and provincial housing data. No fluff, no predictions—just what the numbers actually show.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              What You'll Get Every Week
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Data-driven insights delivered every Tuesday. No fluff, no speculation—just the numbers that matter.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Market Data</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                CMHC vacancy rates, construction starts, absorption data. Which markets are tightening, 
                which have opportunities.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: CMHC, StatsCan, Provincial Housing Corporations
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Demographics Deep-Dive</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Population projections, income trends, migration patterns. The data that drives 
                demand in each province.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: StatsCan Population Estimates and Projections
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Policy Analysis</h3>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Federal and provincial funding announcements, regulatory changes, and their 
                real impact on development economics.
              </p>
              <div className="text-sm text-navy-600 font-medium uppercase tracking-wide">
                Sources: CMHC, Federal Budget Documents, Provincial Housing Strategies
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
              Recent Analysis
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Deep-dive analysis on the trends reshaping Canada's seniors housing market.
            </p>
          </div>
          
          <div className="space-y-12">
            <Link href="/blog/calgary-seniors-housing-crisis-2026" className="block group">
              <article className="border-l-4 border-gold-500 pl-8 py-6 hover:pl-10 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors leading-tight">
                  Calgary's Seniors Housing Crunch: What 0.8% Vacancy Actually Means
                </h3>
                <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                  Calgary hit a record low 0.8% vacancy rate in Q4 2025. Using 15 years of CMHC data, 
                  here's what happens when a seniors housing market gets this tight.
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
              The Grey Wave launches March 4, 2026. Subscribe to get the first issue.
            </p>
            <Link href="#subscribe" className="inline-flex items-center text-navy-800 hover:text-navy-900 font-semibold text-lg group">
              Join the waiting list 
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
            Canada's Biggest Demographic Shift Is Here
          </h2>
          <p className="text-xl md:text-2xl text-navy-200 mb-12 leading-relaxed font-light">
            Don't make decisions based on gut feelings. Get the data.
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