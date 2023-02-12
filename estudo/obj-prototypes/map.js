// Map é, como o nome diz, um mapa. A chave de uma instancia de Map é do tipo number e a ordem de inserção é respeitada.
// Obs: No Map usa-se set e get.
const pessoas = [
  {id: 3, nome: "Luiz"},
  {id: 1, nome: "Maria"},
  {id: 2, nome: "Helena"},
]

const novasPessoas = new Map();
for (const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa})
}

/* Output:
  3 => { id: 3, nome: 'Luiz' },
  1 => { id: 1, nome: 'Maria' },
  2 => { id: 2, nome: 'Helena' } 
*/ 
console.log(novasPessoas)
// Output: { id: 2, nome: 'Helena' }
console.log(novasPessoas.get(2))