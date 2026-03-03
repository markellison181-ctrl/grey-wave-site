'use client'

import { useState } from 'react'
import { Share2, Twitter, Linkedin, Mail, Copy, Check } from 'lucide-react'

interface ArticleShareProps {
  title: string
  url: string
  description?: string
  className?: string
}

export default function ArticleShare({ title, url, description = '', className = '' }: ArticleShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description)
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=jamesbaxter_cre`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
        aria-label="Share article"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share menu */}
          <div className="absolute top-full mt-2 left-0 z-20 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[200px]">
            <div className="space-y-3">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Twitter className="h-4 w-4 mr-3" />
                Share on Twitter
              </a>
              
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin className="h-4 w-4 mr-3" />
                Share on LinkedIn
              </a>
              
              <a
                href={shareLinks.email}
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="h-4 w-4 mr-3" />
                Share via Email
              </a>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4 mr-3 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 mr-3" />
                )}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}