// Type alias nada mais é do que criar um tipo.
type Idade = number; // Um tipo criado sempre inicia com letra maíuscula.
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK; // Union Type

const minhaPessoa: Pessoa = {
  nome: "Jonatha",
  idade: 19,
  salario: 200_000,
  corPreferida: "Vermelho",
};

export default {};
