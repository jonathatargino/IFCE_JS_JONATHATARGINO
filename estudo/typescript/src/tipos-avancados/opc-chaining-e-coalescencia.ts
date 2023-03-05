type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "Processo judidicial",
  texto: "José Lisboa Neto está sendo processado...",
};

// documento.data.getDate(); // 'documento.data' is possibly 'undefined'

// Encadeamento opcional (?.) -> possibilita tentar acessar propriedades e métodos de um objeto mesmo que elas não existam.
documento.data?.getDate(); // se data não existir, retorna undefined.

// Operador de coalescência nula (??) -> Verifica se o lado esquerdo da expressão é um não valor (null ou undefined) e, se for, escolherá o lado direto da expressão. Caso contrário, o lado esquerdo será escolhido.
console.log(undefined ?? "direito"); // lado direito escolhido
console.log("esquerdo" ?? "direito"); // lado esquerdo escolhido

// Essas duas funcionalidades podem ser usadas juntas já que quando uma propriedade não existe no encadeamento opcional, ela retornará undefined.

console.log(documento.data?.getDate() ?? "não existe data");
