// Usando chaves em tipos, podemos falar que o tipo de uma chave se espelha em outra chave, ou seja, quando a chave mudar, a outra também.

type Veiculo = {
  marca: string;
  ano: string;
};

// Dessa forma, brand e year tem o mesmo tipo de marca e ano, respectivamente.
type Car = {
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
};
