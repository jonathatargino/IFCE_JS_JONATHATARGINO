// ES2015 module syntax is preferred over namespaces. -> TypeScript prefere que você não use namespaces

// namespace cria um escopo -> este escopo desconhece tudo que está fora dele.
namespace MeuNamespace {
  // para usar algo do namespace fora dele, usamos o export.
  export const nome = "Jonatha";

  const endereco = "Rua 1";

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaNamespace = new PessoaDoNamespace(nome);
  console.log(pessoaNamespace);

  export namespace OutroNamespace {
    const endereco = "Rua 3";
    export const fruta = "maçã";
  }
}

// Cannot find name 'PessoaDoNamespace'
//const pessoa = PessoaDoNamespace("Jonatha");

// Importando algo do namespace
console.log(MeuNamespace.nome);

// Não conflita variável com mesmo nome pois endereco só existia dentro de namespaces
const endereco = "Rua 2";

console.log(MeuNamespace.OutroNamespace.fruta);
