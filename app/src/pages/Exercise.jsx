import { useState } from 'react'
import { plans } from '../data/plans'
import { useLocalStorage } from '../lib/useLocalStorage'
import { photos } from '../data/images'
import { exerciseVideos } from '../data/exerciseVideos'

const planPhotos = [photos.pushups, photos.gymGeneral]

export default function Exercise() {
  const [selectedPlanId, setSelectedPlanId] = useLocalStorage('sixpack:selectedPlan', plans[0].id)
  const [completed, setCompleted] = useLocalStorage('sixpack:completedExercises', {})
  const [openDay, setOpenDay] = useState(null)

  const plan = plans.find((p) => p.id === selectedPlanId) ?? plans[0]

  function toggleExercise(dayNumber, exerciseName) {
    const key = `${plan.id}-${dayNumber}-${exerciseName}`
    setCompleted({ ...completed, [key]: !completed[key] })
  }

  return (
    <div>
      <h1 className="page-title">Cvičebné plány</h1>

      <div className="hero-row">
        {plans.map((p, i) => (
          <button
            key={p.id}
            className="hero-card has-photo"
            style={{
              backgroundImage: `url(${planPhotos[i % planPhotos.length]})`,
              border: p.id === selectedPlanId ? '2px solid rgba(255,255,255,0.7)' : 'none',
              textAlign: 'left',
              width: '100%',
            }}
            onClick={() => setSelectedPlanId(p.id)}
          >
            <span className="hero-label">{p.level}</span>
            <div>
              <div className="hero-stat" style={{ fontSize: 22 }}>{p.name}</div>
              <span className="hero-sub">{p.durationWeeks} týždne · {p.daysPerWeek}x/týždeň</span>
            </div>
          </button>
        ))}
      </div>
      <p className="muted" style={{ marginBottom: 16 }}>{plan.description}</p>

      {plan.days.map((day) => {
        const isOpen = openDay === day.dayNumber
        const doneCount = day.exercises.filter((ex) => completed[`${plan.id}-${day.dayNumber}-${ex.name}`]).length
        return (
          <div className="card" key={day.dayNumber}>
            <h2 onClick={() => setOpenDay(isOpen ? null : day.dayNumber)} style={{ cursor: 'pointer' }}>
              {day.name} ({doneCount}/{day.exercises.length}) {isOpen ? '▲' : '▼'}
            </h2>
            {isOpen && day.exercises.map((ex) => {
              const key = `${plan.id}-${day.dayNumber}-${ex.name}`
              return (
                <label key={key} className={`checklist-item ${completed[key] ? 'done' : ''}`}>
                  <input type="checkbox" checked={!!completed[key]} onChange={() => toggleExercise(day.dayNumber, ex.name)} />
                  <span>
                    <strong>{ex.name}</strong> — {ex.sets}x{ex.reps}, pauza {ex.restSeconds}s
                    <br />
                    <span className="muted">{ex.description}</span>
                    {exerciseVideos[ex.name] && (
                      <>
                        <br />
                        <a
                          href={exerciseVideos[ex.name]}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ fontSize: 13, fontWeight: 700 }}
                        >
                          ▶ Video ako na to
                        </a>
                      </>
                    )}
                  </span>
                </label>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
