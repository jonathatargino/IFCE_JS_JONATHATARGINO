const objetoA = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveA = "Outro valor";
// Não podemos criar um nova nova propriedade para um objeto (sem index signature).
// objetoA.chaveC = "Nova Chave";

// Tipando um objeto
const objetoB: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // index signature -> nos permite criar uma nova propriedade para um objeto
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoB.chaveD = "Chave D";

export default {};
