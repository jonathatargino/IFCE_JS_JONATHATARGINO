// MAP -> Retorna um novo array do mesmo tamanho do array original, sendo que este novo array terá os valores alterados ou não pelo map:

const numeros = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Para cada número do array, o novo array receberá o número ao quadrado.
const numerosAoQuadrado = numeros.map(num => num * num);

// Output: [1,  4,  9, 16, 25, 36, 49, 64, 81, 100 ]
console.log(numerosAoQuadrado);

const pessoas = [
  {nome: "Luiz", idade: 62},
  {nome: "Maria", idade: 23},
  {nome: "Eduardo", idade: 55},
  {nome: "Leticia", idade: 19},
  {nome: "Rosana", idade: 32},
  {nome: "Wallace", idade: 47},
]
// Cria um array de nomes através do array de objetos.
const nomes = pessoas.map(pessoa => pessoa.nome);
// Output: [ 'Luiz', 'Maria', 'Eduardo', 'Leticia', 'Rosana', 'Wallace' ]
console.log(nomes);