// Funções Fábrica ou Factory Functions são funções que retornam objetos

function criaPessoa(nome, sobrenome){
  return {
    nome,
    sobrenome,
    // Método getter (obter um valor)
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },

    // Metodo setter (setar um valor)
    set nomeCompleto(nomeCompleto){
      splitedNomeCompleto = nomeCompleto.split(' ');
      this.nome = splitedNomeCompleto.shift();
      this.sobrenome = splitedNomeCompleto.join(' ')
    }
  }
}

const p1 = criaPessoa("Jonatha", "Targino");
/* Output:
{
  nome: 'Jonatha',
  sobrenome: 'Targino',
  nomeCompleto: [Getter/Setter]
}
*/
console.log(p1);

// Obs: para diferenciar a usagem de uma propriedade com metodo get e set, é simples: método set = atribuição. método get = acessar valor;

// (Set)
p1.nomeCompleto = "Jorge Vitor da Silva";
// (Get) Output: Jorge Vitor da Silva
console.log(p1.nomeCompleto);
// Output: Jorge
console.log(p1.nome);
// Output: Vitor da Silva
console.log(p1.sobrenome);