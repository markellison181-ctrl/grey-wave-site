import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import KeyStatistics from '@/components/KeyStatistics'
import PopularContent from '@/components/PopularContent'
import ScrollSignup from '@/components/ScrollSignup'
import SocialShare, { ReferralShare } from '@/components/SocialShare'
import { generateMetadata as generateMetaTags } from '@/components/MetaTags'
import { ArrowRight, TrendingUp, Users, MapPin, Star, Share2 } from 'lucide-react'
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
              <Link href="#subscribe" className="btn-secondary text-lg px-8 py-4 relative">
                <span className="flex items-center">
                  Get Weekly Insights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  Free
                </div>
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                About James
              </Link>
            </div>
            
            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center space-x-6 text-navy-300">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">1,200+ readers</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 fill-current" />
                <span className="text-sm">Industry professionals</span>
              </div>
              <div className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                <span className="text-sm">Highly shareable</span>
              </div>
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

      {/* Popular Content */}
      <PopularContent />

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
                <Link href="/blog/calgary-seniors-housing-crisis-2026" className="hover:text-navy-700">
                  Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means
                </Link>
              </h3>
              <p className="text-navy-700 mb-3">
                Calgary's seniors housing vacancy rate hit a record low 0.8% in Q4 2025. Here's what 
                15 years of building seniors housing tells us about what happens when a market gets this tight.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>March 1, 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Market Analysis</span>
              </div>
            </article>

            <article className="border-l-4 border-gold-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Ontario's Seniors Housing Shortage: The 89,000 Unit Gap
              </h3>
              <p className="text-navy-700 mb-3">
                New CMHC data shows Ontario needs 89,000 additional seniors housing units by 2030. 
                We break down the numbers by region and analyze where private investment is most needed.
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <span>Coming March 8, 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Premium Analysis</span>
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
                <span>Coming March 15, 2026</span>
                <span className="mx-2">•</span>
                <span className="text-gold-600 font-medium">Policy Analysis</span>
              </div>
            </article>
          </div>

          <div className="text-center mt-8 space-x-6">
            <Link href="/blog" className="text-navy-700 hover:text-navy-900 font-medium">
              Read our analysis <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
            <Link href="/archive" className="text-navy-700 hover:text-navy-900 font-medium">
              Newsletter archive <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Referral sharing */}
          <ReferralShare />
        </div>
      </section>

      {/* Call-to-action section before footer */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Canada's Biggest Demographic Shift
          </h2>
          <p className="text-xl text-navy-200 mb-8">
            2.1 million Canadians turn 75 in the next 8 years. Get the weekly insights 
            that will help you navigate this unprecedented wave.
          </p>
          <Link 
            href="#subscribe" 
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Join The Grey Wave
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <div className="mt-6">
            <SocialShare 
              title="The Grey Wave - Essential reading on Canada's seniors housing crisis" 
              className="justify-center"
            />
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Scroll-triggered signup popup */}
      <ScrollSignup />
    </div>
  )
}