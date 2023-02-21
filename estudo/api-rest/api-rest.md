API REST ou API RESTful é uma API que está em conformidade com as restrições do estilo de arquitetura REST.
REST -> Representational State Transfer

Quando um cliente faz uma solicitação a API RESTful, essa API transfere uma representação do estado do recurso ao solicitante via HTTP utilizando um dos formatos: Javascript Object Notation (JSON), HTML, XLT, Python, PHP ou texto sem formatação. (JSON é a mais usada

Restrições de arquitetura REST:
- Utilize URL legíveis
- Evite adicionar a operação realizada no recurso na URL, a manipulação dos recursos devem ser feitas utilizando os métodos HTTP.
- Evite adicionar na URL o formato desejado, faça isso por Content Negotiation.

Exemplos:

GET

/clientes

Recuperar os dados de todos os clientes.

GET

/clientes/id

Recuperar os dados de um determinado cliente.

POST

/clientes

Criar um novo cliente.
