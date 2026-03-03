import XIcon from '@/components/icons/XIcon'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Grey Wave</h3>
            <p className="text-slate-300 mb-4">
              Canada's premier newsletter on seniors housing and demographic trends.
            </p>
            <p className="text-slate-400 text-sm">
              Published by James Baxter, Calgary-based seniors housing expert.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex items-center space-x-2 text-slate-300">
              <XIcon size={16} />
              <a
                href="https://x.com/jamesbaxter_cre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                @jamesbaxter_cre
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Data Sources</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>Statistics Canada</li>
              <li>CMHC Housing Market Data</li>
              <li>Provincial Housing Corporations</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 James Baxter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}