# PoC - GraphQL
> “Describe your data, ask for what you want, get predictable results." - GraphQL
## Introdução
GraphQL é uma query language para API’s. Não está ligado a nenhum banco de dados específico ou qualquer outro
mecanismo de armazenamento de dados, mas sim ao código existente na API e seus respectivos dados. Um serviço 
GraphQL opera ao definir tipos e adicionar campos nestes tipos criados. Funções para cada campo são fornecidas
pelo serviço em cada tipo existente, a fim de consumir os dados da API. A partir de um servidor GraphQL operando
um serviço, GraphQL queries podem ser solicitadas para posterior validação e execução. Ao receber uma query, o
servidor a analisa para verificar se os tipos referenciados foram definidos. Caso não haja problemas, o servidor
executa as funções necessárias para produzir o resultado requisitado pela query.

O GraphQL garante a segurança e privacidade dos dados através do uso de Schema. É no Schema GraphQL que constam
todos os tipos, os atributos, relacionamentos, coleções de dados e as funções que podem ser utilizadas para buscar
resultados de queries. Logo, o solicitante estará limitado pelos recursos disponibilizados pelo Schema.

## Vantagens do GraphQL
* Requisições, respostas do servidor e todo o processo de busca de dados é feito de maneira simples e intuitiva. Tudo
isso a partir de um único endpoint, característica esta que traz consigo um novo conceito para contrapor o conceito
aplicado em API’s REST;
* A estrutura da resposta do servidor para uma query é praticamente a mesma estrutura da própria query, e o conteúdo
desta resposta possui somente o que foi requisitado, evitando assim o comprometimento de performance ao processar
dados desnecessários;
* Por operar em um único endpoint, os dados podem ser entregues em pacotes, evitando múltiplas chamadas para atingir o
mesmo resultado;
* As funções descritas no Schema oferecem recurso de autocomplete para criação de queries, tornando a experiência de
exploração de dados mais fácil. Tal recurso faz com que seja desnecessário conhecer os relacionamentos entre dados que
estão modelados na API;
* Recursos auxiliares para criação de queries, como fragment, diretivas, criação de variáveis, entre outros.

## Desvantagens do GraphQL
* Escassez de material de apoio devido ao GraphQL ser relativamente novo;
* Todos os atributos, tipos e funções da API devem ser modelados manualmente, fato este que gera uma complexidade elevada
de implementação em casos onde a API é relativamente robusta;
* Uma API feita com GraphQL é dependente do banco de dados. Logo, sua implementação varia conforme o banco que está sendo
usado;
* Há poucas libs disponibilizadas pela comunidade para facilitar o processo de consumir uma API com GraphQL.


## Instalação

#### Node
Este projeto faz uso de ES6, portanto, requer versão 4+ do node. De preferência, instale a última versão estável:
https://nodejs.org/en/download/

#### MongoDB
Para utilizar este projeto é necessário instalar MongoDB e garantir que há uma instância rodando:
https://www.mongodb.com/download-center

Para verificar os dados que estão sendo salvos é possível utilizar alguma ferramenta de gestão, como MongoChef
(Studio 3T):
https://studio3t.com/

#### Módulos NPM
Há vários módulos NPM no projeto, mas para obtê-los basta instalá-los com:

```js
npm install
```

#### Executando o projeto

##### Executando em Dev
Esta execução está configurada com nodemon, portanto, o servidor irá atualizar automaticamente após alterações em código.
```js
npm run dev
```

##### Executando em Prod
```js
npm start
```

## Mutações e Queries
É possível fazer as mutações com o auxílio de ferramentas como Postman, mas para isso, é necessário alterar o campo "content-type" para "GraphQL" e inserir a mutação na aba "body".
As queries podem ser feitas diretamente na interface que o servidor provê.

#### Mutações

Para mutações de criação e edição de usuário / post, ver arquivo "mutations.txt"

#### Queries

Para queries diversas implementadas no projeto, ver arquivo "queries.txt"

### Mongoose Schema
[userSchema.js](src/models/user/userSchema.js) e [postSchema.js](src/models/posts/postSchema.js) definem esquemas mongoose e implementam várias funções para que os Resolvers do GraphQL possam fazer as consultas.

### GraphQL Schema
[userType.js](src/models/user/userType.js) e [postType.js](src/models/posts/postType.js) criam os GraphQLObjectType que descrevem a estrutura dos modelos de dados.

[userMutations.js](src/models/user/userMutations.js), [postMutations.js](src/models/posts/postMutations.js), [userQueries.js](src/models/user/userQueries.js) e [postQueries.js](src/models/posts/postQueries.js) definem as operações disponíveis e as relacionam com os Resolvers do GraphQL.