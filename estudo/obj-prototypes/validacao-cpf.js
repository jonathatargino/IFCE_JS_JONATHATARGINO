// 705.484.450-52

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48 20 16 15  0
total = 237

11 - (237 % 11) = 5 (5 é o primeiro dígito)
Se o dígito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20  0 10
total = 284

11 - (284 % 11) = 2 (2 é o segundo dígito)
Dessa forma, validamos os dígitos 5 e 2, tornando esse cpf válido.
 */

function ValidaCPF(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;

  const cpfParcial = this.cpfLimpo.slice(0,-2);
  const digito1 = this.criaDigito(cpfParcial);

  const digito2 = this.criaDigito(cpfParcial + digito1);
  
  const cpfCalculado = cpfParcial + digito1 + digito2;

  return this.cpfLimpo === cpfCalculado ? true : false;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val) => {

    ac += (Number(val) * regressivo);
    regressivo--
    return ac
  }, 0)
  
  const digito = 11 - (total % 11);
  if (digito > 9) return 0
  return digito;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo)
console.log(cpf.valida())