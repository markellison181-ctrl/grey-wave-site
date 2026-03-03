'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import XIcon from '@/components/icons/XIcon'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Analysis', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Archive', href: '/archive' },
  ]

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="bg-white border-b border-navy-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 hover:text-navy-700 transition-colors">
              The Grey Wave
            </Link>
            <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-navy-600 font-medium hidden sm:block">
              by James Baxter
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 py-6 ${
                  pathname === item.href
                    ? 'text-navy-900 border-b-2 border-gold-500'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="https://x.com/jamesbaxter_cre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors duration-200"
              aria-label="Follow @jamesbaxter_cre on X"
            >
              <XIcon size={22} />
            </a>
            <Link 
              href="#subscribe" 
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all duration-200 text-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="#subscribe" 
              className="bg-navy-900 hover:bg-navy-800 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-200 text-sm"
            >
              Subscribe
            </Link>
            <button
              type="button"
              className="text-navy-600 hover:text-navy-900 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-navy-100 bg-white">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-navy-900 bg-navy-50 border-l-4 border-gold-500'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-navy-100 mt-4">
                <a
                  href="https://x.com/jamesbaxter_cre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-navy-600 hover:text-navy-900 transition-colors duration-200"
                >
                  <XIcon size={20} />
                  <span className="text-sm font-medium">Follow @jamesbaxter_cre</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}