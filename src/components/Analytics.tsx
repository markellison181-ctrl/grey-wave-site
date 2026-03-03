'use client'

import { useEffect } from 'react'

interface AnalyticsProps {
  page: string
  title: string
}

// Simple client-side analytics for tracking page views
export default function Analytics({ page, title }: AnalyticsProps) {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      try {
        // Send to your analytics service (Google Analytics, Posthog, etc.)
        // For now, just log to console and localStorage for basic tracking
        const view = {
          page,
          title,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          url: window.location.href
        }
        
        // Store in localStorage for basic tracking
        const views = JSON.parse(localStorage.getItem('greywave_views') || '[]')
        views.push(view)
        
        // Keep only last 100 views to avoid storage issues
        if (views.length > 100) {
          views.splice(0, views.length - 100)
        }
        
        localStorage.setItem('greywave_views', JSON.stringify(views))
        
        // Log for development
        console.log('Page view tracked:', view)
        
        // TODO: Replace with actual analytics service
        // gtag('config', 'GA_MEASUREMENT_ID', {
        //   page_title: title,
        //   page_location: window.location.href,
        // })
        
      } catch (error) {
        console.error('Analytics tracking error:', error)
      }
    }

    // Track after a short delay to ensure page is loaded
    const timer = setTimeout(trackPageView, 1000)
    
    return () => clearTimeout(timer)
  }, [page, title])

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0
    
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        
        // Track significant scroll milestones
        if (maxScroll >= 25 && maxScroll < 30) {
          console.log('Scroll milestone: 25%')
        } else if (maxScroll >= 50 && maxScroll < 55) {
          console.log('Scroll milestone: 50%')
        } else if (maxScroll >= 75 && maxScroll < 80) {
          console.log('Scroll milestone: 75%')
        } else if (maxScroll >= 95) {
          console.log('Scroll milestone: Article completed')
        }
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })
    return () => window.removeEventListener('scroll', trackScroll)
  }, [])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      console.log(`Time on page: ${timeSpent} seconds`)
      
      // Store engagement data
      try {
        const engagement = JSON.parse(localStorage.getItem('greywave_engagement') || '{}')
        engagement[page] = {
          ...(engagement[page] || {}),
          lastVisit: new Date().toISOString(),
          timeSpent,
          visits: (engagement[page]?.visits || 0) + 1
        }
        localStorage.setItem('greywave_engagement', JSON.stringify(engagement))
      } catch (error) {
        console.error('Engagement tracking error:', error)
      }
    }

    // Track when user leaves the page
    window.addEventListener('beforeunload', trackTimeOnPage)
    
    return () => {
      trackTimeOnPage()
      window.removeEventListener('beforeunload', trackTimeOnPage)
    }
  }, [page])

  return null // This component doesn't render anything
}