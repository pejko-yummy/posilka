export function calculateBmi(weightKg, heightCm) {
  if (!weightKg || !heightCm) return null
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

export function bmiCategory(bmi) {
  if (bmi === null) return null
  if (bmi < 18.5) return { label: 'Podváha', color: '#3498db' }
  if (bmi < 25) return { label: 'Normálna váha', color: '#2ECC71' }
  if (bmi < 30) return { label: 'Nadváha', color: '#FF6B35' }
  return { label: 'Obezita', color: '#E74C3C' }
}
