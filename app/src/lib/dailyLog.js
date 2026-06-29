export function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function emptyTotals() {
  return { calories: 0, protein: 0, carbs: 0, fat: 0 }
}

export function addRecipeToLog(log, recipe) {
  const date = todayKey()
  const day = log[date] ?? { entries: [], totals: emptyTotals() }
  const entries = [...day.entries, { id: `${recipe.id}-${Date.now()}`, name: recipe.name, calories: recipe.calories, protein: recipe.protein, carbs: recipe.carbs, fat: recipe.fat }]
  const totals = entries.reduce(
    (acc, e) => ({
      calories: acc.calories + e.calories,
      protein: acc.protein + e.protein,
      carbs: acc.carbs + e.carbs,
      fat: acc.fat + e.fat,
    }),
    emptyTotals()
  )
  return { ...log, [date]: { entries, totals } }
}

export function removeEntryFromLog(log, entryId) {
  const date = todayKey()
  const day = log[date]
  if (!day) return log
  const entries = day.entries.filter((e) => e.id !== entryId)
  const totals = entries.reduce(
    (acc, e) => ({
      calories: acc.calories + e.calories,
      protein: acc.protein + e.protein,
      carbs: acc.carbs + e.carbs,
      fat: acc.fat + e.fat,
    }),
    emptyTotals()
  )
  return { ...log, [date]: { entries, totals } }
}

export function getTodayLog(log) {
  return log[todayKey()] ?? { entries: [], totals: emptyTotals() }
}
