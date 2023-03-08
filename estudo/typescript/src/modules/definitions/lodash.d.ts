declare namespace _ {
  // interface do lodash -> Obrigatório ter o mesmo nome da interface da biblioteca para ocasionar num declaration merging.
  declare interface LoDashStatic {
    // tipagens que desejamos adicionar
    mul(arr: number[]): number;
  }
}
