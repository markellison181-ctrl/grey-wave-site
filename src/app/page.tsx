import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import KeyStatistics from '@/components/KeyStatistics'
import { ArrowRight, TrendingUp, Users, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-gold-400">Grey Wave</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-200 mb-4 max-w-3xl mx-auto">
              Canada's demographic tsunami is here. Get the data, insights, and analysis 
              you need to navigate the seniors housing crisis.
            </p>
            <p className="text-lg text-navy-300 mb-8">
              Weekly newsletter by <strong>James Baxter</strong> • Calgary-based seniors housing expert
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#subscribe" className="btn-secondary text-lg px-8 py-4">
                Get Weekly Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                About James
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <KeyStatistics />

      {/* Market Insights Preview */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              What You'll Get Every Week
            </h2>
            <p className="text-lg text-navy-700">
              Data-driven analysis, not speculation. Real numbers from trusted sources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gold-100 p-3 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Market Trends</h3>
              <p className="text-navy-700 mb-4">
                Provincial vacancy rates, construction starts, and absorption data. 
                Track which markets are tightening and where opportunities exist.
              </p>
              <ul className="text-sm text-navy-600 space-y-2">
                <li>• Monthly CMHC vacancy updates</li>
                <li>• Construction pipeline analysis</li>
                <li>• Regional market comparisons</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gold-100 p-3 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Demographics Deep-Dive</h3>
              <p className="text-navy-700 mb-4">
                StatsCan data broken down into actionable insights. Population projections, 
                income trends, and housing preferences by age cohort.
              </p>
              <ul className="text-sm text-navy-600 space-y-2">
                <li>• Age-specific population growth</li>
                <li>• Income and wealth patterns</li>
                <li>• Regional migration trends</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gold-100 p-3 rounded-lg w-fit mb-6">
                <MapPin className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Policy & Investment</h3>
              <p className="text-navy-700 mb-4">
                Track federal and provincial funding announcements, regulatory changes, 
                and their real impact on seniors housing development.
              </p>
              <ul className="text-sm text-navy-600 space-y-2">
                <li>• Government funding programs</li>
                <li>• Zoning and regulatory updates</li>
                <li>• Investment flow analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Recent Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Recent Analysis
          </h2>
          
          <div className="space-y-8">
            <article className="border-l-4 border-gold-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Ontario's Seniors Housing Shortage: The 89,000 Unit Gap
              </h3>
              <p className="text-navy-700 mb-3">
                New CMHC data shows Ontario needs 89,000 additional seniors housing units by 2030. 
                We break down the numbers by region and analyze where private investment is most needed.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>March 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Premium Analysis</span>
              </div>
            </article>

            <article className="border-l-4 border-gold-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Why Calgary's Seniors Housing Market is Overheating
              </h3>
              <p className="text-navy-700 mb-3">
                Vacancy rates hit 0.8% in Q4 2025, the lowest on record. Immigration patterns 
                and interprovincial migration are creating unexpected demand pressures.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>February 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Market Focus</span>
              </div>
            </article>

            <article className="border-l-4 border-gold-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                The $4.2B Investment Gap: Where the Money Needs to Go
              </h3>
              <p className="text-navy-700 mb-3">
                Our analysis of federal budget allocations versus actual need shows a massive 
                funding shortfall. Here's how private capital can fill the gap.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>January 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Policy Analysis</span>
              </div>
            </article>
          </div>

          <div className="text-center mt-8">
            <Link href="/archive" className="text-navy-700 hover:text-navy-900 font-medium">
              View all analysis <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}