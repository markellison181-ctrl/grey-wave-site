import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { Twitter, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About James Baxter | The Grey Wave',
  description: 'Meet James Baxter, Calgary-based Canadian seniors housing expert and publisher of The Grey Wave newsletter.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                About James Baxter
              </h1>
              <p className="text-xl text-navy-700 mb-6">
                Calgary-based seniors housing expert with 15 years on the development side,
                tracking Canada's demographic transformation and its impact on real estate markets.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-navy-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Calgary, Alberta
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  15+ years experience
                </div>
                <div className="flex items-center">
                  <Twitter className="h-4 w-4 mr-2" />
                  <a href="https://x.com/jamesbaxter_cre" className="text-navy-900 hover:underline">
                    @jamesbaxter_cre
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-32 h-32 bg-navy-200 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-700 font-bold text-2xl">
                  JB
                </div>
                <div className="text-center">
                  <p className="font-semibold text-navy-900">James Baxter</p>
                  <p className="text-navy-600 text-sm">Seniors Housing Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-navy-700">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why I Write About Seniors Housing</h2>

            <p className="mb-6">
              The data is screaming, and not enough people are listening.
            </p>

            <p className="mb-6">
              I've spent 15 years on the development and lending side of seniors housing across Canada.
              I've watched occupancy rates, tracked construction pipelines, and analyzed demographic projections
              until my eyes bled. What keeps me up at night isn't just the numbers - it's how few people
              understand what's coming.
            </p>

            <p className="mb-6">
              By 2036, nearly one in four Canadians will be over 65. That's 10.9 million seniors, up from 7.3 million today.
              We need over 200,000 additional seniors housing units in the next decade. Not because I think so - because
              Statistics Canada and CMHC say so. The math is brutal and unforgiving.
            </p>

            <blockquote className="bg-gold-50 border-l-4 border-gold-500 p-6 mb-8 text-lg italic text-navy-800">
              "Every week I see operators, investors, and policymakers making decisions based on gut feeling instead
              of data. Meanwhile, the demographic tsunami builds offshore."
            </blockquote>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">The Problem with How We Talk About This</h3>

            <p className="mb-6">
              Most coverage of seniors housing sounds like a press release or a LinkedIn post. Lots of platitudes
              about "aging in place" and "quality of life." Not enough hard numbers about capture rates,
              absorption timelines, or construction costs per suite.
            </p>

            <p className="mb-6">
              I started The Grey Wave because someone needs to translate the data into English. CMHC reports don't
              write themselves into actionable insights. Provincial housing corporation databases don't automatically
              flag supply gaps. You have to dig.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">What I Do Now</h3>

            <p className="mb-6">
              These days I'm independent - consulting, advisory work, and this newsletter. Based in Calgary but
              tracking projects from St. John's to Vancouver. No specific employer to please, no corporate line to toe.
              Just the numbers and what they mean.
            </p>

            <p className="mb-6">
              Every week I pull vacancy rates from provincial regulators, track new construction starts, analyze
              demographic shifts by census metropolitan area, and watch what governments are actually funding versus
              what they're promising. The goal is simple: give people the information they need to make better decisions.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">What Makes This Different</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-navy-50 p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-gold-600 mb-3" />
                <h4 className="font-bold text-navy-900 mb-2">Real Data Only</h4>
                <p className="text-sm text-navy-700">
                  No speculation or opinions. Just StatsCan, CMHC, and provincial housing corporation data,
                  analyzed and explained clearly.
                </p>
              </div>

              <div className="bg-navy-50 p-6 rounded-lg">
                <MapPin className="h-8 w-8 text-gold-600 mb-3" />
                <h4 className="font-bold text-navy-900 mb-2">Regional Focus</h4>
                <p className="text-sm text-navy-700">
                  National trends matter, but the real action is at the provincial and metro level.
                  I track the data that matters for your market.
                </p>
              </div>
            </div>

            <p className="mb-8 text-lg">
              The Grey Wave isn't just about seniors housing — it's about understanding the biggest demographic 
              shift in Canadian history and what it means for our communities, our economy, and our future.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">Read the Latest</h3>
            
            <p className="mb-6">
              Every week, new data and analysis on Canada's seniors housing market. From CMHC releases to provincial 
              policy changes to market trends that matter for operators and investors.
            </p>
            
            <div className="bg-navy-50 p-6 rounded-lg mb-8">
              <p className="font-medium text-navy-900 mb-3">Latest articles and analysis:</p>
              <a 
                href="/blog" 
                className="text-gold-600 hover:text-gold-700 font-medium"
              >
                View all articles →
              </a>
            </div>

            <div className="bg-navy-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-navy-200 mb-4">
                Follow my analysis and join the conversation about Canada's housing future.
              </p>
              <a 
                href="https://x.com/jamesbaxter_cre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium"
              >
                <Twitter className="h-5 w-5 mr-2" />
                @jamesbaxter_cre on X
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  )
}