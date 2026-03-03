'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
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
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('id')
        .eq('email', email)
        .single()

      if (existingSubscriber) {
        setStatus('error')
        setMessage('This email is already subscribed to The Grey Wave.')
        setLoading(false)
        return
      }

      // Insert new subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([
          {
            email: email.toLowerCase(),
            source: referrer ? 'referral' : 'website',
            referrer: referrer,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setStatus('success')
      setMessage('You\'re on the list! The Grey Wave launches March 4, 2026.')
      setEmail('')
    } catch (error: any) {
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="subscribe" className="bg-gradient-to-br from-slate-50 to-gold-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gold-500 p-3 rounded-full">
            <Mail className="h-8 w-8 text-navy-900" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-navy-900 mb-4">
          Join The Grey Wave
        </h2>
        
        <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
          Get weekly insights on Canada's aging population, seniors housing market data, 
          and demographic trends. Every Tuesday, in your inbox.
        </p>

        {referrer && (
          <p className="text-sm text-slate-600 mb-6 bg-gold-50 border border-gold-200 rounded-lg p-3 max-w-md mx-auto">
            👋 Referred by a colleague? Welcome to Canada's most data-driven seniors housing newsletter.
          </p>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
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

        <p className="mt-6 text-sm text-slate-600">
          Weekly newsletter. No spam. Unsubscribe anytime.
        </p>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">
            <strong>Data sources we track:</strong> Statistics Canada, CMHC, Provincial Housing Corporations, RHRA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div>
              <div className="font-medium text-slate-800">Demographics</div>
              <div>Population projections, migration trends</div>
            </div>
            <div>
              <div className="font-medium text-slate-800">Market Data</div>
              <div>Vacancy rates, construction, absorption</div>
            </div>
            <div>
              <div className="font-medium text-slate-800">Policy</div>
              <div>Funding, regulations, budget analysis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}