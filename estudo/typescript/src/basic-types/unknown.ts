// unknow é o pai de todos os outros tipos e funciona como um any mais seguro.

let x: unknown = 50;

x = 100;
const y = 80;

// O tipo unkown é mais seguro por nos impossibilitar de fazer operações em uma variável de tipo desconhecida.
// console.log(x * y); // 'x' is of type 'unknown'

// Para fazer operações com uma variável unkown, é preciso fazer checagem de tipo.

if (typeof x === "number") console.log(x * y); // let x: number

export default {};
