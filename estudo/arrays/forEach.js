// forEach -> Serve para iterar em um array, sem retornar nada.
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/* Output:
current value: 10, index: 0
current value: 20, index: 1
current value: 30, index: 2
current value: 40, index: 3
current value: 50, index: 4
current value: 60, index: 5
current value: 70, index: 6
current value: 80, index: 7
current value: 90, index: 8 
*/

a1.forEach((numero, index, array) => {
  console.log(`current value: ${numero}, index: ${index}`);
})