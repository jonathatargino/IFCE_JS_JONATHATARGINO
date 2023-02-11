// Ter um código que pode ser pausado -> Lazy Evaluation (Avaliação Preguiçosa)
// Função que dá um retorno específico a cada vez (yield)

function* geradora1(){
  // Código qualquer
  yield 'Valor 1'
  // Código qualquer
  yield 'Valor 2'
  // Código qualquer
  yield 'Valor 3'
}

// Cada vez que o método next for chamado, um novo valor presente no yield será retornado, em ordem. O done do objeto retornado indica se todos os valores da função geradora já foram retornados.
const g1 = geradora1();
// Output: { value: 'Valor 1', done: false }
console.log(g1.next())
// Output: { value: 'Valor 2', done: false }
console.log(g1.next())
// Output: { value: 'Valor 3', done: false }
console.log(g1.next())
// Output: { value: undefined, done: true }
console.log(g1.next())