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

      <div className="card">
        <h2>Tvoje BMI</h2>
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
        {bmi ? (
          <div>
            <div className="metric-number">{bmi.toFixed(1)}</div>
            <span className="badge" style={{ background: category.color }}>{category.label}</span>
          </div>
        ) : (
          <p className="muted">Zadaj výšku a váhu pre výpočet BMI.</p>
        )}
      </div>

      <div className="card">
        <h2>Dnešný checklist</h2>
        {Object.entries(labels).map(([key, label]) => (
          <label key={key} className={`checklist-item ${todayChecklist.items[key] ? 'done' : ''}`}>
            <input type="checkbox" checked={todayChecklist.items[key]} onChange={() => toggleItem(key)} />
            <span>{label}</span>
          </label>
        ))}
      </div>

      <div className="card">
        <h2>🔥 Streak</h2>
        <div className="metric-number">{streak} {streak === 1 ? 'deň' : 'dní'}</div>
        <p className="muted">Pokračuj v rade a sleduj svoj progres v <Link to="/kalendar">kalendári</Link>.</p>
      </div>

      <div className="grid">
        <Link to="/cvicenie" className="btn">Moje cvičenie dnes</Link>
        <Link to="/jedlo" className="btn secondary">Recepty</Link>
        <Link to="/jedlo#nakup" className="btn outline">Nákupný zoznam</Link>
      </div>
    </div>
  )
}
