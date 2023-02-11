// Funções de Callback são funções que podem ser recebidas como argumento de outra função ou serem chamadas por outras funções para ser executada depois da função.

// Função para gerar número aléatório entre 0 e 1000
function rand(){
  const num = Math.random() * 1000
  return Math.floor(num);
}

function f1(){
  setTimeout(() => {
    console.log('f1')
  }, rand())
}

function f2(){
  setTimeout(() => {
    console.log('f2')
  }, rand())
}

function f3(){
  setTimeout(() => {
    console.log('f3')
  }, rand())
}

// Problema: as funções terminam de executar fora de ordem.
f1()
f2()
f3()

// O callback pode ser usado para que se estabeleça uma ordem em que as funções serão executadas. Dessa forma, a função f2 só será executada após a f1 terminar.

function f1Callback(){
  console.log('f1');
  f2Callback();
}

function f2Callback(){
  console.log('f2');
  f3Callback();
}

function f3Callback(){
  console.log('f3');
}

// Output: f1 f2 f3 (OBS: TimeOut usado para que as funções com timeout acima não atrapalhassem na verificação dos outputs das função com callback)
setTimeout(() => {
  f1Callback();
}, 1000)
