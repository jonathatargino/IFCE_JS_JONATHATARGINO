// Para importar arquivos javascript em um arquivo typescript é preciso habilitar "allowJs" em tsconfig.json
import { soma } from "./module";

/*
Problema -> As tipagens não estarão definidas
function soma(x: any, y: any): any
*/

// const result: any
const result = soma(10, 20);
console.log(result);
