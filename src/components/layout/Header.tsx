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
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              The Grey Wave
            </Link>
            <span className="ml-3 text-sm text-slate-600 font-medium">
              by James Baxter
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-slate-900 border-b-2 border-amber-500 pb-4'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/jamesbaxter_cre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <XIcon size={20} />
              <span className="sr-only">Follow @jamesbaxter_cre</span>
            </a>
            <Link href="#subscribe" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}