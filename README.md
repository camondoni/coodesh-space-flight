# Desafio Coodesh

Artigos Space Flight

Projeto criado para atender ao desafio proposto pela Coodesh, utilizando a API https://api.spaceflightnewsapi.net/v3/documentation

Foram utilizados as seguintes tecnologias:

-   Node
-   Typescript
-   Express: framework utilizado
-   NodeSchedule: para agendar a syncronização dos artigos as 09:00
-   NodeMailer : para enviar os emails avisando que houve falha na sincronização dos dados
-   Mongoose : para conexão com mongodb
-   Jest : para testes
-   Eslint : para padronização do código, utilizando configurações airbnb
-   Docker : para criação dos containers mongodb e node
-   Axios : para communicação com a api da Space Flight
-   Dotenv : para utilizar .env
-   Swagger : para documentação
-   Tsyringe : para injeção de dependencias

# Pré-requisitos

    - Docker Compose
    - Node
    - Yarn

# Instalação

    - executar yarn install
    - modificar docker-compose.yml as seguintes propriedades:
        MONGO_INITDB_ROOT_USERNAME: seu usuário de acesso ao banco
        MONGO_INITDB_ROOT_PASSWORD: sua senha de acesso ao banco
    - criar o arquivo .env dentro da pasta src com os seguintes campos
        EMAIL_USERNAME=EMAIL UTILIZADO PARA CASO A SINCRONIZAÇÃO FALHE
        EMAIL_PASS=SENHA DO EMAIL
        DB_USERNAME=USUARIO DO BANCO
        DB_PASS=SENHA DO BANCO
        DB_PORT=PORTA DO BANCO
        DB_HOST=NOME DO CONTAINER DO BANCO NO DOCKER
    - docker-compose up
    - sincronizar os artigos executando o comando yarn sync

# Documentação

-   Rota do Swagger /documentation

# Desafio Back-end by Coodesh
