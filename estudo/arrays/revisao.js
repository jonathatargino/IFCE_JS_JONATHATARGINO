// Array são valores por referência

// a variável nomes aponta para o endereço de memória que contém o array ["Lucas", "Elinsson", "Neto"]
const nomes = ["Lucas", "Elinsson", "Neto"];

// outroArray não é uma cópia de nomes, e sim uma variável que aponta para o mesmo array.
const outroArray = nomes;

// mudanças em outroArray influenciará no array de nomes pois referenciam o mesmo array.
outroArray.pop()

// Output: [ 'Lucas', 'Elinsson' ]
console.log(nomes)

// Para copiar um array, deve-se usar o SPREAD operator (spread = espalhar) [...]

const frutas = ["Banana", "Limão", "Maçã"]
const copiaFrutas = [...frutas];

// Output: [ 'Banana', 'Limão', 'Maçã' ]
console.log(copiaFrutas);

copiaFrutas.pop()
// Output: [ 'Banana', 'Limão', 'Maçã' ]
console.log(frutas)
// Output: [ 'Banana', 'Limão' ]
console.log(copiaFrutas)


const alfabeto = ["A", "B", "C", "D", "E", "F", "G"]

const indexInicial = 1;
const indexFinal = 4

// SLICE -> retorna um fragmento/parte de um array. Index Inicial: onde o array retornado começara. Index final: index de parada. O valor do indexFinal não estará contido no novo array.
const pedacoAlfabeto = alfabeto.slice(indexInicial, indexFinal)

//Output: [ 'B', 'C', 'D' ]
console.log(pedacoAlfabeto)

// SPLIT -> Separa uma string em um array:

const nome = "Jonatha de Oliveira Targino"
// Irá separar a string por espaço
const nomeArray = nome.split(' ')
// Output: [ 'Jonatha', 'de', 'Oliveira', 'Targino' ]
console.log(nomeArray)

// JOIN -> Une valores de array em uma string
// Irá juntar o array em uma string, com os valores separados por um espaço.
const nomeString = nomeArray.join(' ')
// Output: Jonatha de Oliveira Targino
console.log(nomeString);
