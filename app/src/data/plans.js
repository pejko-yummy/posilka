export const plans = [
  {
    id: 'start-bez-vybavenia',
    name: 'Štart bez vybavenia',
    level: 'Začiatočník',
    goal: 'Chudnutie',
    durationWeeks: 4,
    daysPerWeek: 3,
    description: 'Cvičenia s vlastnou váhou, žiadne vybavenie potrebné. Ideálne na rozbeh.',
    days: [
      {
        dayNumber: 1,
        name: 'Deň 1 — Celé telo',
        exercises: [
          { name: 'Drepy', sets: 3, reps: 15, restSeconds: 45, description: 'Nohy na šírku bokov, chrbát rovný, drep do polovice.' },
          { name: 'Kliky (aj na kolenách)', sets: 3, reps: 10, restSeconds: 45, description: 'Ruky o niečo širšie ako plecia, telo v jednej línii.' },
          { name: 'Plank', sets: 3, reps: 1, restSeconds: 45, description: 'Vydrž 20-30 sekúnd, brucho a zadok stiahnuté.' },
          { name: 'Výpady', sets: 3, reps: 12, restSeconds: 45, description: 'Striedavo na obe nohy, koleno nesmie prejsť cez palec.' },
        ],
      },
      {
        dayNumber: 2,
        name: 'Deň 2 — Kardio + brucho',
        exercises: [
          { name: 'Jumping jacks', sets: 4, reps: 30, restSeconds: 30, description: 'Rýchle výskoky s rozkročením a tlieskaním nad hlavou.' },
          { name: 'Sklabíky (crunches)', sets: 3, reps: 15, restSeconds: 30, description: 'Ruky za hlavou, dvíhaj len ramená od podlahy.' },
          { name: 'Nohy nahor (leg raises)', sets: 3, reps: 12, restSeconds: 30, description: 'Ležmo na chrbte, dvíhaj rovné nohy k 90°.' },
          { name: 'Mountain climbers', sets: 3, reps: 20, restSeconds: 30, description: 'V planku rýchlo striedaj kolená k hrudníku.' },
        ],
      },
      {
        dayNumber: 3,
        name: 'Deň 3 — Sila',
        exercises: [
          { name: 'Drepy', sets: 4, reps: 15, restSeconds: 45, description: 'Nohy na šírku bokov, chrbát rovný, drep do polovice.' },
          { name: 'Kliky', sets: 4, reps: 10, restSeconds: 45, description: 'Ruky o niečo širšie ako plecia, telo v jednej línii.' },
          { name: 'Glute bridge', sets: 3, reps: 15, restSeconds: 30, description: 'Ležmo na chrbte, dvíhaj boky nahor, stiahni zadok.' },
          { name: 'Plank', sets: 3, reps: 1, restSeconds: 45, description: 'Vydrž 30-40 sekúnd.' },
        ],
      },
    ],
  },
  {
    id: 'domaci-kruhovy-trening',
    name: 'Domáci kruhový tréning',
    level: 'Začiatočník',
    goal: 'Chudnutie',
    durationWeeks: 4,
    daysPerWeek: 3,
    description: 'Intervalová štruktúra 40s práca / 20s pauza. Kombinácia kardio a sily.',
    days: [
      {
        dayNumber: 1,
        name: 'Deň 1 — Okruh A',
        exercises: [
          { name: 'Jumping jacks', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Drepy', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Kliky', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Plank', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
        ],
      },
      {
        dayNumber: 2,
        name: 'Deň 2 — Okruh B',
        exercises: [
          { name: 'Mountain climbers', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Výpady', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Glute bridge', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Sklabíky', sets: 3, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
        ],
      },
      {
        dayNumber: 3,
        name: 'Deň 3 — Okruh A+B kombinácia',
        exercises: [
          { name: 'Jumping jacks', sets: 2, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Drepy', sets: 2, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Kliky', sets: 2, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Mountain climbers', sets: 2, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
          { name: 'Plank', sets: 2, reps: 1, restSeconds: 20, description: '40 sekúnd práce, 20 sekúnd pauza.' },
        ],
      },
    ],
  },
]
