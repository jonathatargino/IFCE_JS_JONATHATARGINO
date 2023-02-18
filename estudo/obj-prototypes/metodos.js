// Copiar um objeto (assim como arrays, objetos são valores passados por referência então não podemos apenas atribuir)
const produto = {nome: "Caneca", preco: 18};
// Assim como em arrays, usa-se o spread operator.
const copiaProduto = {...produto}
// Output: { nome: 'Caneca', preco: 18 }
console.log(copiaProduto);

// Podemos usar o spread operator para criar um novo objeto que vai conter todos as propriedades do que foi "espalhado" e outras chaves. Assim como também sobrescrever propriedades.

const produtoMelhorado = {
  ...produto,
  cor: "vermelha", // nova propriedade
  preco: 20, // sobrescreveu o preco de produto
}
// Output: { nome: 'Caneca', preco: 20, cor: 'vermelha' 
console.log(produtoMelhorado)

// Object.assign -> Pode juntar vários objetos em um só.
const a = {estado: "solido"};
const b = {densidade: "alta"};
const c = {condutor: false};
const abc = Object.assign({}, a, b, c);
// Output: { estado: 'solido', densidade: 'alta', condutor: false }
console.log(abc)

// Object.keys -> Array de chaves do objeto
// Output: [ 'estado', 'densidade', 'condutor' ]
console.log(Object.keys(abc))

// Object.values -> Retorna um array de valores das propriedades
// Output: [ 'solido', 'alta', false ]
console.log(Object.values(abc))

//Object.entries -> Retorna um array de arrays, onde cada subArray terá uma chave e seu respectivo valor.
// Output: [[ 'estado', 'solido' ],[ 'densidade', 'alta' ],[ 'condutor', false ]]
console.log(Object.entries(abc));

// getOwnPropertyDescriptor -> Descreve os atributos/configurações de uma propriedade.
// Output: { value: false, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(abc, 'condutor'))
