import geraSenha from "../main";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.check-maiusculas')
const chkMinusculas = document.querySelector('.check-minusculas')
const chkNumeros = document.querySelector('.check-numeros')
const chkSimbolos = document.querySelector('.check-simbolos')
const gerarSenha = document.querySelector('.gerar-senha');


export default () => {
   gerarSenha.addEventListener('click', () => {
    const senha = geraSenha(
      qtdCaracteres.value,
      chkMaiusculas.checked,
      chkMinusculas.checked,
      chkNumeros.checked,
      chkSimbolos.checked,
    )
   })
}