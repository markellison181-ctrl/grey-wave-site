'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import XIcon from '@/components/icons/XIcon'

export default function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Analysis', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Archive', href: '/archive' },
  ]

  return (
    <header className="bg-white border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-navy-900 hover:text-navy-700 transition-colors">
              The Grey Wave
            </Link>
            <span className="ml-4 text-sm text-navy-600 font-medium">
              by James Baxter
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
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

          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/jamesbaxter_cre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors duration-200"
            >
              <XIcon size={22} />
              <span className="sr-only">Follow @jamesbaxter_cre</span>
            </a>
            <Link href="#subscribe" className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm hover:shadow-lg hover:-translate-y-0.5">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}