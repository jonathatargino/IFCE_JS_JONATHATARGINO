class CPF {
  constructor(cpfEnviado){
    this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
  }
  validar(){
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2)

    const digito1 = this.obterDigito(cpfParcial);
    const digito2 = this.obterDigito(cpfParcial + digito1);

    const cpfCalculado = this.cpfLimpo + digito1 + digito2
    console.log(cpfCalculado)

    return this.cpfLimpo === cpfCalculado;
  }

  obterDigito(cpf){
    const cpfArray = Array.from(cpf);
    let reverso = cpf.length + 1;

    const total = cpfArray.reduce((acc, val) =>{
      acc += (val * reverso);
      reverso--;
      return acc;
    }, 0)
    
    const digito = 11 - (total % 11);
    return digito
  }
}

const meuCpf = new CPF('070.987.720-03');
console.log(meuCpf);
meuCpf.validar();
console.log(meuCpf.validar())