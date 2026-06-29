export const CHECKLIST_KEYS = ['cvicenie', 'jedlo', 'voda', 'vaha']

export function isDayDone(items) {
  return CHECKLIST_KEYS.every((key) => items[key])
}

export function computeStreak(history) {
  const dates = Object.keys(history).filter((date) => history[date]).sort().reverse()
  if (dates.length === 0) return 0

  let streak = 0
  let cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  for (let i = 0; i < dates.length; i++) {
    const expected = cursor.toISOString().slice(0, 10)
    if (dates[i] === expected) {
      streak += 1
      cursor.setDate(cursor.getDate() - 1)
    } else if (i === 0 && dates[i] !== expected) {
      const yesterday = new Date(cursor)
      yesterday.setDate(yesterday.getDate() - 1)
      if (dates[i] === yesterday.toISOString().slice(0, 10)) {
        streak += 1
        cursor = yesterday
        cursor.setDate(cursor.getDate() - 1)
      } else {
        break
      }
    } else {
      break
    }
  }
  return streak
}
