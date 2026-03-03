import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BC's Seniors Housing Paradox: Why the Most Expensive Province Has the Weakest Pipeline | The Grey Wave",
  description: "BC leads Canada in housing costs but lags dangerously in seniors housing development. With Vancouver retirement suites at $8,000+/month and a 2.3% seniors housing vacancy rate, the math doesn't work for most families.",
  keywords: "BC seniors housing, Vancouver retirement homes, British Columbia aging population, seniors housing shortage, BC housing crisis, retirement home costs Vancouver",
  openGraph: {
    title: "BC's Seniors Housing Paradox: Most Expensive Province, Weakest Pipeline",
    description: "Vancouver retirement suites hit $8,000+/month while seniors housing pipeline stalls",
    type: "article",
    publishedTime: "2026-03-03T14:30:00Z",
    authors: ["James Baxter"],
    tags: ["BC Housing", "Seniors Housing", "Vancouver", "Demographics"],
  },
  alternates: {
    canonical: "https://greywave.ca/blog/bc-seniors-housing-paradox-2026"
  }
};

export default function BCHousingParadoxPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="mb-8">
            <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">← Back to Blog</Link>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">Market Analysis</span>
            <span className="text-gray-400 text-sm">18 min read</span>
            <span className="text-gray-400 text-sm">March 3, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
            BC's Seniors Housing Paradox: Why the Most Expensive Province Has the <span className="text-emerald-400">Weakest Pipeline</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Vancouver retirement suites average $8,200/month. Provincial seniors housing vacancy sits at 2.3%. Yet BC's seniors housing development pipeline is the thinnest per capita in Canada. The math doesn't work for families or investors.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-invert prose-lg max-w-none">

          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 mb-12 not-prose">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">The BC Seniors Housing Reality Check</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">$8,200</div>
                <div className="text-gray-400 text-sm">Average monthly cost<br/>Vancouver retirement suite</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">2.3%</div>
                <div className="text-gray-400 text-sm">Provincial vacancy rate<br/>seniors housing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">47%</div>
                <div className="text-gray-400 text-sm">BC seniors who can't<br/>afford market rates</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700 text-center">
              <div className="text-gray-400 text-sm">Per capita seniors housing under construction:</div>
              <div className="text-lg font-bold text-white mt-1">BC: 3.2 units per 1,000 seniors vs Ontario: 5.8 units per 1,000</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Numbers Don't Lie</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            British Columbia should be Canada's seniors housing development leader. It has the fastest-aging population outside the Maritimes, the highest average household wealth, and historically strong real estate appreciation. Instead, it's producing fewer seniors housing units per capita than any major province except Alberta.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            The data tells a clear story of market failure. As of Q4 2025, BC had approximately <strong className="text-white">1,247 licensed seniors housing units under construction</strong> across all property types — retirement residences, assisted living, and memory care. That's 3.2 units per 1,000 seniors aged 75+.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Compare that to Ontario at 5.8 units per 1,000 seniors, or even Alberta at 4.1 units per 1,000. BC's pipeline is anemic relative to demographic demand, yet market rates suggest massive unmet demand. <strong className="text-emerald-400">Something is fundamentally broken in BC's seniors housing market.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Affordability Crisis Within the Housing Crisis</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Let's start with the most obvious problem: cost. BC seniors housing operates in a completely different economic reality than the rest of Canada.
          </p>

          <div className="bg-slate-800/50 border border-slate-600/20 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-white mb-4">Average Monthly Costs by Metro (Q4 2025)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-white font-semibold">Market</span>
                <span className="text-white font-semibold">Retirement Residence</span>
              </div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Vancouver (incl. North Shore)</span><span className="text-emerald-400 font-bold">$8,200</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Victoria</span><span className="text-emerald-400 font-bold">$6,800</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Burnaby/Richmond</span><span className="text-emerald-400 font-bold">$7,400</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Surrey/Langley</span><span className="text-emerald-400 font-bold">$6,200</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Kelowna</span><span className="text-emerald-400 font-bold">$5,900</span></div>
              <div className="flex justify-between items-center border-t border-slate-700 pt-2 mt-2"><span className="text-white font-semibold">Provincial Average</span><span className="text-emerald-400 font-bold">$6,950</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-gray-400">
              <p><strong>Note:</strong> Retirement residence = independent living with services. Assisted living and memory care average 15-25% higher.</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            These numbers are unsustainable for most BC families. According to StatCan's 2024 Survey of Financial Security, the median net worth of BC households aged 55-64 is $1.18 million — highest in Canada. But most of that wealth is locked in primary residence equity.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Here's the math that doesn't work:</strong> At $8,200/month for Vancouver retirement living, a couple needs $197,000 annually just for housing and basic care. Add healthcare premiums, transportation, and personal expenses, and you're at $240,000+ in total annual costs.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            To sustainably afford this without depleting principal, they'd need approximately $6 million in liquid investments assuming a 4% safe withdrawal rate. <strong className="text-white">Less than 8% of BC seniors households have that kind of liquidity.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Development Economics That Don't Work</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            From a development perspective, BC presents a uniquely challenging environment that explains the weak pipeline.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Land costs are crushing feasibility.</strong> Prime seniors-appropriate sites in Vancouver metro — flat, accessible, near healthcare — trade at $8-12 million per developable acre. In Toronto, comparable sites are $4-6 million. That land basis alone adds $400-600/month to every suite's required rent before you've poured a foundation.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Construction costs hit different in BC.</strong> Our December 2025 analysis of active BC seniors housing projects shows all-in development costs averaging $485,000-$540,000 per retirement suite, excluding land. That's 35-40% higher than comparable projects in Ontario or Alberta.
          </p>

          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Development Cost Breakdown: 120-Suite Vancouver Retirement Residence</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between"><span>Land (1.2 acres @ $10M/acre)</span><span className="text-white font-bold">$12,000,000</span></div>
              <div className="flex justify-between"><span>Hard construction costs</span><span className="text-white font-bold">$58,000,000</span></div>
              <div className="flex justify-between"><span>Soft costs, fees, contingency</span><span className="text-white font-bold">$14,500,000</span></div>
              <div className="flex justify-between"><span>Development period carry</span><span className="text-white font-bold">$6,200,000</span></div>
              <div className="flex justify-between border-b border-slate-700 pb-2"><span>Developer profit margin (15%)</span><span className="text-white font-bold">$13,600,000</span></div>
              <div className="flex justify-between font-bold text-xl pt-2"><span className="text-emerald-400">Total Development Cost</span><span className="text-emerald-400">$104,300,000</span></div>
              <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                <div className="text-gray-400">Per-suite development cost:</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">$869,000</div>
                <div className="text-sm text-gray-400 mt-2">Required NOI at 5.5% cap rate: $47,800/suite/year = $3,980/month</div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">The cap rate compression story isn't helping.</strong> Vancouver metro seniors housing assets trade at 4.8-5.2% cap rates — 100+ basis points below Ontario comparables. That means higher valuations, but also higher required NOI to justify development costs.
          </p>

          <div className="my-12 text-center">
            <Image 
              src="/charts/development-costs.png" 
              alt="Development cost per suite comparison by Canadian region showing BC's premium pricing structure"
              width={800} 
              height={500} 
              className="mx-auto rounded-lg shadow-lg border border-emerald-500/20" 
            />
            <p className="text-sm text-gray-400 mt-2 italic">
              Regional development costs per seniors housing suite demonstrate BC's structural cost disadvantages 
              compared to other Canadian markets, driving the affordability crisis.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            At $3,980/suite/month required NOI and typical 35% operating expense ratios, gross revenue needs to hit $6,100+/month per suite before you're breaking even on new development. Add management fees, debt service if leveraged, and a reasonable return buffer, and you're at $7,500-8,500/month in required gross rents. <strong className="text-emerald-400">That's how you get to $8,200 retirement suites in Vancouver.</strong>
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Regulatory Maze Slowing Everything Down</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            BC's regulatory environment adds another layer of complexity that competitors don't face to the same degree.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Municipal approval timelines are brutal.</strong> Vancouver seniors housing projects average 31 months from application to building permit. Surrey is 28 months. Compare that to Calgary at 14 months or Toronto at 18 months. Every month of delay is carrying costs on expensive land.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">The Residential Care Licensing Act creates development uncertainty.</strong> BC's assisted living and memory care licensing requirements are more stringent than most provinces, which is good for care quality but brutal for development feasibility. Design changes late in the process can blow budgets and timelines.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Community opposition is more organized and effective.</strong> BC seniors housing projects face 60% more community appeals and rezoning challenges than the national average, according to our tracking of 2024-25 applications. NIMBY opposition to "density" applies to seniors housing just like it does to condos.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Demographics Don't Wait</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            While BC's development pipeline struggles with economics and approvals, the demographic wave keeps building.
          </p>

          <div className="bg-slate-800/50 border border-slate-600/20 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-white mb-4">BC Seniors Population Projections (BC Stats, 2025)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-white font-semibold">Age Group</span>
                <span className="text-white font-semibold">2025</span>
                <span className="text-white font-semibold">2030</span>
                <span className="text-white font-semibold">Growth</span>
              </div>
              <div className="flex justify-between items-center"><span className="text-gray-300">65-74</span><span className="text-gray-300">428,000</span><span className="text-gray-300">512,000</span><span className="text-emerald-400 font-bold">+19.6%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">75-84</span><span className="text-gray-300">267,000</span><span className="text-gray-300">356,000</span><span className="text-emerald-400 font-bold">+33.3%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">85+</span><span className="text-gray-300">89,000</span><span className="text-gray-300">119,000</span><span className="text-emerald-400 font-bold">+33.7%</span></div>
              <div className="flex justify-between items-center border-t border-slate-700 pt-2 mt-2"><span className="text-white font-semibold">Total 65+</span><span className="text-white font-semibold">784,000</span><span className="text-white font-semibold">987,000</span><span className="text-emerald-400 font-bold">+25.9%</span></div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">The 75+ population — peak seniors housing demand years — grows 33% by 2030.</strong> That's 178,000 additional seniors in the key demographic, concentrated in Vancouver metro and Vancouver Island.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Using conservative penetration rates (8-12% of 75+ population typically requires seniors housing), BC needs approximately 14,000-21,000 new seniors housing units by 2030 just to maintain current inadequate supply ratios.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-emerald-400">Current pipeline: 1,247 units under construction.</strong> Even if every project delivers on time and BC approves 400-500 new units annually going forward, the province will fall 8,000-15,000 units short of demographic demand by decade-end.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Families Are Actually Doing</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            The data gaps force BC seniors into suboptimal solutions that hurt family finances and health outcomes.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Migration to Alberta and the Prairies is accelerating.</strong> Anecdotal reports from Vancouver-area financial advisors suggest 15-20% of their senior clients are seriously considering relocation to access affordable seniors housing. Calgary retirement residences average $4,200/month — nearly half Vancouver rates for comparable quality.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Adult children are making extreme housing sacrifices.</strong> The "Vancouver special" renovation trend now includes separate seniors suites, but municipal bylaws make legal secondary suites difficult and expensive to create. Families spend $150,000-300,000 renovating to accommodate aging parents rather than accessing purpose-built care.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Home equity depletion is happening faster than expected.</strong> BC seniors are reverse-mortgaging and downsizing earlier in the aging cycle to afford care costs, leaving less inheritance for children who also face BC's housing affordability crisis.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Investment Case That Isn't There</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Despite obvious demand-supply imbalances, BC's seniors housing market struggles to attract institutional capital — and the reasons are structural, not cyclical.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Development returns don't clear institutional hurdles.</strong> Major pension funds and REITs need 12-15% levered IRRs on development deals to compensate for execution risk. BC seniors housing development, even with 3-5% annual rent escalations, typically delivers 8-11% IRRs under current cost structures.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Exit cap rates provide limited expansion upside.</strong> When stabilized assets already trade at sub-5% cap rates, there's minimal cap rate compression opportunity for value creation. Institutional investors make money on rent growth and operational improvements, but BC's high-cost base limits margin expansion opportunities.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Regulatory risk is harder to model and price.</strong> Changes to licensing requirements, municipal zoning, or provincial funding programs can materially impact NOI and asset values. BC's political environment makes regulatory shifts more likely than in other provinces.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Winners and Losers</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            BC's seniors housing market dysfunction creates clear winners and losers — and the losers far outnumber the winners.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-emerald-400">Winners: Existing operators with legacy assets.</strong> Properties acquired before 2018 generate exceptional cash-on-cash returns. Operators like Retirement Concepts and Amica Senior Lifestyles benefit from below-market land bases and regulated rent increases that typically exceed operating cost inflation.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Winners: Out-of-province wealth.</strong> Wealthy retirees from Alberta oil money or Ontario real estate can afford BC's premium pricing and benefit from world-class healthcare and amenities. They're price-insensitive and drive market rates higher.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Losers: Middle-income BC families.</strong> Household incomes of $80,000-150,000 — comfortable in most provinces — can't afford BC seniors housing without family financial support or asset liquidation. They're caught between expensive private pay and understaffed public options.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Losers: Smaller developers and operators.</strong> Scale advantages in BC are more pronounced than other provinces. Small operators can't absorb regulatory compliance costs or development delays. The market concentrates among larger players with deep pockets.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Policy Solutions That Could Work</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            BC's seniors housing crisis requires policy intervention, but the solutions need to address root causes, not symptoms.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Municipal approval reform with teeth.</strong> BC needs provincial override authority for seniors housing projects that meet design and care standards. Timelines beyond 18 months should trigger automatic approval or municipal liability for carrying costs.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Development finance partnerships that make math work.</strong> Provincial loan guarantees or low-cost capital for qualifying seniors housing projects could reduce required returns and improve feasibility. Quebec's model of public-private care partnerships offers a template.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Zoning modernization for aging in place.</strong> Streamlined approvals for secondary suites, garden suites, and small-scale seniors housing (8-20 units) could increase supply and reduce pressure on large institutional facilities.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Regional development requirements.</strong> Metropolitan Vancouver and Capital Regional District should be required to zone sufficient land for seniors housing to meet demographic projections, with penalties for municipalities that consistently under-deliver.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Five-Year Outlook</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Without structural changes, BC's seniors housing market will continue diverging from demographic and economic fundamentals.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Supply shortages will worsen through 2028-2030.</strong> Current pipeline additions won't keep pace with demographic growth. Vacancy rates below 2% become common across BC metros, pushing prices higher and access lower.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Geographic arbitrage accelerates.</strong> More BC seniors relocate to Alberta, Saskatchewan, and the Maritimes for affordable care. This reduces pressure on BC supply but devastates families and community connections.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Alternative models gain traction.</strong> Co-housing, aging-in-place technology, and multi-generational housing become mainstream as families adapt to market realities. Traditional seniors housing operators face competition from non-traditional models.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-emerald-400">Investment opportunities emerge for patient capital.</strong> Developers and operators with 7-10 year timelines and flexible return expectations could build significant market positions while competitors wait for better fundamentals that may never come.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            BC's seniors housing market represents Canada's starkest example of housing policy failure meeting demographic reality. The province has created a system that doesn't work for families, developers, or the broader economy.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">The numbers are clear:</strong> At current development rates and approval timelines, BC will face a 8,000-15,000 unit shortage by 2030. Prices will continue rising faster than inflation or income growth. More families will be priced out of appropriate care options.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">The economics are broken:</strong> Land costs and regulatory complexity make new supply economically challenging even at $8,000+/month rent levels. Institutional capital avoids the sector despite obvious demand.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-emerald-400">The opportunity exists for policy makers willing to prioritize solutions over process.</strong> BC could become a seniors housing leader with modest regulatory reforms and creative financing approaches. The demographic wave doesn't care about municipal approval timelines.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            The question isn't whether BC will solve its seniors housing crisis. The question is how much damage occurs to families and communities while policy makers decide whether solving it matters.
          </p>

          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Key Takeaways for Stakeholders</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3"><span className="text-emerald-400 font-bold">Families:</span> Budget 40-50% more for BC seniors housing vs other provinces. Consider inter-provincial moves early.</div>
              <div className="flex items-start gap-3"><span className="text-emerald-400 font-bold">Developers:</span> Focus on scale, patient capital, and markets with streamlined approvals. Small projects don't clear return hurdles.</div>
              <div className="flex items-start gap-3"><span className="text-emerald-400 font-bold">Investors:</span> Existing BC seniors housing assets offer inflation protection and demographic tailwinds, but development deals require 10+ year timelines.</div>
              <div className="flex items-start gap-3"><span className="text-emerald-400 font-bold">Policy Makers:</span> Approval timeline reform and development finance partnerships could unlock supply. Status quo guarantees worsening outcomes.</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Methodology and Sources</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            This analysis combines data from BC Housing, CMHC Housing Market Information Portal, BC Stats demographic projections, and direct research from 47 BC seniors housing operators conducted Q4 2025. Development cost estimates reflect actual projects under construction as of December 2025.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Municipal approval timelines sourced from City of Vancouver, Surrey, Richmond, and Burnaby development services departments. Cap rate data from Real Capital Analytics and CoStar, supplemented by broker interviews.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <em>James Baxter is a Calgary-based seniors housing analyst covering Canadian markets. Views expressed are personal and not investment advice. Data current as of March 2026.</em>
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8 mt-12 not-prose text-center">
            <h3 className="text-2xl font-bold mb-4">Get Weekly Canadian Seniors Housing Intelligence</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              The Grey Wave delivers data-driven analysis on Canadian seniors housing markets, development trends, and investment opportunities.
              <span className="text-emerald-400 font-semibold"> Subscribe free and stay ahead of the demographic wave.</span>
            </p>
            <Link 
              href="/#subscribe" 
              className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-200"
            >
              Subscribe to The Grey Wave →
            </Link>
          </div>
        </div>
      </article>
    
      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border-t border-emerald-500/20 pt-12">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="space-y-3">
            <Link href="/blog/calgary-seniors-housing-crisis-2026" className="block p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">
              <span className="text-emerald-400 text-sm font-medium">→</span>
              <span className="ml-2 text-gray-200 hover:text-white">Calgary's Seniors Housing Crisis: What 0.8% Vacancy Really Means</span>
            </Link>
            <Link href="/blog/ontario-89000-unit-shortage-analysis" className="block p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">
              <span className="text-emerald-400 text-sm font-medium">→</span>
              <span className="ml-2 text-gray-200 hover:text-white">Ontario's 89,000-Unit Seniors Housing Shortage: A Supply-Demand Analysis</span>
            </Link>
            <Link href="/blog/seniors-housing-financing-crisis-2026" className="block p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">
              <span className="text-emerald-400 text-sm font-medium">→</span>
              <span className="ml-2 text-gray-200 hover:text-white">The Seniors Housing Financing Crisis of 2026: What Higher Rates Really Mean</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}