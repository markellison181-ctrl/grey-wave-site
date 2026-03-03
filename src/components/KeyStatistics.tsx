'use client'

import { TrendingUp, Users, Home, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const statistics = [
  {
    icon: Users,
    number: '7.3M',
    label: 'Canadians 65+',
    description: 'Expected to reach 10.9M by 2036',
    trend: '+49%'
  },
  {
    icon: TrendingUp,
    number: '23%',
    label: 'Population 65+',
    description: 'Projected share by 2036, up from 18.5% today',
    trend: '+4.5 pts'
  },
  {
    icon: Home,
    number: '206K',
    label: 'Seniors Housing Units',
    description: 'Additional units needed by 2035 across Canada',
    trend: 'Shortage'
  },
  {
    icon: Calendar,
    number: '2031',
    label: 'Peak Impact Year',
    description: 'When all baby boomers reach age 65',
    trend: '6 years'
  }
]

export default function KeyStatistics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-lg text-navy-700 max-w-3xl mx-auto">
            Canada faces an unprecedented demographic shift. Here's what the data shows 
            about our rapidly aging population and the housing challenge ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-50 to-white p-6 rounded-xl border border-navy-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-gold-700" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
              
              <p className="text-sm text-navy-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-navy-900 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge Ahead</h3>
              <p className="text-navy-200 mb-6">
                With vacancy rates in seniors housing below 2% nationally and construction 
                not keeping pace with demand, Canada needs urgent action. The Grey Wave 
                tracks these trends weekly with data-driven analysis.
              </p>
              <div className="flex space-x-6 text-sm">
                <div>
                  <div className="text-gold-400 font-semibold">1.8%</div>
                  <div className="text-navy-300">Avg. Vacancy Rate</div>
                </div>
                <div>
                  <div className="text-gold-400 font-semibold">15K</div>
                  <div className="text-navy-300">Units Under Construction</div>
                </div>
                <div>
                  <div className="text-gold-400 font-semibold">$4.2B</div>
                  <div className="text-navy-300">Investment Gap</div>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <blockquote className="text-xl italic text-navy-200 mb-4">
                "The demographic tsunami is here. We need data-driven solutions, not political soundbites."
              </blockquote>
              <cite className="text-gold-400 font-medium">— James Baxter</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}