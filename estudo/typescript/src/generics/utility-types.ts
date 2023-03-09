// Tipos genéricos que já vem por padrão no TypeScript:

// Record -> Objeto onde você fala o tipo da chave e dos valores.
export const objeto1: Record<string, string> = {
  // Record<string, string> -> Todas chaves e valores de objeto1 são do tipo string.
  nome: "Jonatha",
  sobrenome: "Targino",
};

export const objeto2: Record<string, string | number> = {
  nome: "Jonatha",
  sobrenome: "Targino",
  idade: 19,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: string;
};

// Required -> Todas as chaves são obrigatórias
type PessoaRequired = Required<PessoaProtocol>;

// Partial -> Todas as chaves são opcionais
type PessoaPartial = Partial<PessoaRequired>;

// Readonly -> Todas os valores são readonly
type PessoaReadOnly = Readonly<PessoaRequired>;

// Pick -> Escolhe quais chaves do tipo deseja ter no novo tipo criado (Com union types | )
// type PessoaPick = {nome: string; sobrenome: string;}
type PessoaPick = Pick<PessoaRequired, "nome" | "sobrenome">;

// Extract e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

// Exclude -> Pega um tipo sem a intercessão com um outro, ou seja: Pega apenas os tipos que não estão presente no outro tipo.
// type tipoExclude = "A" | "B"
type tipoExclude = Exclude<ABC, CDE>; // Pegará apenas A e B pois C está presente em CDE.

// Extract -> Pega a intercessão dos tipos.
// type tipoExtract = "C"
type tipoExtract = Extract<ABC, CDE>; // A única intercessão de ABC e CDE é C
