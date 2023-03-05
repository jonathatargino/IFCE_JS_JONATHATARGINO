// Type Guard -> estruturas condicionais que verificam o possível tipo de um parâmetro ou variável. Usa-se quando podemos ter mais um de tipo possível para algo.

export function add(a: unknown, b: unknown): number | string {
  // Para a soma ser realizada, o type guard é feito para ter certeza que a e b são numbers.
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

type Pessoa = { nome: string };
type Animal = { cor: string };

// Para verificar se um objeto é instancia de uma classe com instanceof, ou podemos também verificar a existência de uma chave dentro do obj com a palavra chave in
export function mostraCaracteristica(obj: Pessoa | Animal) {
  // console.log(obj.nome); // Property 'nome' does not exist on type 'Animal'
  if ("nome" in obj) return obj.nome;
  return obj.cor;
}
