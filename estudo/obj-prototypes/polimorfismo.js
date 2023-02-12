// POLIMORFISMO -> Fazer com que métodos se comportar de formas diferentes em classes filhas de uma mesma classe pai caracteriza o polimorfismo.


// Superclass
function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo()
};

Conta.prototype.verSaldo = function() {
  console.log(`
Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// O método sacar em CC se comporta diferente do método sacar em CP
CC.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo,) {
  Conta.call(this, agencia, conta, saldo);

}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;
