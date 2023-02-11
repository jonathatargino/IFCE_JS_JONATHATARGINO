// A função recursiva é uma função que se chama de volta e sempre tem um caso base para que esse looping não seja infinito;

function fatorial(n){
  // Caso base: n igual a 1;
  if (n === 1) return 1;
  return n * fatorial(n-1);
}

/* Lógica:
fatorial(n)
n * fatorial(n-1)
n * (n-1) * fatorial ((n-1)-1)
n * (n-1) * (n-2) * ... * 1
*/

// Output: 720
console.log(fatorial(6))