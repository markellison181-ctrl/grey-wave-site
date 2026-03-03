# The Grey Wave

A professional newsletter website for Canadian seniors housing expert James Baxter.

## Live Site

🌐 **[https://grey-wave-site.vercel.app](https://grey-wave-site.vercel.app)**

## Overview

The Grey Wave is Canada's premier newsletter on seniors housing and demographic trends. This Next.js website features:

- **Clean, professional design** inspired by Bloomberg and Substack
- **Real Canadian demographic data** from StatsCan and CMHC sources
- **Newsletter signup** integrated with Supabase database
- **Mobile responsive** design
- **SEO optimized** with proper meta tags and OG images

## Features

### Pages
- **Home**: Newsletter signup, key statistics, and recent analysis preview
- **About**: James Baxter's professional bio and background
- **Archive**: Placeholder for future newsletter issues

### Key Statistics Featured
- 7.3M Canadians 65+ (expected to reach 10.9M by 2036)
- 23% population share projected by 2036
- 206K additional seniors housing units needed by 2035
- Peak demographic impact in 2031

### Technical Stack
- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS with custom color scheme (slate + amber)
- **Database**: Supabase for newsletter subscriptions
- **Deployment**: Vercel with GitHub integration
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Database Schema

The newsletter signup connects to a Supabase `subscribers` table:
- `id`: Primary key
- `email`: Subscriber email (unique)
- `source`: Sign-up source ('website')
- `created_at`: Timestamp

## Deployment

Automatically deploys to Vercel on push to main branch.

- **GitHub Repository**: https://github.com/markellison181-ctrl/grey-wave-site
- **Vercel Project**: Connected with auto-deployment

## Author Identity

**James Baxter**
- Calgary-based seniors housing expert
- 15+ years in development
- X/Twitter: [@jamesbaxter_cre](https://x.com/jamesbaxter_cre)
- Newsletter focus: Data-driven analysis of Canada's aging population crisis

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://vsbwqlkbcgvmphuqfgqb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## Content Strategy

The site positions James Baxter as an authoritative voice on Canadian demographics by using:
- Real StatsCan population projections
- Actual CMHC housing market data  
- Provincial vacancy rates and construction data
- Evidence-based analysis over opinion