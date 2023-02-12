class DispositivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(`${this.nome} já está ligado`)
      return;
    }

    this.ligado = true;
  }

  desligar(){
    if(!this.ligado){
      console.log(`${this.nome} já está desligado`)
      return;
    }

    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
// Output: DispositivoEletronico { nome: 'Smartphone', ligado: true }
console.log(d1);

// A palavra-chave extends faz com que a classe criada herde as propriedades da classe extendida.
class Smartphone extends DispositivoEletronico{
  constructor(nome, cor){
    // A função super serve para chamar o classe pai da classe, passando os argumentos que a classe pai receberia. O super nada mais é do que chamar o construtor da classe pai.
    super(nome)
    this.cor = cor;
  }
}

const s1 = new Smartphone('Samsung a21s', 'preto');
// Output: Smartphone { nome: 'Samsung a21s', ligado: false, cor: 'preto' }
console.log(s1);