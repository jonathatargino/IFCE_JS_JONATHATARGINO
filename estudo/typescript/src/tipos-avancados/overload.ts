// Overload -> Uma função se comporta de maneiras diferentes dependendo da quantidade de parâmetros passados
// type Adder contem as possíveis maneiras de chamar a nossa função.
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  if (args.length > 0) {
    return args.reduce((acc, val) => acc + val, 0) + x + (y || 0);
  }
  return x + (y || 0);
};

// Primeiro overload (x: number): number
console.log(adder(1));
// Segundo overload (x: number, y: number): number;
console.log(adder(1, 1));
// Terceiro overload (...args: number[]): number;
console.log(adder(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
