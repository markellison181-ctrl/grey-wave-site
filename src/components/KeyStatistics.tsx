'use client'

import { TrendingUp, Users, Home, Calendar } from 'lucide-react'

const statistics = [
  {
    icon: Users,
    number: '7.3M',
    label: 'Canadians 65+',
    description: 'Current population aged 65 and older',
    trend: '18.5% of population',
    source: 'StatsCan 2024'
  },
  {
    icon: TrendingUp,
    number: '2.1M',
    label: 'Turning 75 by 2032',
    description: 'Canadians entering highest-need age bracket',
    trend: '85% increase',
    source: 'StatsCan projections'
  },
  {
    icon: Home,
    number: '1.2%',
    label: 'National Vacancy',
    description: 'Seniors housing vacancy rate (Q3 2025)',
    trend: 'Record low',
    source: 'CMHC data'
  },
  {
    icon: Calendar,
    number: '18',
    label: 'Month waitlists',
    description: 'Average wait time for private-pay seniors housing',
    trend: 'Up from 12 months in 2022',
    source: 'Industry surveys'
  }
]

export default function KeyStatistics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-lg text-navy-700 max-w-3xl mx-auto">
            Canada faces an unprecedented demographic shift. Here's what StatsCan and CMHC data 
            show about our rapidly aging population and the housing crisis ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-navy-50 to-white p-6 rounded-xl border border-navy-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-gold-700" />
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
                  {stat.source}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="text-3xl font-bold text-navy-900 mb-1">{stat.number}</div>
                <div className="text-sm font-semibold text-navy-700 uppercase tracking-wide">{stat.label}</div>
              </div>
              
              <p className="text-sm text-navy-600 leading-relaxed mb-2">
                {stat.description}
              </p>

              <div className="text-xs text-gold-600 font-medium">
                {stat.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy-900 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Challenge Ahead</h3>
            <p className="text-navy-200 mb-6 max-w-3xl mx-auto">
              With national vacancy rates below 2% and construction not keeping pace with demand, 
              Canada needs urgent action. The Grey Wave tracks these trends weekly with sourced, 
              verifiable data—not speculation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gold-400">206K</div>
                <div className="text-navy-300 text-sm">Additional units needed by 2035</div>
                <div className="text-xs text-navy-400">CMHC estimates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">$4.2B</div>
                <div className="text-navy-300 text-sm">Annual investment gap</div>
                <div className="text-xs text-navy-400">Federal budget analysis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">8 years</div>
                <div className="text-navy-300 text-sm">Until peak demand hits</div>
                <div className="text-xs text-navy-400">StatsCan projections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}