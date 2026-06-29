import { useState } from 'react'
import { plans } from '../data/plans'
import { useLocalStorage } from '../lib/useLocalStorage'

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

      <div className="card">
        <h2>Vyber si plán</h2>
        {plans.map((p) => (
          <button
            key={p.id}
            className={`btn ${p.id === selectedPlanId ? '' : 'outline'}`}
            style={{ marginBottom: 8 }}
            onClick={() => setSelectedPlanId(p.id)}
          >
            {p.name}
          </button>
        ))}
        <p className="muted" style={{ marginTop: 8 }}>{plan.description}</p>
        <div style={{ marginTop: 8 }}>
          <span className="tag">{plan.level}</span>
          <span className="tag">{plan.durationWeeks} týždne</span>
          <span className="tag">{plan.daysPerWeek}x/týždeň</span>
        </div>
      </div>

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
