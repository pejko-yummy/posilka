import { useState, useEffect } from 'react'
import { useLocalStorage } from '../lib/useLocalStorage'
import { calculateBmi, bmiCategory } from '../lib/bmi'
import { isDayDone, computeStreak } from '../lib/checklist'
import { photos, motivationalQuotes } from '../data/images'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [profile, setProfile] = useLocalStorage('sixpack:profile', { heightCm: '', weightKg: '', setupDone: false })
  const [weightHistory, setWeightHistory] = useLocalStorage('sixpack:weightHistory', [])
  const [checklist, setChecklist] = useLocalStorage('sixpack:todayChecklist', {
    date: new Date().toISOString().slice(0, 10),
    items: { cvicenie: false, jedlo: false, voda: false, vaha: false },
  })
  const [checklistHistory, setChecklistHistory] = useLocalStorage('sixpack:checklistHistory', {})
  const [isEditingProfile, setIsEditingProfile] = useState(!profile.setupDone)
  const [draft, setDraft] = useState({ heightCm: profile.heightCm, weightKg: profile.weightKg })
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % motivationalQuotes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const today = new Date().toISOString().slice(0, 10)
  const todayChecklist = checklist.date === today ? checklist : { date: today, items: { cvicenie: false, jedlo: false, voda: false, vaha: false } }
  const streak = computeStreak(checklistHistory)

  const bmi = calculateBmi(Number(profile.weightKg), Number(profile.heightCm))
  const category = bmiCategory(bmi)

  function recordWeight(weightKg) {
    const weight = Number(weightKg)
    if (!weight) return
    const lastEntry = weightHistory[weightHistory.length - 1]
    if (!lastEntry || lastEntry.date !== today) {
      setWeightHistory([...weightHistory, { date: today, weightKg: weight }])
    } else {
      setWeightHistory(weightHistory.map((e) => (e.date === today ? { ...e, weightKg: weight } : e)))
    }
  }

  function saveProfile() {
    setProfile({ heightCm: draft.heightCm, weightKg: draft.weightKg, setupDone: true })
    recordWeight(draft.weightKg)
    setIsEditingProfile(false)
  }

  function startEdit() {
    setDraft({ heightCm: profile.heightCm, weightKg: profile.weightKg })
    setIsEditingProfile(true)
  }

  function quickLogWeight(weightKg) {
    setProfile({ ...profile, weightKg })
    recordWeight(weightKg)
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

      <div className="quote-card" style={{ backgroundImage: `url(${photos.groupWorkout})` }}>
        <div>
          <blockquote>"{motivationalQuotes[quoteIndex]}"</blockquote>
          <cite>Motivácia na dnes</cite>
        </div>
      </div>

      <div className="hero-row">
        <div className="hero-card has-photo" style={{ backgroundImage: `url(${photos.weights})` }}>
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
        <div className="hero-card has-photo" style={{ backgroundImage: `url(${photos.running})` }}>
          <span className="hero-label">🔥 Streak</span>
          <div className="hero-stat">{streak}</div>
          <span className="hero-sub">{streak === 1 ? 'deň v rade' : 'dní v rade'}</span>
        </div>
      </div>

      <div className="card">
        {isEditingProfile ? (
          <>
            <h2>{profile.setupDone ? 'Upraviť údaje' : 'Zadaj svoje údaje'}</h2>
            <div className="input-row">
              <label>Výška (cm)</label>
              <input
                type="number"
                value={draft.heightCm}
                onChange={(e) => setDraft({ ...draft, heightCm: e.target.value })}
                placeholder="napr. 178"
              />
            </div>
            <div className="input-row">
              <label>Váha (kg)</label>
              <input
                type="number"
                value={draft.weightKg}
                onChange={(e) => setDraft({ ...draft, weightKg: e.target.value })}
                placeholder="napr. 85"
              />
            </div>
            <button className="btn" onClick={saveProfile}>Uložiť</button>
          </>
        ) : (
          <>
            <h2>Tvoj profil</h2>
            <p className="muted">Výška: {profile.heightCm} cm · Aktuálna váha: {profile.weightKg} kg</p>
            <div className="input-row" style={{ marginTop: 12 }}>
              <label>Zaznamenať novú váhu (kg)</label>
              <input
                type="number"
                defaultValue=""
                placeholder="napr. 83.5"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    quickLogWeight(e.target.value)
                    e.target.value = ''
                  }
                }}
              />
            </div>
            <button className="btn outline" style={{ marginTop: 8 }} onClick={startEdit}>Upraviť výšku/váhu</button>
          </>
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
