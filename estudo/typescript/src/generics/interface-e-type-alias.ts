// Dois tipos genéricos (T e U)
// Uma atribuição dos tipos genéricos estabelece o valor default, fazendo com que não seja obrigatório enviar o tipo ao usar a interface.
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: "Jonatha",
  sobrenome: "Targino",
  idade: 19,
};

const robot: PessoaProtocolo<number, number> = {
  nome: 28231239123,
  sobrenome: 100023210,
  idade: 0,
};

console.log(aluno, robot);
