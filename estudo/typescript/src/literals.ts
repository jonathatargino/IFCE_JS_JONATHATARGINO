// Tipo literal é usar um valor como tipo
let x = 10; // eslint-disable-line
const y = 10;

// Assim, temos:
// let x: number
// const y: 10

// Note que o tipo de y é o seu valor, 10. Isso acontece pois y é uma constante e esse valor nunca vai ser alterado. 10 é um subtipo do tipo number.
// <variavel>: <valor>

let z: 10 | 20 = 10;
z = 20;
//z = 30; -> Type '30' is not assignable to type '10 | 20'.

// Para usar tipos literais em objetos usamos o "as const":

const eu = {
  nome: "Jonatha" as const, // type const = "Jonatha"
  sobrenome: "Targino",
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul") {
  console.log(cor);
}

// escolhaCor("Verde") // Argument of type '"Verde"' is not assignable to parameter of type '"Vermelho" | "Amarelo" | "Azul"
escolhaCor("Vermelho"); // O autocomplete já mostra as opções viáveis
