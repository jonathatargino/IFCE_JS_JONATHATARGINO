// Uma promise, como o nome diz "promessa" é uma operação assíncrona que pode ou não entrar no call stack e seu retorno pode ser manipulado através de métodos próprios de promises.

function esperaAi(msg, tempo){
  // Resolve tentará resolver algo e, se tudo der certo, será passado quando a promise for chamada e o retorno de resolve poderá ser manipulado com o .then() | Reject serve para rejeitar algo, em alguma condição em que não se deseja dar resolve.
  return new Promise((resolve, reject) => {
    // reject pode retornar falso, string falando o erro ou uma instância de Error;
    if (typeof msg !== 'string') reject("Bad Value")

    setTimeout(() => {
      // O resolve tentará resolver
      resolve(msg)
    }, tempo)
  });
}

// A promise pode ser tratadas por inúmeros then, indo consecutivamente de um por um.
esperaAi("Espere!", 1000)
  // then sendo usado para pegar o que o resolve() da promise retornou.
  .then(resposta => console.log(resposta)) // Output: Espere!
  // catch é usado para capturar possíveis erros da promise. Esses erros virão diretamente do reject.
  .catch(e => console.log(e));

esperaAi(1, 1000)
  .catch(e => console.log(e)); // Output: Bad Value

console.log("Esta frase será exibida antes da promise");


// Métodos Úteis para Promises:

// Promise.all -> Resolve um array de promises simultaneamente, retornando um array com os retornos de cada promise na mesma ordem em que as promises foram colocadas no array.

// Obs: se alguma promise de um array de promises tiver algum problema durante o .all ou .race, apenas será retornado o reject.
const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
]

Promise.all(promises).then((response) => console.log(response)) // Output: [ 'Promise 1', 'Promise 2', 'Promise 3' ]

// Promise.race -> Resolve um array de promises e retorna o valor da primeira que terminar. Race = "Corrida".
// Obs: O javascript não tem como para as promessas no race, então, ele retornará o valor da primeira que for resolvida e o resto continuará executando.

Promise.race(promises).then((response) => console.log(response)); // Output: Promise 2

// Promise.resolve -> resolve a promessa imediatamente | Promise.reject -> rejeita uma promessa imediatamente

function baixaPagina(){
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Página em cache')
  } else {
    return Promise.reject('Página não armazenada')
  }
}

baixaPagina()
  .then(response => console.log(response))
  .catch(e => console.log(e));