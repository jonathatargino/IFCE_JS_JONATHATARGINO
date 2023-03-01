/* eslint-disable */

// Quando se é inicializado uma variável, o TypeScript irá inferir seu tipo, não necessitanto assim de uma anotação de tipagem. (Type string trivially inferred from a string literal, remove type annotation)

// Tipos básicos: (aqui ocorre interferência de tipos)
const nome: string = "Luiz";
const idade: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
// const big: bigInt = 10n;

// Arrays
const arrayDeNumeros: Array<number> = []
const arrayDeNumeros2: number[] = []
const arrayDeStrings: Array<string> = []

// Objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: "Jonatha",
  idade: 19,
  adulto: true
}

//Funções
function soma(x: number, y: number){
  return x+y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y

// result terá tipagem inferida de number pois a function soma tem retorno do tipo number.
const result = soma(2,2)

// Tipo any é um tipo que pode ser "qualquer coisa" e tem que ser evitado. Uma variável ser do tipo any significa que o TypeScript não conseguiu inferir nenhum tipo para ela, sendo necessário um type annotation
function showMessage(msg){
  return msg
}


