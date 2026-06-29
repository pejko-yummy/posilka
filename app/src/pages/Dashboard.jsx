import { useLocalStorage } from '../lib/useLocalStorage'
import { calculateBmi, bmiCategory } from '../lib/bmi'
import { isDayDone, computeStreak } from '../lib/checklist'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [profile, setProfile] = useLocalStorage('sixpack:profile', { heightCm: '', weightKg: '' })
  const [weightHistory, setWeightHistory] = useLocalStorage('sixpack:weightHistory', [])
  const [checklist, setChecklist] = useLocalStorage('sixpack:todayChecklist', {
    date: new Date().toISOString().slice(0, 10),
    items: { cvicenie: false, jedlo: false, voda: false, vaha: false },
  })
  const [checklistHistory, setChecklistHistory] = useLocalStorage('sixpack:checklistHistory', {})

  const today = new Date().toISOString().slice(0, 10)
  const todayChecklist = checklist.date === today ? checklist : { date: today, items: { cvicenie: false, jedlo: false, voda: false, vaha: false } }
  const streak = computeStreak(checklistHistory)

  const bmi = calculateBmi(Number(profile.weightKg), Number(profile.heightCm))
  const category = bmiCategory(bmi)

  function updateProfile(field, value) {
    const next = { ...profile, [field]: value }
    setProfile(next)
    const weight = Number(next.weightKg)
    if (weight) {
      const lastEntry = weightHistory[weightHistory.length - 1]
      if (!lastEntry || lastEntry.date !== today) {
        setWeightHistory([...weightHistory, { date: today, weightKg: weight }])
      } else {
        setWeightHistory(weightHistory.map((e) => (e.date === today ? { ...e, weightKg: weight } : e)))
      }
    }
  }

  function toggleItem(key) {
    const nextItems = { ...todayChecklist.items, [key]: !todayChecklist.items[key] }
    setChecklist({ date: today, items: nextItems })
    setChecklistHistory({ ...checklistHistory, [today]: isDayDone(nextItems) })
  }

  const labels = { cvicenie: 'Cvičenie dokončené', jedlo: 'Jedlo podľa plánu', voda: 'Dostatok vody', vaha: 'Váha zaznamenaná' }

  return (
    <div>
      <h1 className="page-title">Ahoj! 👋</h1>

      <div className="hero-row">
        <div className="hero-card variant-cyan">
          <span className="hero-label">Tvoje BMI</span>
          {bmi ? (
            <div>
              <div className="hero-stat">{bmi.toFixed(1)}</div>
              <span className="hero-pill" style={{ background: category.color, color: '#06241c' }}>{category.label}</span>
            </div>
          ) : (
            <div className="hero-sub">Zadaj výšku a váhu nižšie</div>
          )}
        </div>
        <div className="hero-card variant-success">
          <span className="hero-label">🔥 Streak</span>
          <div className="hero-stat">{streak}</div>
          <span className="hero-sub">{streak === 1 ? 'deň v rade' : 'dní v rade'}</span>
        </div>
      </div>

      <div className="card">
        <h2>Údaje o tebe</h2>
        <div className="input-row">
          <label>Výška (cm)</label>
          <input
            type="number"
            value={profile.heightCm}
            onChange={(e) => updateProfile('heightCm', e.target.value)}
            placeholder="napr. 178"
          />
        </div>
        <div className="input-row">
          <label>Váha (kg)</label>
          <input
            type="number"
            value={profile.weightKg}
            onChange={(e) => updateProfile('weightKg', e.target.value)}
            placeholder="napr. 85"
          />
        </div>
      </div>

      <div className="card">
        <h2>Dnešný checklist</h2>
        {Object.entries(labels).map(([key, label]) => (
          <label key={key} className={`checklist-item ${todayChecklist.items[key] ? 'done' : ''}`}>
            <input type="checkbox" checked={todayChecklist.items[key]} onChange={() => toggleItem(key)} />
            <span>{label}</span>
          </label>
        ))}
        <p className="muted" style={{ marginTop: 10 }}>Sleduj svoj progres v <Link to="/kalendar">kalendári</Link>.</p>
      </div>

      <div className="grid">
        <Link to="/cvicenie" className="btn">Moje cvičenie dnes</Link>
        <Link to="/jedlo" className="btn secondary">Recepty</Link>
        <Link to="/jedlo#nakup" className="btn outline">Nákupný zoznam</Link>
      </div>
    </div>
  )
}
