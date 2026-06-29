import { useState } from 'react'
import { recipes, skStores } from '../data/recipes'
import { useLocalStorage } from '../lib/useLocalStorage'
import { foodPhotos } from '../data/images'
import { addRecipeToLog, removeEntryFromLog, getTodayLog } from '../lib/dailyLog'

const MEAL_TYPES = ['Všetko', 'Raňajky', 'Obed', 'Večera', 'Snack']

export default function Food() {
  const [filter, setFilter] = useState('Všetko')
  const [openRecipeId, setOpenRecipeId] = useState(null)
  const [shoppingList, setShoppingList] = useLocalStorage('sixpack:shoppingList', {})
  const [dailyLog, setDailyLog] = useLocalStorage('sixpack:dailyLog', {})

  const filtered = filter === 'Všetko' ? recipes : recipes.filter((r) => r.mealType === filter)
  const todayLog = getTodayLog(dailyLog)

  function logMeal(recipe) {
    setDailyLog(addRecipeToLog(dailyLog, recipe))
  }

  function removeLoggedEntry(entryId) {
    setDailyLog(removeEntryFromLog(dailyLog, entryId))
  }

  function addToShoppingList(recipe) {
    const next = { ...shoppingList }
    recipe.ingredients.forEach((ing) => {
      const key = ing.name
      if (next[key]) {
        next[key] = { ...next[key], amount: next[key].amount + ing.amount }
      } else {
        next[key] = { ...ing }
      }
    })
    setShoppingList(next)
  }

  function clearShoppingList() {
    setShoppingList({})
  }

  function removeItem(name) {
    const next = { ...shoppingList }
    delete next[name]
    setShoppingList(next)
  }

  const shoppingItems = Object.entries(shoppingList)

  return (
    <div>
      <h1 className="page-title">Jedlo a recepty</h1>

      <div className="hero-card variant-cyan">
        <span className="hero-label">📊 Dnešný príjem</span>
        <div>
          <div className="hero-stat" style={{ fontSize: 38 }}>{Math.round(todayLog.totals.calories)} kcal</div>
          <span className="hero-sub">
            B {Math.round(todayLog.totals.protein)}g · S {Math.round(todayLog.totals.carbs)}g · T {Math.round(todayLog.totals.fat)}g
          </span>
        </div>
        {todayLog.entries.length > 0 && (
          <div style={{ position: 'relative', zIndex: 1, marginTop: 10 }}>
            {todayLog.entries.map((entry) => (
              <div key={entry.id} className="hero-sub" style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span>{entry.name} ({entry.calories} kcal)</span>
                <button
                  onClick={() => removeLoggedEntry(entry.id)}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: 13 }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        {MEAL_TYPES.map((type) => (
          <button
            key={type}
            className={`btn ${filter === type ? '' : 'outline'}`}
            style={{ marginBottom: 6, marginRight: 6, width: 'auto', padding: '8px 14px' }}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((recipe, i) => {
          const isOpen = openRecipeId === recipe.id
          return (
            <div
              className="hero-card has-photo"
              key={recipe.id}
              style={{
                backgroundImage: `url(${foodPhotos[i % foodPhotos.length]})`,
                gridColumn: isOpen ? '1 / -1' : 'auto',
                cursor: 'pointer',
              }}
              onClick={() => setOpenRecipeId(isOpen ? null : recipe.id)}
            >
              <span className="hero-pill">{recipe.mealType}</span>
              <div>
                <div className="hero-stat" style={{ fontSize: 30 }}>{recipe.calories} kcal</div>
                <div className="hero-sub" style={{ fontWeight: 700, color: '#fff', marginTop: 2 }}>{recipe.name}</div>
                <div className="hero-sub">B {recipe.protein}g · S {recipe.carbs}g · T {recipe.fat}g · {recipe.prepTimeMinutes} min</div>
              </div>

              {isOpen && (
                <div onClick={(e) => e.stopPropagation()} style={{ cursor: 'default', marginTop: 10 }}>
                  <h3 style={{ marginBottom: 6, fontSize: 15, color: '#fff' }}>Ingrediencie</h3>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {recipe.ingredients.map((ing) => (
                      <li key={ing.name} className="hero-sub">
                        {ing.amount} {ing.unit} {ing.name}
                      </li>
                    ))}
                  </ul>
                  <p className="hero-sub" style={{ marginTop: 4 }}>Dostupné v: {skStores.join(', ')}</p>

                  <h3 style={{ marginTop: 14, marginBottom: 6, fontSize: 15, color: '#fff' }}>Postup</h3>
                  <ol style={{ paddingLeft: 18, margin: 0 }}>
                    {recipe.steps.map((step, j) => (
                      <li key={j} className="hero-sub">{step}</li>
                    ))}
                  </ol>

                  <a href={recipe.videoUrl} target="_blank" rel="noreferrer" className="btn outline" style={{ marginTop: 12 }}>
                    ▶ Video návod
                  </a>
                  <button className="btn secondary" style={{ marginTop: 8 }} onClick={() => addToShoppingList(recipe)}>
                    + Pridať do nákupného zoznamu
                  </button>
                  <button className="btn outline" style={{ marginTop: 8 }} onClick={() => logMeal(recipe)}>
                    📊 Pridať do denného príjmu
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="card" id="nakup">
        <h2>🛒 Nákupný zoznam</h2>
        {shoppingItems.length === 0 && <p className="muted">Zoznam je prázdny. Otvor recept a pridaj ingrediencie.</p>}
        {shoppingItems.map(([name, ing]) => (
          <label key={name} className="checklist-item">
            <input type="checkbox" onChange={() => removeItem(name)} />
            <span>{ing.amount} {ing.unit} {name} <span className="muted">({ing.storeCategory})</span></span>
          </label>
        ))}
        {shoppingItems.length > 0 && (
          <>
            <p className="muted" style={{ marginTop: 8 }}>Dostupné v: {skStores.join(', ')}</p>
            <button className="btn outline" style={{ marginTop: 8 }} onClick={clearShoppingList}>Vyčistiť zoznam</button>
          </>
        )}
      </div>
    </div>
  )
}
