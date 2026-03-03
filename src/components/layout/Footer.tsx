import Link from 'next/link'
import XIcon from '@/components/icons/XIcon'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">The Grey Wave</h3>
            <p className="text-navy-200 mb-4 leading-relaxed">
              Canada's most data-driven seniors housing newsletter. Weekly market intelligence 
              for operators and investors navigating the demographic transition.
            </p>
            <p className="text-navy-300 text-sm">
              Published by <strong className="text-white">James Baxter</strong>, Calgary-based seniors housing expert.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block text-navy-200 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/blog" className="block text-navy-200 hover:text-white transition-colors duration-200">
                Analysis
              </Link>
              <Link href="/about" className="block text-navy-200 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="/archive" className="block text-navy-200 hover:text-white transition-colors duration-200">
                Archive
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Data Sources</h4>
            <ul className="text-navy-200 text-sm space-y-2">
              <li>Statistics Canada (CANSIM)</li>
              <li>CMHC Housing Market Data</li>
              <li>Provincial Housing Corps</li>
              <li>RHRA Registry</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-white">Connect</h5>
              <a
                href="https://x.com/jamesbaxter_cre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-navy-200 hover:text-white transition-colors duration-200 text-sm"
              >
                <XIcon size={16} />
                <span>@jamesbaxter_cre</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="text-navy-300 text-sm mb-4 sm:mb-0">
            &copy; 2026 James Baxter. All rights reserved.
          </div>
          <div className="text-navy-400 text-xs">
            Made with ❤️ in Calgary, AB
          </div>
        </div>
      </div>
    </footer>
  )
}