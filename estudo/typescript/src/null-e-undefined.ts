// Ao declarar uma variável, sem atribuir nenhum valor ou type annotation, o seu tipo será undefined
let x;

// O undefined aparece também em parâmetros opcionais, no caso deles não serem recebidos.

export function createPerson(
  firstName: string, lastName?: string
  ):{
    firstName: string, // string
    lastName?: string // string | undefined
  } {
    return {
      firstName,
      lastName,
    };
}

export function squareOf(x: any){
  if (typeof x === "number") return x * x;
  return null
}

const square = squareOf(2) // square: number | null
