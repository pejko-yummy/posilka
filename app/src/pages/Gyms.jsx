import { kosiceGyms } from '../data/gyms'

export default function Gyms() {
  const sorted = [...kosiceGyms].sort((a, b) => a.singleEntryPrice - b.singleEntryPrice)

  return (
    <div>
      <h1 className="page-title">Fitká v Košiciach</h1>
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
            <a href={gym.website} target="_blank" rel="noreferrer" className="btn outline" style={{ marginTop: 12 }}>
              Cenník a viac info
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
