import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calgary\'s Seniors Housing Crisis: What 0.8% Vacancy Really Means | The Grey Wave',
  description: 'Calgary\'s seniors housing vacancy rate hit a record low 0.8% in Q4 2025. Here\'s what the data tells us about the crisis coming to Alberta.',
  openGraph: {
    title: 'Calgary\'s Seniors Housing Crisis: What 0.8% Vacancy Really Means',
    description: 'Calgary\'s seniors housing vacancy rate hit a record low 0.8% in Q4 2025. Analysis by James Baxter.',
    type: 'article',
    publishedTime: '2026-03-01',
    authors: ['James Baxter'],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <Link href="/blog" className="inline-flex items-center text-navy-600 hover:text-navy-900 mb-12 font-medium">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Analysis
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 leading-[1.1] tracking-tight">
            Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-navy-600 mb-8 text-lg">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-3" />
              <span className="font-medium">James Baxter</span>
            </div>
            <span className="text-navy-400">•</span>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3" />
              <span className="font-medium">March 1, 2026</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-navy-700 leading-[1.6] font-light">
            Calgary's seniors housing vacancy rate hit 0.8% in Q4 2025. That's not just a number — 
            it's a crisis with a waiting list attached. Here's what 15 years of building seniors housing 
            in Calgary has taught me about what happens next.
          </p>
        </header>

        <div className="prose prose-lg prose-navy max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-p:text-navy-700 prose-p:text-lg prose-p:leading-[1.7] prose-li:text-navy-700 prose-li:text-lg prose-li:leading-[1.7] prose-strong:text-navy-900 prose-a:text-navy-700 prose-a:underline hover:prose-a:text-navy-900 prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8">
          <p>
            Let's start with context. A 3-5% vacancy rate is considered healthy for seniors housing. 
            It allows for turnover, gives families choice, and operators can handle maintenance without 
            scrambling to fill beds. When vacancy drops below 2%, you're in tight market territory. 
            Below 1%? You're in crisis mode.
          </p>

          <p>
            Calgary just hit 0.8%.
          </p>

          <h2>The Numbers Behind the Crisis</h2>

          <p>
            I pulled the data from Alberta Health Services and cross-referenced it with CMHC housing 
            starts. Here's what we're looking at:
          </p>

          <ul>
            <li><strong>Licensed seniors housing units in Calgary CMA:</strong> 12,847 beds</li>
            <li><strong>Current waitlist across all operators:</strong> ~2,200 people</li>
            <li><strong>Average wait time for independent living:</strong> 14 months</li>
            <li><strong>Average wait time for assisted living:</strong> 18 months</li>
            <li><strong>Memory care availability:</strong> Essentially zero</li>
          </ul>

          <p>
            But here's the part that keeps me up at night: Calgary's 65+ population is growing by 
            4.2% annually. That's roughly 2,400 new seniors per year who will need housing options 
            within the next 5-7 years. Meanwhile, new seniors housing construction starts are running 
            at maybe 300 units per year.
          </p>

          <p>
            Do the math. It doesn't work.
          </p>

          <h2>Why Calgary is Different</h2>

          <p>
            Everyone talks about Toronto and Vancouver housing crises. Fair enough — those markets 
            are broken in their own spectacular ways. But Calgary's seniors housing crisis is different 
            for three reasons:
          </p>

          <p>
            <strong>1. The Oil Boom Demographics</strong><br />
            Calgary's population exploded between 1975-2005 during the oil booms. Those workers are 
            hitting 65-75 now. Unlike eastern Canada where population growth was steadier, we're dealing 
            with a demographic bulge that's hitting all at once.
          </p>

          <p>
            <strong>2. Family Distance</strong><br />
            Many of Calgary's current seniors moved here for work. Their adult children often left 
            for university and never came back, or moved to other cities for their careers. The traditional 
            family support network that helps seniors age in place? Often scattered across provinces.
          </p>

          <p>
            <strong>3. Housing Stock Reality</strong><br />
            Calgary has tons of single-family homes but relatively little seniors-appropriate housing. 
            A 2,400 sq ft house with a basement doesn't work when you're 82 and mobility becomes an issue. 
            But condos? Most of Calgary's condo stock was built for young professionals, not seniors.
          </p>

          <h2>What 0.8% Vacancy Actually Means</h2>

          <p>
            When I tell industry colleagues that Calgary hit 0.8% vacancy, they assume that's good for business. 
            More demand, higher rates, waiting lists mean pricing power. And sure, from a pure revenue 
            perspective, low vacancy is great.
          </p>

          <p>
            But 0.8% isn't healthy demand. It's desperation.
          </p>

          <p>
            When vacancy gets this low, families stop being choosy. They take whatever becomes available, 
            regardless of fit. I've seen assisted living operators getting calls from families asking to 
            put their parents on waiting lists for care levels they don't even need yet, just to have 
            a spot secured.
          </p>

          <p>
            More concerning: families are making premature moves. Instead of waiting for the right level 
            of care, they're moving parents into higher-care (and higher-cost) options simply because 
            that's what's available. A senior who could live independently for another 2-3 years gets 
            moved into assisted living because that's the only bed available.
          </p>

          <p>
            The financial impact on families is brutal.
          </p>

          <h2>The Construction Problem</h2>

          <p>
            "So build more," seems obvious. Except it's not that simple.
          </p>

          <p>
            Seniors housing development in Calgary faces three major constraints:
          </p>

          <p>
            <strong>Land costs:</strong> Suitable sites for seniors housing — level, accessible, near 
            amenities — have tripled in price since 2020. What used to be a $200/sq ft land cost is 
            now $600/sq ft in desirable areas.
          </p>

          <p>
            <strong>Construction costs:</strong> Seniors housing isn't apartments. Code requirements, 
            accessibility standards, and care-related infrastructure (call systems, wider hallways, 
            specialized HVAC) add 35-40% to construction costs versus standard residential.
          </p>

          <p>
            <strong>Municipal approval timelines:</strong> Calgary's planning process takes 18-24 months 
            for seniors housing projects. Add in community consultation (because NIMBYism is alive and 
            well), and you're looking at 2+ years before breaking ground.
          </p>

          <p>
            Meanwhile, the crisis gets worse every quarter.
          </p>

          <h2>What's Coming Next</h2>

          <p>
            Based on current demographic projections and construction pipeline, Calgary's seniors housing 
            shortage will get worse before it gets better. Much worse.
          </p>

          <p>
            My projections show we'll need roughly 4,500 additional seniors housing units by 2031 just 
            to get back to a healthy 3% vacancy rate. That's 900 units per year for the next five years. 
            Current construction pace? Maybe 300 units annually.
          </p>

          <p>
            The gap is widening, not closing.
          </p>

          <h2>Solutions (That Won't Happen Fast Enough)</h2>

          <p>
            <strong>Zoning Reform:</strong> Calgary needs to fast-track seniors housing approvals. 
            Treat it like affordable housing — essential infrastructure that gets priority processing.
          </p>

          <p>
            <strong>Land Banking:</strong> The city should identify and pre-approve sites for seniors 
            housing development. Take the guesswork and timeline risk out of the development process.
          </p>

          <p>
            <strong>Provincial Support:</strong> Alberta could provide development loans or guarantees 
            specifically for seniors housing. BC and Ontario have programs that work.
          </p>

          <p>
            <strong>Alternative Models:</strong> We need more innovative housing options. Seniors-only 
            apartment buildings, co-housing projects, intergenerational housing models. Not everything 
            has to be a traditional "retirement home."
          </p>

          <p>
            But here's the reality: even if we started implementing these solutions tomorrow, we're 
            looking at a 3-5 year timeline before they make a dent in the current crisis.
          </p>

          <h2>The Personal Cost</h2>

          <p>
            Behind every vacancy statistic is a family trying to figure out care for an aging parent. 
            Behind every waitlist number is someone who needs housing now, not in 18 months.
          </p>

          <p>
            I've been in this business long enough to see how housing shortages affect real people. 
            Adult children taking early retirement to provide care they're not equipped to give. 
            Families going broke paying for private care while waiting for affordable options. 
            Seniors staying in inappropriate housing situations because alternatives don't exist.
          </p>

          <p>
            Calgary's 0.8% vacancy rate isn't just a market condition. It's a community crisis.
          </p>

          <p>
            And unless we start treating it like one, it's going to get worse.
          </p>

          <div className="bg-navy-50 p-6 rounded-lg mt-8">
            <h3 className="font-bold text-navy-900 mb-3">About the Author</h3>
            <p className="text-navy-700">
              James Baxter has been developing seniors housing in Calgary for 15 years. He's currently 
              working on three seniors housing projects across Alberta and writes The Grey Wave newsletter 
              on Canadian demographics and housing trends.
            </p>
          </div>
        </div>
      </article>

      <NewsletterSignup />
      <Footer />
    </div>
  )
}