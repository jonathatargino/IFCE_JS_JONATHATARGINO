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

// SPLICE -> Nesta função, você consegue deletar e injetar elementos no meio de um array 
const numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = [...numeros]

const index = 2
const del = 2;

// Vai remover 2 valores a partir do index 2.
numeros.splice(index,del)
// Output: [ 1, 2, 5, 6 ]
console.log(numeros)

const val1 = 7;
const val2 = 8;

// Vai remover os 2 valores a partir do index 2, e, depois, adicionará os outros valores passados pelos parâmetros.
numeros2.splice(index, del, val1, val2);
// Output: [ 1, 2, 7, 8, 5, 6 ]
console.log(numeros2);

// Concatenando Arrays -> Concatenar = unir

a1 = [1,2,3];
a2 = [4,5,6];
// Não funciona pois transforma em uma string
a3 = a1 + a2;
// Output: 1,2,34,5,6
console.log(a3);

// Adiciona o array dentro dos argumentos ao array que está chamando o método.
a4 = a1.concat(a2);
// Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(a4)

// Também é possivel adicionar todos os elementos de um array à outro através do spread;
const a5 = [...a1, "Um", "Dois", ...a2];
// Output: [1, 2, 3, 'Um', 'Dois', 4, 5, 6]
console.log(a5) 