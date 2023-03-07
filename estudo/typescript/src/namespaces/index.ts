/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="creating.ts" />

/*
ReferenceError: MeuNamespace is not defined -> erro de runtime
Para conseguir importar namespaces, altere a propriedade module do tsconfig
ou compile o código com um outfile (bundle) ->
npx tsc <arquivo> --outfile <outfile>
*/
console.log(MeuNamespace.nome);
