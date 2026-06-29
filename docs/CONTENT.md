# Sixpack — Obsahový plán (MVP)

Obsah pre MVP generuje Claude na základe všeobecne známych fitness/výživových princípov (nie lekárske odporúčania — appka obsahuje upozornenie, že nie je náhrada za konzultáciu s lekárom/trénerom).

## Cvičebné plány — štruktúra dát
```
Plan {
  id, name, level (začiatočník), goal (chudnutie), durationWeeks, daysPerWeek
  days: [
    { dayNumber, name, exercises: [
        { name, sets, reps, restSeconds, description, muscleGroup }
    ]}
  ]
}
```

### MVP obsah — 2 plány
1. **"Štart bez vybavenia" (4 týždne, 3x/týždeň)** — cvičenia s vlastnou váhou: drepy, kliky (aj na kolenách), plank, výpady, nohy nahor/sklabíky, jumping jacks.
2. **"Domáci kruhový tréning" (4 týždne, 3x/týždeň)** — kruhový trénink, intervalová štruktúra (40s práca/20s pauza), kombinácia kardio + sila.

## Recepty — štruktúra dát
```
Recipe {
  id, name, mealType (raňajky/obed/večera/snack), calories, protein, carbs, fat
  prepTimeMinutes, photoUrl, videoUrl (YouTube link)
  ingredients: [{ name, amount, unit, storeCategory }]
  steps: [string]
}
```

### MVP obsah — minimálne 8-10 receptov
- Pokryť raňajky (2-3), obed (3-4), večera (3-4), snack (1-2).
- Zamerané na vysoký proteín, primeraný kalorický deficit, jednoduchú prípravu (do 30 min).
- Video linky: vyhľadať existujúce overené slovenské/české YouTube recepty alebo všeobecné jednoduché receptové videá (placeholder linky, neskôr nahradiť reálnymi po výbere/licencovaní).

## Mapovanie ingrediencií na SK obchody
```
StoreMapping {
  ingredientCategory (napr. "kuracie mäso", "ovsené vločky", "zelenina")
  availableAt: ["Tesco", "Kaufland", "Lidl", "Billa"]
}
```
- Pre MVP: jednoduché statické mapovanie kategórie ingrediencie na zoznam reťazcov, kde sa bežne predáva (všetky základné potraviny sú dostupné vo všetkých 4 reťazcoch — info slúži najmä ako potvrdenie "dá sa kúpiť bežne", nie presná dostupnosť/skladovosť).
- Fáza 2: nahradiť reálnymi affiliate odkazmi na konkrétne produkty.

## Typy športov — štruktúra dát
```
Sport {
  id, name, caloriesPerHour (priemerný odhad pre osobu ~75kg), indoorOutdoor, equipmentNeeded, description
}
```

### MVP obsah — min. 8 športov
Beh, rýchla chôdza, bicykel, plávanie, skákanie cez švihadlo, futbal/kolektívne športy, posilňovanie, domáce kardio (HIIT).

## Motivačné hlášky (checklist/kalendár)
- Krátky zoznam (15-20) motivačných hlášok zobrazovaných podľa stavu streaku (0 dní, 3+ dní, 7+ dní, pokles streaku) — v slovenčine, pozitívny a podporný tón, žiadne zahanbovanie pri výpadku.

## Zdroj právnej istoty
- Disclaimer v appke: "Sixpack neposkytuje lekárske poradenstvo. Pred začatím cvičebného alebo stravovacieho programu odporúčame konzultáciu s lekárom."
