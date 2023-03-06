export function unirObj<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// const obj1: { chave1: string; }
const obj1 = { chave1: "valor1" };
// const obj1: { chave2: number; }
const obj2 = { chave2: 2 };

// const obj3: { chave1: string; } & { chave2: number; }
const obj3 = unirObj(obj1, obj2);
console.log(obj3);
