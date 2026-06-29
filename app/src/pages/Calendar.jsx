import { useLocalStorage } from '../lib/useLocalStorage'
import { computeStreak } from '../lib/checklist'
import { calendarPhotos } from '../data/images'
import PhotoRotator from '../components/PhotoRotator'

const MOTIVATIONAL = {
  0: 'Každý veľký progres začína prvým dňom. Dnes je ten deň! 💪',
  low: 'Pekný začiatok! Pokračuj, každý deň sa počíta. 🙌',
  mid: 'Skvelá práca! Si v tom už niekoľko dní v rade. 🔥',
  high: 'Wow, to je výborný streak! Si na dobrej ceste k cieľu. 🏆',
}

function getMotivation(streak) {
  if (streak === 0) return MOTIVATIONAL[0]
  if (streak < 3) return MOTIVATIONAL.low
  if (streak < 7) return MOTIVATIONAL.mid
  return MOTIVATIONAL.high
}

export default function Calendar() {
  const [checklistHistory] = useLocalStorage('sixpack:checklistHistory', {})
  const streak = computeStreak(checklistHistory)

  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = now.toLocaleDateString('sk-SK', { month: 'long', year: 'numeric' })

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div>
      <h1 className="page-title">Kalendár progresu</h1>

      <PhotoRotator images={calendarPhotos} className="hero-card has-photo">
        <span className="hero-label">🔥 Aktuálny streak</span>
        <div>
          <div className="hero-stat">{streak}</div>
          <span className="hero-sub">{streak === 1 ? 'deň' : 'dní'} — {getMotivation(streak)}</span>
        </div>
      </PhotoRotator>

      <div className="card">
        <h2 style={{ textTransform: 'capitalize' }}>{monthName}</h2>
        <div className="calendar-grid" style={{ marginTop: 10 }}>
          {days.map((day) => {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
            const done = checklistHistory[dateStr]
            return (
              <div key={day} className={`calendar-day ${done ? 'done' : ''}`}>
                {day}
              </div>
            )
          })}
        </div>
        <p className="muted" style={{ marginTop: 10 }}>Zelený deň = splnený celý denný checklist na <a href="/">Domov</a>.</p>
      </div>
    </div>
  )
}
