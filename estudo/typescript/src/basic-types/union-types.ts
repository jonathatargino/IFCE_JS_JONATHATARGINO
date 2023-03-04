// Union types -> quando você quer ter a possibilidade de mais de um tipo.
// Quando há mais de um tipo em algo, podemos fazer um OR dos tipos

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat("1", "2"));
console.log(addOrConcat(1, "2"));

export default {};
