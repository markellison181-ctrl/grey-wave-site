'use client'

export default function KeyStatistics() {
  return (
    <section className="py-24 bg-white border-b border-navy-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
            The Data CMHC Stopped Tracking
          </h2>
          <div className="prose prose-xl mx-auto text-navy-700 leading-relaxed">
            <p>
              CMHC killed their Seniors Housing Survey in 2021—the only comprehensive dataset 
              tracking vacancy rates, rents, and demand across Canadian seniors residences. 
              <strong>We're flying blind on a $50 billion industry.</strong>
            </p>
          </div>
        </div>

        {/* Simple data presentation - no cards, no icons */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-navy-900 mb-4">7.3M</div>
            <div className="text-xl text-navy-600 mb-2">Canadians aged 65+</div>
            <div className="text-navy-500">18.5% of population • StatsCan 2024</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">2.1M</div>
              <div className="text-navy-600">Turning 75 by 2032</div>
              <div className="text-sm text-navy-500 mt-1">85% increase</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">1.2%</div>
              <div className="text-navy-600">National vacancy rate</div>
              <div className="text-sm text-navy-500 mt-1">Record low, Q3 2025</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">18</div>
              <div className="text-navy-600">Month waitlists</div>
              <div className="text-sm text-navy-500 mt-1">Up from 12 in 2022</div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-navy-200">
          <blockquote className="text-2xl md:text-3xl font-light italic text-navy-800 text-center leading-relaxed">
            "Without centralized market data, operators make multi-million dollar decisions 
            based on gut feel and outdated demographics."
          </blockquote>
        </div>
      </div>
    </section>
  )
}