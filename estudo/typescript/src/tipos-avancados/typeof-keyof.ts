// typeof pode ser usado para obter o tipo de algo, enquanto o keyof é usado para obter as chaves de um tipo.

const coresObj = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
};

// typeof coresObj será o tipo inferido pelo TypeScript  const coresObj: {vermelho: string; verde: string; azul: string;}
// keyof typeof coresObj será as chaves do tipo de coresObj, ou seja, vermelho, verde e azul.
function traduzirCor(cor: keyof typeof coresObj, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzirCor("vermelho", coresObj));
