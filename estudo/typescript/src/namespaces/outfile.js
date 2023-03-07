// ES2015 module syntax is preferred over namespaces. -> TypeScript prefere que você não use namespaces
// namespace cria um escopo -> este escopo desconhece tudo que está fora dele.
var MeuNamespace;
(function (MeuNamespace) {
    // para usar algo do namespace fora dele, usamos o export.
    MeuNamespace.nome = "Jonatha";
    var endereco = "Rua 1";
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    var pessoaNamespace = new PessoaDoNamespace(MeuNamespace.nome);
    console.log(pessoaNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        var endereco = "Rua 3";
        OutroNamespace.fruta = "maçã";
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
// Cannot find name 'PessoaDoNamespace'
//const pessoa = PessoaDoNamespace("Jonatha");
// Importando algo do namespace
console.log(MeuNamespace.nome);
// Não conflita variável com mesmo nome pois endereco só existia dentro de namespaces
var endereco = "Rua 2";
console.log(MeuNamespace.OutroNamespace.fruta);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="creating.ts" />
/*
ReferenceError: MeuNamespace is not defined -> erro de runtime
Para conseguir importar namespaces, altere a propriedade module do tsconfig
ou compile o código com um outfile (bundle) ->
npx tsc <arquivo> --outfile <outfile>
*/
console.log(MeuNamespace.nome);
