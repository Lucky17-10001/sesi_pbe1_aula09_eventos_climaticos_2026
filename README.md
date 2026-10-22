# sesi_pbe1_aula09_eventos_climaticos_2026 - Atividade de backend
## Objetivo
Conectar o back-end da aplicação web com um banco de dados relacional, utilizando o SGBD MariaDB e a linguagem de programação JavaScript com Node.js.
#### Documentação
![Diagrama de Entidade-Relacionamento](docs/mer_der_conceitual.png)
![Diagrama de classes](docs/uml_dc.png)
#### Tecnologias utilizadas
- SGBD: Sistema de Gerenciamento de Banco de Dados
- MariaDB: Sistema de Gerenciamento de Banco de Dados relacional, derivado do MySQL.
- Node.js: Ambiente de execução JavaScript, que permite a execução de código JavaScript fora do navegador.
#### Realizar teste unitário com o Thunder Client
- Instale a extensão **Thunder Client** no VS Code.
- Abra o Thunder Client e crie uma nova requisição POST para cadastrar um usuário:
    - URL: `http://localhost:3000/usuarios`
    - Body (JSON):
```json
{
    "nome": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "senha": "senha123"
}
```
- Clique em **Send** e verifique se o usuário foi cadastrado com sucesso.
- Crie uma nova requisição GET para listar todos os usuários:  
    - URL: `http://localhost:3000/usuarios`
- Clique em **Send** e verifique se a lista de usuários é retornada corretamente.
## Prints dos testes de cadastrar usuário
![cadastrar1](docs/prints/cadastrar.png)
![cadastrarevento2](docs/prints/cadastrarevento2.png)
## Prints dos testes de cadastrar evento
![cadastrarevento1](docs/prints/cadastrarevento.png)
![cadastrar2](docs/prints/cadastrar2.png)
## Prints dos testes de listar
![listar1](docs/prints/listar.png)
![listar2](docs/prints/listarevento.png)
## Prints dos testes de atualizar usuário
![atualizar1](docs/prints/atualizar.png)
![atualizar2](docs/prints/atualizar2.png)
## Prints dos testes de atualizar evento
![atualizarevento1](docs/prints/atualizarevento.png)
![atualizarevento2](docs/prints/atualizarevento2.png)
## Prints dos testes de excluir usuário
![excluir1](docs/prints/excluir.png)
![excluir2](docs/prints/excluir2.png)
![excluir3](docs/prints/excluir3.png)
## Prints dos testes de excluir evento
![excluirevento1](docs/prints/excluirevento.png)
![excluirevento1](docs/prints/excluirevento2.png)
## Prints dos testes de resumo
![resumo](docs/prints/resumo.png)
## Prints dos testes de login
![teste1](docs/prints/login.png)
![teste2](docs/prints/login2.png)
![teste3](docs/prints/login3.png)
