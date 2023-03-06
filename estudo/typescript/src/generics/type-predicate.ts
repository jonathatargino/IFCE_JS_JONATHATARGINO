// Funções que checam tipo de retornam boolean
// value is number (predicate) -> Sempre que o retorno booleano for true, o typescript vai entender que o valor é do tipo verificado.
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      // (parameter) sum: number, (parameter) value: T & number
      return sum + value;
    }
    return sum;
  }, 0);

  if (isNumber(retorno)) return retorno;
  return null;
}

console.log(soma(1, 2, 3, 4));
console.log(soma("a", "b", "c"));
// Note que o primeiro valor passado no array será o tipo do tipo genérico T da função.
// console.log(soma(1, "a", 3)); // Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(soma("a", 2, 3)); // Argument of type 'number' is not assignable to parameter of type 'string'.
// Podemos contornar esse problema com o spred operator:
console.log(soma(...["a", 2, 3])); // Isso não gera erros porque o array já tem tipo definido string | number, o que vai facilitar o TypeScript inferir o tipo do ...args
