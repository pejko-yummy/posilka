import { sports } from '../data/sports'

export default function Sport() {
  return (
    <div>
      <h1 className="page-title">Šport a aktivity</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Odhad spálených kalórií za hodinu pre osobu okolo 75kg. Vyber si aktivitu, ktorá ťa baví — to je najlepšia záruka, že pri nej vydržíš.
      </p>
      <div className="grid">
        {sports.map((sport) => (
          <div className="card" key={sport.id}>
            <h2>{sport.name}</h2>
            <div className="metric-number" style={{ fontSize: 28, color: 'var(--color-primary)' }}>
              ~{sport.caloriesPerHour} kcal/h
            </div>
            <div style={{ marginTop: 8 }}>
              <span className="tag">{sport.indoorOutdoor}</span>
              <span className="tag">{sport.equipmentNeeded}</span>
            </div>
            <p className="muted" style={{ marginTop: 8 }}>{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
