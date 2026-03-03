import XIcon from '@/components/icons/XIcon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">The Grey Wave</h3>
          <p className="text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Canadian seniors housing intelligence. Data-driven analysis for operators and investors.
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8 mb-12">
          <Link href="/" className="text-navy-300 hover:text-white transition-colors">Home</Link>
          <Link href="/blog" className="text-navy-300 hover:text-white transition-colors">Analysis</Link>
          <Link href="/about" className="text-navy-300 hover:text-white transition-colors">About</Link>
          <a
            href="https://x.com/jamesbaxter_cre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-300 hover:text-white transition-colors flex items-center space-x-2"
          >
            <XIcon size={18} />
            <span>@jamesbaxter_cre</span>
          </a>
        </div>
        
        <div className="border-t border-navy-800 pt-8 text-center text-navy-400 text-sm">
          <p>&copy; 2026 James Baxter. Weekly market intelligence by email.</p>
          <p className="mt-2 text-navy-500">Data sources: StatsCan, CMHC, Provincial Housing Corporations</p>
        </div>
      </div>
    </footer>
  )
}