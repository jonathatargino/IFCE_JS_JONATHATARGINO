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

const validaCpf = (cpf) => {
  const cpfLimpo = cpf.replace('.', '').replace('.', '').replace('-', '');
  const cpfSemUltimosDoisDigitos = cpfLimpo.slice(0, -2);
  const cpfArray = cpfSemUltimosDoisDigitos.split('');
  let i = 11
  const cpfArrayMultiplicado = cpfArray.map((num) => {
    i--;
    return num * i;
  })

  const total = cpfArrayMultiplicado.reduce((acumulador, valor) => {
    return acumulador + valor;
  }, 0)

  const primeiroDigito = 11 - (total % 11)

  const cpfSemUltimoDigito = cpfLimpo.slice(0, -1);
  const segundoCpfArray = cpfSemUltimoDigito. split('')
  let j = 12
  const segundoCpfArrayMultiplicado = segundoCpfArray.map((num) => {
    j--;
    return num * j;
  })

  const segundoTotal = segundoCpfArrayMultiplicado.reduce((acumulador, valor) => {
    return acumulador + valor;
  }, 0)
  const segundoDigito = 11 - (segundoTotal % 11);

  const cpfPosValidacao = cpfSemUltimosDoisDigitos + primeiroDigito + segundoDigito

  return cpfPosValidacao === cpfLimpo;
}

console.log(validaCpf("705.484.450-52"))