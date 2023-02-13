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