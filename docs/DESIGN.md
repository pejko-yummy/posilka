# Sixpack — Dizajn špecifikácia

## Štýl: Moderné & motivačné
Energický, farebný, jednoduchý vizuál inšpirovaný appkami typu Nike Training Club — appka má pôsobiť ako "fitness kamarát", ktorý ťa povzbudzuje, nie ako odborná medicínska tabuľka.

## Farebná paleta
- **Primárna (akcent/CTA)**: Oranžová `#FF6B35` — energia, akcia, tlačidlá "Začať cvičenie".
- **Sekundárna (progres/úspech)**: Zelená `#2ECC71` — splnené úlohy, streak, pozitívny progres.
- **Varovanie/pozor**: Červená `#E74C3C` — len pre dôležité upozornenia (napr. BMI v rizikovej kategórii), používať šetrne.
- **Pozadie**: Biela/svetlosivá `#FAFAFA` — čisté, vzdušné pozadie.
- **Text**: Tmavosivá `#1F2937` (nie čistá čierna — mäkší kontrast).
- **Karty/povrchy**: Biela `#FFFFFF` s jemným stínom (box-shadow), zaoblené rohy (radius ~12-16px).

## Typografia
- Sans-serif, moderné, dobre čitateľné písmo (napr. Inter, Poppins, alebo systémový font stack).
- Veľké, výrazné čísla pre metriky (BMI, váha, streak count) — tieto čísla sú emocionálnym jadrom appky.
- Nadpisy: bold, väčší tracking; bežný text: regular, vysoká čitateľnosť.

## Princípy UX
1. **Veľké tlačidlá, jasné CTA** — začiatočník nemá pochybovať, na čo má kliknúť ďalej.
2. **Žiadny odborný žargón** — jednoduchá slovenčina, vysvetlenia v zátvorkách ak treba.
3. **Okamžitá vizuálna odmena** — po splnení úlohy (cvičenie, checklist) animácia/farba potvrdzujúca úspech (zelená fajka, "+1 streak").
4. **Progres vždy viditeľný** — na hlavnej obrazovke (dashboard) vidno BMI, aktuálny streak, dnešný checklist na prvý pohľad.
5. **Mobile-first responzívny layout** — väčšina používateľov bude appku otvárať na telefóne v prehliadači.

## Hlavné obrazovky (MVP)

### 1. Dashboard (úvodná obrazovka)
- Aktuálne BMI + kategória (farebne odlíšená).
- Dnešný checklist (rýchle odznačenie úloh).
- Streak counter (počet dní v rade).
- Rýchle odkazy: "Moje cvičenie dnes", "Recepty", "Nákupný zoznam".

### 2. BMI & Váha
- Formulár: výška, váha → okamžitý prepočet BMI.
- Graf histórie váhy (jednoduchý líniový graf).
- Kategória BMI s farebným indikátorom (podváha/norma/nadváha/obezita).

### 3. Cvičebné plány
- Zoznam plánov (karty s názvom, dĺžkou, náročnosťou).
- Detail plánu → zoznam dní → detail dňa → zoznam cvičení (séria/opakovania) s checkboxami.

### 4. Recepty
- Mriežka kariet receptov (foto, názov, kalórie, čas prípravy).
- Detail receptu: ingrediencie (s množstvami), postup, link na video, tlačidlo "Pridať do nákupného zoznamu".

### 5. Nákupný zoznam
- Zoznam ingrediencií zlúčený z vybraných receptov, zoskupený podľa kategórie (mliečne, zelenina, mäso...).
- Pri každej položke poznámka "Kúpiš v: Tesco/Kaufland/Lidl/Billa".

### 6. Šport
- Karty typov športov s ikonou, odhadom spálených kalórií/hod.

### 7. Kalendár / Checklist
- Mesačný kalendárový pohľad, dni so splneným checklistom farebne zvýraznené.
- Streak counter, krátka motivačná hláška podľa progresu.

## Navigácia (MVP)
- Spodná navigačná lišta (mobile) / horná lišta (desktop) s ikonami: Dashboard, Cvičenie, Jedlo, Nákup, Šport, Kalendár.
