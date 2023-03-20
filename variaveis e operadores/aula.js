const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("seu carro vai gastar", valorGasto.toFixed(2));
