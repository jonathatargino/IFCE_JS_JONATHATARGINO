// Métodos estáticos são funções que estão dentro da classe mas só está ligado a classe, e não as instâncias. 

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Para tornar um método estático, basta usar a palavra-chave static antes da declaração do método.
  static trocaPilha() {
    console.log("Trocando pilha")
  }
}

// O método trocaPilha só existe dentro da classe ControleRemoto
ControleRemoto.trocaPilha();


