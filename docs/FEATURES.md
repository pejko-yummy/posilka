# Sixpack — Funkcie

## Legenda
- 🟢 MVP (Fáza 1) — implementujeme teraz
- 🟡 Fáza 2 — po overení MVP
- 🔵 Fáza 3 — medzinárodná expanzia

---

## 1. BMI a sledovanie váhy 🟢
- Zadanie výšky a váhy → automatický prepočet BMI s kategóriou (podváha/norma/nadváha/obezita).
- Pri každom novom zázname váhy sa BMI prepočíta automaticky.
- História váhy v jednoduchom grafe (trend v čase).
- Odporúčaná cieľová váha / rozsah na základe výšky.
- 🟡 Pripomienky na zaznamenanie váhy (notifikácie).
- 🟡 Prepočet ďalších metrík (% telesného tuku odhadom, BMR, denný kalorický príjem).

## 2. Cvičebné plány 🟢
- Plány pre začiatočníkov zamerané na chudnutie (doma, bez/s minimom vybavenia).
- Štruktúra: plán na 4-8 týždňov, rozdelený na dni (napr. 3x týždenne).
- Každé cvičenie: názov, počet sérií/opakovaní, GIF/popis správnej techniky, úroveň náročnosti.
- Možnosť odznačiť cvičenie ako dokončené → prepojené na checklist/kalendár.
- 🟡 Personalizácia plánu podľa BMI, veku, dostupného vybavenia.
- 🟡 Video ukázky cvičení (vlastné natočené alebo licencované).
- 🔵 Adaptívne plány podľa progresu (AI úprava náročnosti).

## 3. Jedlo — inšpirácie, recepty, videá 🟢
- Databáza receptov vhodných na chudnutie (raňajky/obed/večera/snack).
- Každý recept obsahuje: foto, kalórie, makrá (bielkoviny/sacharidy/tuky), čas prípravy.
- Presný zoznam ingrediencií s množstvami.
- Link na video návod (YouTube) ako jedlo uvariť.
- Filtrovanie podľa typu jedla, kalórií, času prípravy, diétnych obmedzení (vegetariánske atď. — 🟡).
- 🟡 Generovanie týždenného jedálničku na základe cieľa (kalorický deficit).
- 🔵 Lokalizované recepty podľa krajiny/kultúry.

## 4. Nákupný zoznam a SK obchody 🟢
- Automatické generovanie nákupného zoznamu z vybraných receptov (zlúčenie duplicitných ingrediencií).
- Pri každej ingrediencii odkaz/informácia, kde sa dá kúpiť na Slovensku (Tesco, Kaufland, Lidl, Billa).
- 🟡 Affiliate odkazy priamo na produkty v online obchodoch (Kosik.sk, Rohlik.sk).
- 🟡 Odhad ceny nákupného zoznamu.
- 🔵 Lokalizácia obchodov podľa krajiny.

## 5. Šport a aktivity na chudnutie 🟢
- Prehľad typov športov vhodných na chudnutie (beh, plávanie, bicykel, kolektívne športy, chôdza) s odhadom spálených kalórií za hodinu.
- Odporúčania podľa preferencií používateľa (vonku/vnútri, sám/v skupine, lacné/drahé vybavenie).
- 🟡 Prepojenie na lokálne SK kluby/posilňovne/kurzy (partnerstvá).
- 🔵 Mapovanie športových zariadení v meste (geolokácia).

## 6. Motivačný kalendár a checklist 🟢
- Denný checklist: cvičenie dokončené, jedlo podľa plánu, voda, váha zaznamenaná.
- Kalendárový pohľad s vizuálnym označením splnených dní (farebné body/streak).
- Streak counter (počet dní v rade) ako motivačný prvok.
- 🟡 Odznaky/achievementy za míľniky (7 dní v rade, -2kg, atď.).
- 🟡 Notifikácie/pripomienky.
- 🔵 Sociálne porovnanie / komunitné výzvy (rebríčky, skupiny priateľov).

## 7. Účet a personalizácia
- 🟢 MVP: žiadny účet, dáta lokálne v prehliadači (localStorage).
- 🟡 Registrácia/prihlásenie (email), dáta v databáze, synchronizácia medzi zariadeniami.
- 🟡 Onboarding flow: vek, výška, váha, cieľ, úroveň aktivity → personalizovaný plán.
- 🔵 Viacjazyčnosť a viacmenová podpora.

## 8. Platby a predplatné
- 🟡 Freemium: BMI kalkulačka, checklist a základné cvičenia zadarmo.
- 🟡 Premium predplatné: plné cvičebné plány, všetky recepty, personalizácia, bez reklám.
- 🔵 Rôzne cenové úrovne podľa trhu/krajiny.

---

## Prioritizácia pre MVP (presné zadanie pre vývoj teraz)
1. BMI kalkulačka s automatickým prepočtom pri zmene váhy.
2. Cvičebné plány pre začiatočníkov (min. 1-2 kompletné plány).
3. Recepty s ingredienciami + link na video + info o SK obchodoch.
4. Zoznam typov športov s odhadom spálených kalórií.
5. Motivačný kalendár/checklist so streakom.
6. Všetko funguje bez nutnosti registrácie, dáta v localStorage.
