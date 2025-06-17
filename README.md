# 🐳 Animated Whales

**Primo mini progetto** per il corso di **Visualizzazione delle Informazioni**,  
anno accademico **2024/25**

---

## Tecnologie utilizzate

Il progetto è stato sviluppato utilizzando:
- **JavaScript**
- **[D3.js](https://d3js.org)** versione 7

---

## Specifiche progetto

- Crea un file JSON con dei **dati multivariati**: ci sono 10 data-cases e ogni data-case ha **tre variabili quantitative** i cui valori sono tutti positivi
- In base a questi dati, disegna **10 piccole balene** (è sufficiente la silhouette) distribuite **orizzontalmente** nell'area di disegno
- Ogni balena corrisponde a un `data-case` e la sua **coordinata Y** iniziale è ricavata dalla **variabile 1**
- Quando l’utente clicca con il mouse su una balena:
  - Tutte le balene si spostano a una nuova profondità, corrispondente alla **variabile 2**.
  - Al terzo click viene usata la **variabile 3**
  - Al click successivo si torna alla **variabile 1**, e così via ciclicamente
- I cambi di profondità devono avvenire con **animazioni fluide**
- Devono essere usate le **scale di D3.js** per mappare i valori delle variabili sull’intervallo delle coordinate (che dipendono dall'interfaccia grafica)

---



