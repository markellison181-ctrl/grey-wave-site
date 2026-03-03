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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">The Story Behind The Grey Wave</h2>
            
            <p className="mb-6">
              I've been watching Canada's demographic shift unfold for over a decade. As a development professional 
              based in Calgary, I've seen firsthand how the aging of our population is creating both unprecedented 
              challenges and opportunities in the housing sector.
            </p>

            <p className="mb-6">
              The numbers are staggering: by 2036, nearly one in four Canadians will be over 65. That's 10.9 million 
              seniors, up from 7.3 million today. But here's what really keeps me up at night – we're nowhere near 
              ready for this demographic tsunami.
            </p>

            <blockquote className="bg-gold-50 border-l-4 border-gold-500 p-6 mb-8 text-lg italic text-navy-800">
              "The data doesn't lie. Canada needs over 200,000 additional seniors housing units by 2035. 
              That's not a prediction – it's mathematics."
            </blockquote>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">Why I Started This Newsletter</h3>
            
            <p className="mb-6">
              Too much of the conversation around seniors housing is based on anecdotes and political talking points. 
              The Grey Wave cuts through the noise with data-driven analysis from trusted sources like Statistics Canada 
              and CMHC.
            </p>

            <p className="mb-6">
              Every week, I dive into the latest numbers: vacancy rates, construction starts, demographic projections, 
              and policy changes. I translate complex data into actionable insights for developers, investors, 
              policymakers, and anyone who wants to understand where Canada's housing market is heading.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">My Background</h3>
            
            <p className="mb-6">
              With 15 years in the development industry, I've worked on projects across Western Canada, from affordable 
              housing initiatives to luxury seniors communities. I've seen what works, what doesn't, and what's needed 
              to address the coming housing crunch.
            </p>

            <p className="mb-6">
              My focus is purely on the data. I track population growth patterns, analyze migration trends, monitor 
              government spending, and follow construction pipelines. The goal is simple: provide the most accurate, 
              up-to-date picture of Canada's seniors housing landscape.
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

            <p className="mb-6 text-lg">
              The Grey Wave isn't just about seniors housing – it's about understanding the biggest demographic 
              shift in Canadian history and what it means for our communities, our economy, and our future.
            </p>

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