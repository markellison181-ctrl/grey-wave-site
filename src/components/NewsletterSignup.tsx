'use client'

import { useState, useEffect } from 'react'
import { Mail, Check, AlertCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [referrer, setReferrer] = useState<string | null>(null)

  useEffect(() => {
    // Check for referrer parameter in URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const ref = urlParams.get('ref')
      if (ref) {
        setReferrer(ref)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          source: referrer ? 'referral' : 'website',
          referrer: referrer,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setMessage('Welcome to The Grey Wave! Check your email for a welcome message.')
      setEmail('')
    } catch (error: any) {
      setStatus('error')
      if (error.message.includes('already subscribed')) {
        setMessage('This email is already subscribed to The Grey Wave.')
      } else {
        setMessage(error.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="subscribe" className="bg-gradient-to-br from-navy-50 to-gold-50/20 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,28,46,0.05)_0%,transparent_50%)]"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
            Join The Grey Wave
          </h2>
          
          <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Get weekly insights on Canada's aging population, seniors housing market data, 
            and demographic trends. Every Tuesday, in your inbox.
          </p>
        </div>

        {referrer && (
          <div className="text-sm text-slate-600 mb-6 bg-gold-50 border border-gold-200 rounded-lg p-3 max-w-md mx-auto shadow-sm">
            👋 Referred by a colleague? Welcome to Canada's most data-driven seniors housing newsletter.
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={loading}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-navy-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg bg-white shadow-sm placeholder:text-navy-400"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="bg-navy-900 hover:bg-navy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        {status !== 'idle' && (
          <div className={`mt-4 p-4 rounded-lg flex items-center justify-center space-x-2 ${
            status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {status === 'success' ? (
              <Check className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span>{message}</span>
          </div>
        )}

        <p className="mt-8 text-navy-600">
          Weekly newsletter. No spam. Unsubscribe anytime.
        </p>

        <div className="mt-16 pt-12 border-t border-navy-200">
          <p className="text-navy-500 mb-8 font-medium">
            <strong className="text-navy-700">Data sources we track:</strong> Statistics Canada, CMHC, Provincial Housing Corporations, RHRA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-navy-600">
            <div className="text-center">
              <div className="font-semibold text-navy-900 text-lg mb-2">Demographics</div>
              <div className="leading-relaxed">Population projections, migration trends</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-navy-900 text-lg mb-2">Market Data</div>
              <div className="leading-relaxed">Vacancy rates, construction, absorption</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-navy-900 text-lg mb-2">Policy</div>
              <div className="leading-relaxed">Funding, regulations, budget analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}