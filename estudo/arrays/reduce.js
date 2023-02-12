// REDUCE -> Este método de manipulação de array é muito versátil, sendo possível até realizar filter ou map apenas com o reduce.
// Também é possível fazer cálculos com acumuladores para calcular algo através dos valores do array.

numeros = [5, 50, 80, 1, 2, 3, 4, 5 ,8]
const valorInicial = 0;

const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador
}, valorInicial)
// Output: 158
console.log(total)

const novoArray = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador.push(valor * valor)
  return acumulador
}, [])
// Output: [ 25, 2500, 6400, 1, 4, 9, 16, 25, 64 ]
console.log(novoArray);

// Desafio Filter + Map + Reduce:
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const num = [5, 50, 80, 1, 2, 3, 4, 5 , 8, 7, 11, 15, 22, 27]

const pares = num.filter(num => num % 2 == 0);
const paresDobrados = pares.map(par => par * 2);
const somaParesDobrados = paresDobrados.reduce((acumulador, valor) => {
  return acumulador += valor;
}, 0)

// Output: 332
console.log(somaParesDobrados);