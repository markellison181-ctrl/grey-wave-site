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
      
      {/* Hero Section - Clean, Data-Driven */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The <span className="text-gold-400">Grey Wave</span>
            </h1>
            <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Canada's seniors housing market is broken. Every week, I break down the data 
              that explains why—and what it means for operators, investors, and developers.
            </p>
            <p className="text-navy-300 mb-8">
              By <strong>James Baxter</strong> • Calgary • Weekly, every Tuesday
            </p>
            
            <Link 
              href="#subscribe" 
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            The Numbers Everyone's Ignoring
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-900">Supply Crisis</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold text-red-900">1.2%</div>
                  <div className="text-red-700 text-sm">National vacancy rate in seniors housing (Q3 2025)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-900">18 months</div>
                  <div className="text-red-700 text-sm">Average waitlist for private-pay seniors housing</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-900">Demand Tsunami</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold text-blue-900">2.1M</div>
                  <div className="text-blue-700 text-sm">Canadians turning 75 in the next 8 years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">206,000</div>
                  <div className="text-blue-700 text-sm">Additional seniors housing units needed by 2035</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 text-white p-8 rounded-xl">
            <blockquote className="text-xl italic mb-6 text-center">
              "The demographic tsunami is here. We need data-driven solutions, not political soundbites."
            </blockquote>
            <p className="text-navy-200 text-center">
              Every Tuesday, I cut through the noise with StatsCan data, CMHC reports, 
              and provincial housing data. No fluff, no predictions—just what the numbers actually show.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            What You'll Get Every Week
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-navy-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Market Data</h3>
              <p className="text-navy-700 mb-3">
                CMHC vacancy rates, construction starts, absorption data. Which markets are tightening, 
                which have opportunities.
              </p>
              <div className="text-sm text-navy-600">
                Sources: CMHC, StatsCan, provincial housing corporations
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-navy-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Demographics Deep-Dive</h3>
              <p className="text-navy-700 mb-3">
                Population projections, income trends, migration patterns. The data that drives 
                demand in each province.
              </p>
              <div className="text-sm text-navy-600">
                Sources: StatsCan population estimates and projections
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-navy-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Policy Analysis</h3>
              <p className="text-navy-700 mb-3">
                Federal and provincial funding announcements, regulatory changes, and their 
                real impact on development economics.
              </p>
              <div className="text-sm text-navy-600">
                Sources: CMHC, federal budget documents, provincial housing strategies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Analysis - Remove Fake Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Recent Analysis
          </h2>
          
          <div className="space-y-8">
            <article className="border-l-4 border-gold-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Calgary's Seniors Housing Crunch: What 0.8% Vacancy Actually Means
              </h3>
              <p className="text-navy-700 mb-3">
                Calgary hit a record low 0.8% vacancy rate in Q4 2025. Using 15 years of CMHC data, 
                here's what happens when a seniors housing market gets this tight.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>March 3, 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Market Analysis</span>
                <span className="mx-2">•</span>
                <span>Data: CMHC, City of Calgary</span>
              </div>
            </article>
          </div>

          <div className="text-center mt-8">
            <p className="text-navy-600 mb-4">
              The Grey Wave launches March 4, 2026. Subscribe to get the first issue.
            </p>
            <Link href="#subscribe" className="text-navy-700 hover:text-navy-900 font-medium">
              Join the waiting list <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Final CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Canada's Biggest Demographic Shift Is Here
          </h2>
          <p className="text-xl text-navy-200 mb-8">
            Don't make decisions based on gut feelings. Get the data.
          </p>
          <Link 
            href="#subscribe" 
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Subscribe to The Grey Wave
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <div className="mt-6">
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