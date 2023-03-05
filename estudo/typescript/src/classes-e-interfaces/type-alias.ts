// Tipo de classe
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

// Implements -> indica que a classe é de um tipo. (vários tipos podem ser implementados ao contrário de extender, que apenas posso extender uma classe.)
export class Pessoa implements TipoPessoa {
  // Não é possível mudar a visibilidade para private ou protected quando se usa type alias de classe. Se você precisa deles não públicos, use classes abstratas.
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
