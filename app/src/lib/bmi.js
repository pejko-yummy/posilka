export function calculateBmi(weightKg, heightCm) {
  if (!weightKg || !heightCm) return null
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

export function bmiCategory(bmi) {
  if (bmi === null) return null
  if (bmi < 18.5) return { label: 'Podváha', color: '#00d9f5' }
  if (bmi < 25) return { label: 'Normálna váha', color: '#00f5a0' }
  if (bmi < 30) return { label: 'Nadváha', color: '#ff7a3d' }
  return { label: 'Obezita', color: '#ff4d6d' }
}
