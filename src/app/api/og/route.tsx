import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.get('title') || 'The Grey Wave'
    const subtitle = searchParams.get('subtitle') || "Canada's seniors housing crisis newsletter"
    const category = searchParams.get('category') || 'Market Analysis'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(135deg, #2f4c6b 0%, #0f1c2e 100%)',
            padding: '80px',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px'
            }}
          >
            <div
              style={{
                background: '#ffd634',
                color: '#2f4c6b',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '24px',
                fontWeight: 'bold',
                marginRight: '24px'
              }}
            >
              The Grey Wave
            </div>
            <div
              style={{
                background: 'rgba(255, 214, 52, 0.2)',
                color: '#ffd634',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: title.length > 80 ? '48px' : '56px',
              fontWeight: 'bold',
              lineHeight: 1.1,
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              color: '#b2cbe2',
              lineHeight: 1.3,
              marginBottom: '40px',
              maxWidth: '800px'
            }}
          >
            {subtitle}
          </p>

          {/* Bottom section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 'auto'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  color: '#b2cbe2'
                }}
              >
                By James Baxter • Calgary seniors housing expert
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                fontSize: '18px',
                color: '#89aed1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                📊 2.1M Canadians turning 75
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                🏠 400K current beds
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                📈 23% seniors by 2036
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.error('Error generating OG image:', e)
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    })
  }
}