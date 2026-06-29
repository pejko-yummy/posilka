import { kosiceGyms } from '../data/gyms'
import { gymsPhotos } from '../data/images'
import PhotoRotator from '../components/PhotoRotator'

function mapEmbedUrl(address) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
}

function mapDirectionsUrl(address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

export default function Gyms() {
  const sorted = [...kosiceGyms].sort((a, b) => a.singleEntryPrice - b.singleEntryPrice)

  return (
    <div>
      <h1 className="page-title">Fitká v Košiciach</h1>
      <PhotoRotator images={gymsPhotos} className="hero-card has-photo">
        <span className="hero-label">💪 Fitness v Košiciach</span>
      </PhotoRotator>
      <p className="muted" style={{ marginBottom: 16 }}>
        Jednorazové vstupy zoradené od najlevnejšieho. Ceny sú orientačné, overené z webov fitiek — pred návštevou si over aktuálny cenník.
      </p>
      <div className="grid">
        {sorted.map((gym) => (
          <div className="card" key={gym.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
              <h2 style={{ fontSize: 17 }}>{gym.name}</h2>
              <span
                className="badge"
                style={{ background: gym.singleEntryPrice <= 5 ? 'var(--color-success)' : 'var(--color-primary)', flexShrink: 0 }}
              >
                {gym.singleEntryPrice.toFixed(2)} €
              </span>
            </div>
            <p className="muted" style={{ marginTop: 4 }}>{gym.address}</p>
            <p className="muted" style={{ marginTop: 8 }}>{gym.note}</p>

            <div style={{ marginTop: 12, borderRadius: 12, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <iframe
                title={`Mapa - ${gym.name}`}
                src={mapEmbedUrl(gym.address)}
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a href={mapDirectionsUrl(gym.address)} target="_blank" rel="noreferrer" className="btn secondary" style={{ marginTop: 10 }}>
              🧭 Navigovať cez Google Maps
            </a>
            <a href={gym.website} target="_blank" rel="noreferrer" className="btn outline" style={{ marginTop: 8 }}>
              Cenník a viac info
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
