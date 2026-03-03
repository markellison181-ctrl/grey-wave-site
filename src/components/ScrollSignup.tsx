'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { X, Mail, TrendingUp, Clock, Users } from 'lucide-react'

export default function ScrollSignup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const dismissed = localStorage.getItem('greywave-signup-dismissed')
    const subscribed = localStorage.getItem('greywave-subscribed')
    
    if (dismissed || subscribed) {
      setIsDismissed(true)
      return
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show after scrolling 70% of the page
      const scrollPercentage = scrolled / (documentHeight - viewportHeight)
      
      if (scrollPercentage > 0.7 && !isVisible && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible, isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem('greywave-signup-dismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('id')
        .eq('email', email)
        .single()

      if (existingSubscriber) {
        setIsSubscribed(true)
        localStorage.setItem('greywave-subscribed', 'true')
        setTimeout(() => {
          setIsVisible(false)
          setIsDismissed(true)
        }, 2000)
        return
      }

      // Insert new subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([
          {
            email: email.toLowerCase(),
            source: 'scroll_popup',
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setIsSubscribed(true)
      localStorage.setItem('greywave-subscribed', 'true')
      
      // Hide popup after success
      setTimeout(() => {
        setIsVisible(false)
        setIsDismissed(true)
      }, 2000)
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 transform animate-in fade-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 rounded-t-xl relative">
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-navy-200 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center mb-3">
            <div className="bg-gold-400 p-2 rounded-lg mr-3">
              <TrendingUp className="h-6 w-6 text-navy-900" />
            </div>
            <h2 className="text-xl font-bold">Don't Miss The Wave</h2>
          </div>
          
          <p className="text-navy-200 text-sm">
            Canada's biggest demographic shift in history is happening now. 
            Get the weekly insights that matter.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubscribed ? (
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Welcome to The Grey Wave!</h3>
              <p className="text-slate-600">Check your email for confirmation.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-navy-900">2.1M</div>
                  <div className="text-xs text-slate-600">Canadians turning 75 soon</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-900">400K</div>
                  <div className="text-xs text-slate-600">Current care beds</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-900">23%</div>
                  <div className="text-xs text-slate-600">Seniors by 2036</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Get Weekly Insights'}
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center space-x-6 text-xs text-slate-500">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Weekly
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  1,200+ readers
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  No spam
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}