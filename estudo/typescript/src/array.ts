// Array<tipo> ou tipo[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor, "");
}

function arrayToUpperCase(arr: string[]): string[] {
  return arr.map((value) => value.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3, 4, 5));
console.log(concatenaArgs("Neto", "Neto", "Neto", "neto"));
console.log(arrayToUpperCase(["a", "b", "c"]));
