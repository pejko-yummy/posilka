function unsplash(id, width = 800) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const photos = {
  gymGeneral: unsplash('1571019613454-1cb2f99b2d8b'),
  weights: unsplash('1594381898411-846e7d193883'),
  running: unsplash('1571731956672-f2b94d7dd0cb'),
  stretching: unsplash('1584863265045-f9d10ca7fa61'),
  groupWorkout: unsplash('1546483875-ad9014c88eba'),
  pushups: unsplash('1574680178050-55c6a6a96e0a'),
  dumbbells: unsplash('1609899517237-77d357b047cf'),
  yoga: unsplash('1574680088814-c9e8a10d8a4d'),

  foodBowl: unsplash('1556911073-a517e752729c'),
  foodSalad: unsplash('1644704170910-a0cdf183649b'),
  foodFruit: unsplash('1533777857889-4be7c70b33f7'),
  foodPlate: unsplash('1625937286074-9ca519d5d9df'),
  foodVeggies: unsplash('1609342332922-c1d9ace16697'),
  foodBreakfast: unsplash('1518912006-3761723e528a'),
  foodCooking: unsplash('1615085339695-d5aaf7941e50'),
  foodFresh: unsplash('1681579289908-194848111a9a'),
}

export const foodPhotos = [
  unsplash('1556911073-a517e752729c'),
  unsplash('1644704170910-a0cdf183649b'),
  unsplash('1533777857889-4be7c70b33f7'),
  unsplash('1625937286074-9ca519d5d9df'),
  unsplash('1609342332922-c1d9ace16697'),
  unsplash('1518912006-3761723e528a'),
  unsplash('1615085339695-d5aaf7941e50'),
  unsplash('1681579289908-194848111a9a'),
]

export const motivationalQuotes = [
  'Telo dosiahne, čo myseľ uverí.',
  'Každý krok dnes ťa posúva k zajtrajšiemu cieľu.',
  'Nečakaj na motiváciu. Začni a ona príde.',
  'Pokrok, nie perfekcia.',
  'Malé kroky každý deň = veľká zmena za rok.',
  'Najťažší krok je ten prvý. Spravil si ho.',
  'Tvoje jediné porovnanie je ty z minulého týždňa.',
  'Disciplína je most medzi cieľmi a úspechom.',
  'Si silnejšia, než si myslíš.',
  'Dnešné úsilie je zajtrajšia sila.',
  'Nevzdávaj sa. Začiatky sú vždy najťažšie.',
  'Tvoje telo počuje všetko, čo si myseľ hovorí. Buď k sebe milá.',
]

export function quoteOfTheDay() {
  const dayIndex = new Date().getDate() % motivationalQuotes.length
  return motivationalQuotes[dayIndex]
}
