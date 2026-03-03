'use client'

import { TrendingUp, Clock, ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface RecentAnalysis {
  title: string
  description: string
  href: string
  readTime: string
  category: string
  date: string
  dataSource: string
}

const recentAnalysis: RecentAnalysis[] = [
  {
    title: "Calgary's Seniors Housing Crunch: What 0.8% Vacancy Actually Means",
    description: "Calgary hit a record low 0.8% vacancy rate in Q4 2025. Using 15 years of CMHC data, here's what happens when a seniors housing market gets this tight.",
    href: "/analysis/calgary-vacancy-crisis-2026",
    readTime: "6 min",
    category: "Market Analysis",
    date: "March 3, 2026",
    dataSource: "CMHC, City of Calgary"
  }
]

export default function PopularContent() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Recent Analysis
          </h2>
          <p className="text-slate-600">
            Data-driven insights on Canada's seniors housing market
          </p>
        </div>

        {recentAnalysis.length > 0 ? (
          <div className="space-y-8">
            {recentAnalysis.map((item, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime} read
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    <Link href={item.href} className="hover:text-navy-700">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      <strong>Data sources:</strong> {item.dataSource}
                    </div>
                    
                    <Link 
                      href={item.href}
                      className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                    >
                      Read analysis
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-navy-100 p-6 rounded-full w-fit mx-auto mb-6">
              <TrendingUp className="h-12 w-12 text-navy-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              The Grey Wave launches March 4, 2026
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              The first issue will include deep-dive analysis of Calgary's record-low vacancy rates 
              and what it means for the national market.
            </p>
            <Link 
              href="#subscribe"
              className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get notified at launch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}