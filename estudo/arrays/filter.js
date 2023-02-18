// FILTER -> Um método que retorna o array filtrado por uma condição estabelicida

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// O novo array conterá apenas os valores que passarem pela condição. Neste caso, a condição é o número ser par.
const pares = numeros.filter(num => num % 2 == 0);

// Output: [ 50, 80, 2, 8, 22 ]
console.log(pares);


const pessoas = [
  {nome: "Luiz", idade: 62},
  {nome: "Maria", idade: 23},
  {nome: "Eduardo", idade: 55},
  {nome: "Leticia", idade: 19},
  {nome: "Rosana", idade: 32},
  {nome: "Wallace", idade: 47},
]

const pessoasVelhas = pessoas.filter((pessoa) => {
  return pessoa.idade > 40;
})


// Output: [{ nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 }, { nome: 'Wallace', idade: 47 }]
console.log(pessoasVelhas);