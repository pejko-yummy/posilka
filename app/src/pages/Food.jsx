import { useState } from 'react'
import { recipes, skStores } from '../data/recipes'
import { useLocalStorage } from '../lib/useLocalStorage'

const MEAL_TYPES = ['Všetko', 'Raňajky', 'Obed', 'Večera', 'Snack']

export default function Food() {
  const [filter, setFilter] = useState('Všetko')
  const [openRecipeId, setOpenRecipeId] = useState(null)
  const [shoppingList, setShoppingList] = useLocalStorage('sixpack:shoppingList', {})

  const filtered = filter === 'Všetko' ? recipes : recipes.filter((r) => r.mealType === filter)

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
        {filtered.map((recipe) => {
          const isOpen = openRecipeId === recipe.id
          return (
            <div className="card" key={recipe.id} style={{ gridColumn: isOpen ? '1 / -1' : 'auto' }}>
              <h2 onClick={() => setOpenRecipeId(isOpen ? null : recipe.id)} style={{ cursor: 'pointer' }}>
                {recipe.name}
              </h2>
              <div>
                <span className="tag">{recipe.mealType}</span>
                <span className="tag">{recipe.calories} kcal</span>
                <span className="tag">{recipe.prepTimeMinutes} min</span>
              </div>
              <p className="muted" style={{ marginTop: 8 }}>
                B: {recipe.protein}g · S: {recipe.carbs}g · T: {recipe.fat}g
              </p>

              {isOpen && (
                <>
                  <h3 style={{ marginTop: 14, marginBottom: 6, fontSize: 15 }}>Ingrediencie</h3>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {recipe.ingredients.map((ing) => (
                      <li key={ing.name} className="muted">
                        {ing.amount} {ing.unit} {ing.name} <span className="tag">{skStores.join(', ')}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ marginTop: 14, marginBottom: 6, fontSize: 15 }}>Postup</h3>
                  <ol style={{ paddingLeft: 18, margin: 0 }}>
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="muted">{step}</li>
                    ))}
                  </ol>

                  <a href={recipe.videoUrl} target="_blank" rel="noreferrer" className="btn outline" style={{ marginTop: 12 }}>
                    ▶ Video návod
                  </a>
                  <button className="btn secondary" style={{ marginTop: 8 }} onClick={() => addToShoppingList(recipe)}>
                    + Pridať do nákupného zoznamu
                  </button>
                </>
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
