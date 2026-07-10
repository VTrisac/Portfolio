import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Víctor Trisac — Full Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          backgroundColor: '#0C0C0E',
          color: '#E9E6E0',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#C4694A', fontFamily: 'monospace' }}>
          GET /victor-trisac
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontStyle: 'italic' }}>Víctor Trisac</div>
          <div
            style={{
              display: 'flex',
              fontSize: 34,
              color: '#8B8880',
              marginTop: 24,
              fontFamily: 'sans-serif',
            }}
          >
            Full Stack Engineer · Python, FastAPI e IA
          </div>
        </div>
      </div>
    ),
    size,
  )
}
