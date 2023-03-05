// A composição é a relação onde um objeto depende do outro pra existir e funcionar (uma classe é instanciada dentro da outra)
export class Carro {
  private readonly motor = new Motor(); // Motor sendo criado dentro de Carro
  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

// Não é preciso instanciar o Motor fora do carro pois cada carro precisa de um motor para funcionar.
export class Motor {
  ligar(): void {
    console.log("Ligando motor...");
  }

  acelerar(): void {
    console.log("Vrummmm acelerando...");
  }

  freiar(): void {
    console.log("Freiando...");
  }

  desligar(): void {
    console.log("Desligando motor...");
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
