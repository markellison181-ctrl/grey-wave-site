import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { Calendar, Lock, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Archive | The Grey Wave',
  description: 'Access past issues of The Grey Wave newsletter with data-driven analysis of Canadian seniors housing trends.',
}

export default function Archive() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Newsletter Archive
          </h1>
          <p className="text-xl text-navy-200 mb-8">
            Access past issues of The Grey Wave with in-depth analysis of Canada's 
            seniors housing market and demographic trends.
          </p>
          <div className="inline-flex items-center bg-gold-500 text-navy-900 px-6 py-3 rounded-lg font-semibold">
            <Calendar className="h-5 w-5 mr-2" />
            Weekly since March 2026
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-br from-gold-50 to-navy-50 p-8 rounded-xl mb-12 text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Archive Coming Soon</h2>
            <p className="text-lg text-navy-700 mb-6">
              The Grey Wave launches March 10, 2026. Subscribe now to get the first issue 
              in your inbox and access to all future archive content.
            </p>
            <Link href="#subscribe" className="btn-primary">
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Upcoming Issues Preview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">What's Coming</h2>
            
            <div className="space-y-6">
              <article className="bg-white border border-navy-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-sm text-navy-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issue #1 • March 10, 2026</span>
                  </div>
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                    Inaugural Issue
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  The State of Seniors Housing in Canada: A Data Deep Dive
                </h3>
                <p className="text-navy-700 mb-4">
                  Our comprehensive analysis of the current seniors housing landscape. Vacancy rates by province, 
                  construction pipeline analysis, and the demographic projections driving demand through 2036.
                </p>
                <div className="flex items-center text-navy-600">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Available to subscribers March 10</span>
                </div>
              </article>

              <article className="bg-white border border-navy-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-sm text-navy-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issue #2 • March 17, 2026</span>
                  </div>
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">
                    Regional Focus
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Ontario's 89,000 Unit Gap: Breaking Down the Numbers
                </h3>
                <p className="text-navy-700 mb-4">
                  Why Ontario faces the largest seniors housing shortage in Canada. Regional demand analysis, 
                  construction constraints, and where private investment can make the biggest impact.
                </p>
                <div className="flex items-center text-navy-600">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Available to subscribers March 17</span>
                </div>
              </article>

              <article className="bg-white border border-navy-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-sm text-navy-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issue #3 • March 24, 2026</span>
                  </div>
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">
                    Policy Analysis
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Federal Budget 2026: What's Actually New for Seniors Housing?
                </h3>
                <p className="text-navy-700 mb-4">
                  Cutting through the political announcements to analyze real funding flows, program changes, 
                  and what the federal budget means for developers and operators.
                </p>
                <div className="flex items-center text-navy-600">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Available to subscribers March 24</span>
                </div>
              </article>
            </div>
          </div>

          {/* Archive Features */}
          <div className="bg-navy-900 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Archive Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gold-400 mb-3">Full Text Search</h4>
                <p className="text-navy-200 text-sm">
                  Find specific data points, policy references, and market analysis 
                  across all past issues.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gold-400 mb-3">Data Downloads</h4>
                <p className="text-navy-200 text-sm">
                  CSV exports of key statistics and trend data featured 
                  in newsletter analysis.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gold-400 mb-3">Topic Categories</h4>
                <p className="text-navy-200 text-sm">
                  Browse by demographics, vacancy rates, construction data, 
                  policy analysis, and regional focus.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gold-400 mb-3">Mobile Optimized</h4>
                <p className="text-navy-200 text-sm">
                  Read past issues on any device with our responsive 
                  archive interface.
                </p>
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