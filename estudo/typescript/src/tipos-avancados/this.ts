// this sendo usado como tipo
export class Calculadora {
  constructor(public numero: number) {}

  add(num: number): this {
    this.numero += num;
    return this;
  }

  sub(num: number): this {
    this.numero -= num;
    return this;
  }

  div(num: number): this {
    this.numero /= num;
    return this;
  }

  mul(num: number): this {
    this.numero *= num;
    return this;
  }
}

const calculadora = new Calculadora(0);
// return this nos permite encadeamento de funções
calculadora.add(5).mul(32).div(14);
console.log(calculadora);
