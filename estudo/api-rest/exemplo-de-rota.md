class UserController {
  async index(require, response){
    try {
      const users = await User.findAll();
      return res.json(users)
    } catch (e) {
      return res.json(e)
    }
  }
}

router.get('/', UserController.index)

Explicação:
Ao acessar a rota / com método GET, a função UserController.index será disparada, retornando todos os usuários dentro do banco de dados.
Para consumir esta API, devemos utilizar fetch ou alguma biblioteca de requisição HTTP, como o axios.

fetch('/')
  .then((response) => response.json())
  .then((data) => console.log(data))


Dessa forma, teríamos acesso aos usuários cadastrados no banco de dados.

OBS: o fetch tem como padrão o método GET. Para usar outros métodos, deve-se passar um objeto de especificações como segundo argumento.

fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify({
      name: "Meu Nome",
      age: 19
    })
})



