class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const camposValidos = this.camposSaoValidos();
  }

  camposSaoValidos(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll(".error-text")){
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerHTML
      if(!campo.value){
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
        valid = false;
      }

      if (campo.classList.contains('usuario')){
        const usuario = campo.value;
        const regex = /^[a-zA-Z0-9]/
        console.log(usuario);
        if (!regex.test(usuario)){
          this.criaErro(campo, "Usuário só poderá conter letras e/ou números")
        }
        if (usuario.length < 3 || usuario.length > 12){
          this.criaErro(campo, "Usuário deverá ter entre 3 e 12 caracteres")
        }
        valid = false;
      }

      if (campo.classList.contains('senha')){
        this.senha = campo.value;
        if (this.senha.length < 6 || this.senha.length > 12){
          this.criaErro(campo, "Senha precisa ter entre 6 e 12 caracteres");
        }
        valid = false;
      }

      if (campo.classList.contains('repetir-senha')){
        if (campo.value !== this.senha){
          this.criaErro(campo, "As senhas não correspondem")
        }
        valid = false;
      }
      
      }
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();