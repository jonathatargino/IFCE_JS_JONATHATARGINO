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

// Parâmetros


// As funções declaradas com function contém um objeto chamado arguments que conterá todos os argumentos recebidos durante uma execução da função.
function funcao(){  
  console.log(arguments)
}

funcao("Valor", 1, 2, 3, 4, 5);

// O valor default de um parâmetro criado é undefined

function funcao2(a){
  // Output: undefined
  console.log(a);
}

// Setando valor padrão de parâmetro caso não seja passo um na execução da função:

function printaNumero(num = 0){
  console.log(num);
}

// Output: 8
printaNumero(8)

// Output: 0
printaNumero()


// Desestruturação de objeto nos parâmetros
function funcaoDesetruturaObj({nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade);
}

funcaoDesetruturaObj({nome: "Jonatha", sobrenome: "Targino", idade: 19})

// Desestruturação de listas nos parâmetros
function funcaoDesetruturaArray([nome, sobrenome, idade]){
  console.log(nome, sobrenome, idade);
}

funcaoDesetruturaArray(["Jonatha", "Targino", 19])


// REST OPERATOR : Recebe todos os parâmetros não declarados em uma variável Array;
function somar(...numbers){
  console.log(numbers);
}

// Output: [ 1, 2, 3, 4, 5 ];
somar(1, 2, 3, 4, 5);

// Retorno da função (return)

function soma(a, b){
  return a + b;
}

// Os retornos podem ser capturados através de atribuição 

// valorSoma vai receber o valor retornado por soma(2,5), que é 7.
const valorSoma = soma(2,5);

function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá')('Mundo');
console.log(olaMundo);

function criarMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  }
}

const duplica = criarMultiplicador(2)
console.log(duplica(1))

// Escopo léxico: A função conhece o local onde foi declarada. Se você chama uma variável dentro de uma função, ela vai procurar primeiramente dentro da própria função, depois no pai dela, até chegar no escopo global. Se a variavel não existir no escopo global.

const nome = "Jonatha"

// Será printado "Levy" na tela pois a função procurou primeiro em seu próprio escopo.
function falaNome(){
  const nome = "Levy"
  console.log(nome)
}

// Closure é a combinação de uma função com as referências do ambiente léxico.

function retornaFuncao(nome){
  return function() {
    return nome
  }
}


// A função receberá o parametro nome através da referência do escopo léxico.
const funcaoRetornada = retornaFuncao('João');


// IIFE -> Immediately Invoked Function Expression (Função executada imediatamente)
(function(nacionalidade) {
  console.log(nacionalidade)
})('BR');

// Vantagens: Não precisa de uma palavra-chave para armazenar e executar.
