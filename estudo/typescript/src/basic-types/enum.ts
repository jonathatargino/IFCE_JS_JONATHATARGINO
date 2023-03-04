// enum é uma estrutura de dados não ordenada, que utilizamos quando queremos estabelecer mais de uma opção para algo.
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores.VERMELHO); // 0
console.log(Cores[0]); // VERMELHO

// Como o enum não é ordenado, é possível alterar seus indices:

enum OutrasCores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
  ROXO = "ROXO",
}

console.log(OutrasCores[0]); // undefined
console.log(OutrasCores[10]); // VERMELHO
console.log(OutrasCores.ROXO); // ROXO

export default {};
