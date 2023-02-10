// Declaração de função

function funcaofunc(){
  console.log("executou");
}

function arrowFunction(){
  console.log("executou");
}

// Function Hoistiong: As funções declaradas com function, independente de em qual linha se localizam no código, terão sua declaração lida no topo do código assim que o código javascript rodar, tornando possível que uma função seja chamada numa linha anterior à sua declaração.

hoistingFunc();

function hoistingFunc(){
  console.log("Hoisting funcionou");
}

// Funções são First-class objects (Objetos de primeira classe), então podemos tratar-las como dados.

//Function Expression
const souUmDado = function(){
    console.log("Sou um dado!");
}

souUmDado();

// Dentro de um objeto
const obj = {
  falar(){
    console.log("Estou falando...")
  }
}
