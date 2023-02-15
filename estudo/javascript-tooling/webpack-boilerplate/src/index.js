// Import trás dados de algum outro arquivo para que possamos utilizar-los em nosso programa.

// as -> renomeia a variável que vai conter o dado importado.
import { nome as meuNome, sobrenome, soma } from './modulo1'
import meuExportDefault from './modulo1'


console.log(meuNome, sobrenome, soma) // Output: Jonatha Targino function soma(x,y)
console.log(meuExportDefault); // Output: 5

