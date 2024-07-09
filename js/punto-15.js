let dolares = 1000;

// Definir tasas de cambio
const tasaEuro = 0.95; // 1 USD = 0.95 EUR
const tasaLibra = 0.82; // 1 USD = 0.82 GBP
const tasaYen = 130; // 1 USD = 130 JPY

// Convertir a euros
let euros = dolares * tasaEuro;
console.log(`${dolares} USD equivalen a ${euros.toFixed(2)} EUR`); // Muestra resultado con 2 decimales

// Convertir a libras esterlinas
let libras = dolares * tasaLibra;
console.log(`${dolares} USD equivalen a ${libras.toFixed(2)} GBP`); // Muestra resultado con 2 decimales

// Convertir a yenes japoneses
let yenes = dolares * tasaYen;
console.log(`${dolares} USD equivalen a ${yenes.toFixed(0)} JPY`); // Muestra resultado sin decimales (JPY no usa decimales comunes)
