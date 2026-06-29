function unsplash(id, width = 800) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const photos = {
  gymGeneral: unsplash('1517836357463-d25dfeac3438'),
  weights: unsplash('1526506118085-60ce8714f8c5'),
  running: unsplash('1605296867304-46d5465a13f1'),
  stretching: unsplash('1581009146145-b5ef050c2e1e'),
  groupWorkout: unsplash('1550345332-09e3ac987658'),
  pushups: unsplash('1577221084712-45b0445d2b00'),
  dumbbells: unsplash('1548690312-e3b507d8c110'),
  yoga: unsplash('1541534741688-6078c6bfb5c5'),

  foodBowl: unsplash('1546069901-ba9599a7e63c'),
  foodSalad: unsplash('1512621776951-a57141f2eefd'),
  foodFruit: unsplash('1482049016688-2d3e1b311543'),
  foodPlate: unsplash('1498837167922-ddd27525d352'),
  foodVeggies: unsplash('1547592180-85f173990554'),
  foodBreakfast: unsplash('1490645935967-10de6ba17061'),
  foodCooking: unsplash('1490818387583-1baba5e638af'),
  foodFresh: unsplash('1606756790138-261d2b21cd75'),
}

export const foodPhotos = [
  unsplash('1546069901-ba9599a7e63c'),
  unsplash('1512621776951-a57141f2eefd'),
  unsplash('1482049016688-2d3e1b311543'),
  unsplash('1498837167922-ddd27525d352'),
  unsplash('1547592180-85f173990554'),
  unsplash('1490645935967-10de6ba17061'),
  unsplash('1490818387583-1baba5e638af'),
  unsplash('1606756790138-261d2b21cd75'),
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
]

export function quoteOfTheDay() {
  const dayIndex = new Date().getDate() % motivationalQuotes.length
  return motivationalQuotes[dayIndex]
}
