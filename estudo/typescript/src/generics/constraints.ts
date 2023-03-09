// Para fazer restrições me tipos, usamos o extends
// O tipo K é uma chave do tipo O (se essa restrição não existisse, não seria permitido tipar o retorno como O[K] pois K seria um tipo muito abrangente.)
type ObterChavefn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChavefn = (objeto, chave) => objeto[chave];

const animal = {
  cor: "Rosa pink",
  vacinas: ["Trembolona", "Mesterolona"],
};

// const vacinas: string[]
const vacinas = obterChave(animal, "vacinas");

/* Tipos inferidos pelo TypeScript e generics:
const obterChave: <{
    cor: string;
    vacinas: string[];
}, "vacinas">(objeto: {
    cor: string;
    vacinas: string[];
}, chave: "vacinas") => string[]
*/
