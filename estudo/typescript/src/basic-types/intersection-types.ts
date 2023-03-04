type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // Intersection type

const pessoa: Pessoa = {
  nome: "Jonatha",
  sobrenome: "Targino",
  idade: 19,
};

export default {};
