import { sports } from '../data/sports'
import PhotoRotator from '../components/PhotoRotator'

function unsplash(id, width = 800) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`
}

export default function Sport() {
  return (
    <div>
      <h1 className="page-title">Šport a aktivity</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Odhad spálených kalórií za hodinu pre osobu okolo 75kg. Vyber si aktivitu, ktorá ťa baví — to je najlepšia záruka, že pri nej vydržíš.
      </p>
      <div className="grid">
        {sports.map((sport, i) => {
          const cardPhotos = [0, 1, 2].map((offset) => unsplash(sports[(i + offset) % sports.length].photoId))
          return (
            <PhotoRotator
              key={sport.id}
              images={cardPhotos}
              className="hero-card has-photo sport-card"
            >
              <span className="hero-pill">{sport.indoorOutdoor}</span>
              <div>
                <div className="hero-stat" style={{ fontSize: 26 }}>~{sport.caloriesPerHour} kcal/h</div>
                <div className="hero-sub" style={{ fontWeight: 700, color: '#fff', marginTop: 2 }}>{sport.name}</div>
                <div className="hero-sub">{sport.equipmentNeeded}</div>
                <p className="hero-sub" style={{ marginTop: 6 }}>{sport.description}</p>
                <a href={sport.videoUrl} target="_blank" rel="noreferrer" className="btn outline" style={{ marginTop: 10 }}>
                  ▶ Video návod
                </a>
              </div>
            </PhotoRotator>
          )
        })}
      </div>
    </div>
  )
}
