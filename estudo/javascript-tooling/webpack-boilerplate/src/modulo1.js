const nome = "Jonatha";
const sobrenome = "Targino";
// Obs: o export pode ser um objeto de valores ou pode ser adicionado antes da declaração de cada valor.
export const idade = 19;

function soma(x, y) {
  return x + y;
}

// Exporta variáveis ou funções para que outros arquivos possam importar, podendo usar o dado sem que ele tenha sido declarado no arquivo, pois a declaração dele está dentro do arquivo que o exportou.
export { nome, sobrenome, soma }

// Export default -> Vai ser o padrão exportado pelo módulo. Cada módulo só pode ter uma exportação padrão.
const a = 5;
export default 5;
