// Um dos usos de generics é para tornar funções mais genéricas e, dessa forma, torna-la mais versátil, fazendo com que o TypeScript infira o tipo do argumento recebido.

// Representamos o tipo que desejamos que seja inferido por <T> (A letra pode ser qualquer uma, mas T é uma convenção)

// Note que o tipo callbackfn precisa de um tipo U para inferir os seus tipos.
type callbackfn<U> = (value: U, index?: number, array?: U[]) => boolean;

// <T> Indica que um tipo será inferido de acordo com o que for passados pelos parâmetros. se number for passado, T representará number.
export function myFilter<T>(array: T[], callback: callbackfn<T>): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
// o TypeScript já inferiu que newArr é um array de number pois arr é um array de number e foi passado nos argumentos.
// function myFilter<number>(array: number[], callback: callbackfn<number>): number[]
const newArr = myFilter(arr, (val) => val % 2 === 1);
console.log(newArr);

const arr2 = ["a", "b", "c", "d"];
// function myFilter<string>(array: string[], callback: callbackfn<string>): string[]
const newArr2 = myFilter(arr2, (val) => val.length <= 1);
console.log(newArr2);
