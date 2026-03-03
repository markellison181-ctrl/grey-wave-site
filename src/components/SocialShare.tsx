'use client'

import { useState } from 'react'
import { Share2, Copy, Check, Linkedin, Mail } from 'lucide-react'
import XIcon from '@/components/icons/XIcon'

interface SocialShareProps {
  title?: string
  description?: string
  url?: string
  className?: string
}

export default function SocialShare({ 
  title = "The Grey Wave - Canada's seniors housing crisis newsletter",
  description = "Get weekly insights on Canada's aging population and seniors housing trends from Calgary expert James Baxter.",
  url,
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  
  // Use current URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    twitter: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=jamesbaxter_cre`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className="text-sm font-medium text-slate-700 hidden sm:block">
        Share with a colleague:
      </span>
      
      <div className="flex items-center space-x-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share on Twitter"
        >
          <XIcon className="h-4 w-4" />
        </a>
        
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        
        <a
          href={shareLinks.email}
          className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          aria-label="Share via email"
        >
          <Mail className="h-4 w-4" />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

// Referral tracking component
export function ReferralShare({ referrerEmail }: { referrerEmail?: string }) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const referralUrl = referrerEmail 
    ? `${baseUrl}?ref=${encodeURIComponent(referrerEmail)}`
    : baseUrl

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
      <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
        <Share2 className="h-4 w-4 mr-2 text-amber-600" />
        Invite colleagues to The Grey Wave
      </h4>
      <p className="text-sm text-slate-700 mb-3">
        Share this newsletter with colleagues in real estate, development, or investment. 
        Help them stay ahead of Canada's demographic trends.
      </p>
      <SocialShare 
        title="The Grey Wave - Essential reading for Canada's seniors housing crisis"
        description="Weekly data-driven analysis from Calgary expert James Baxter. Track demographics, policy, and market trends that will reshape Canadian real estate."
        url={referralUrl}
        className="justify-start"
      />
    </div>
  )
}