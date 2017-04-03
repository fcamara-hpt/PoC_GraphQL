# PoC - GraphQL
> �Describe your data, ask for what you want, get predictable results." - GraphQL
## Introdu��o
GraphQL � uma query language para API�s. N�o est� ligado a nenhum banco de dados espec�fico ou qualquer outro
mecanismo de armazenamento de dados, mas sim ao c�digo existente na API e seus respectivos dados. Um servi�o 
GraphQL opera ao definir tipos e adicionar campos nestes tipos criados. Fun��es para cada campo s�o fornecidas
pelo servi�o em cada tipo existente, a fim de consumir os dados da API. A partir de um servidor GraphQL operando
um servi�o, GraphQL queries podem ser solicitadas para posterior valida��o e execu��o. Ao receber uma query, o
servidor a analisa para verificar se os tipos referenciados foram definidos. Caso n�o haja problemas, o servidor
executa as fun��es necess�rias para produzir o resultado requisitado pela query.

O GraphQL garante a seguran�a e privacidade dos dados atrav�s do uso de Schema. � no Schema GraphQL que constam
todos os tipos, os atributos, relacionamentos, cole��es de dados e as fun��es que podem ser utilizadas para buscar
resultados de queries. Logo, o solicitante estar� limitado pelos recursos disponibilizados pelo Schema.

## Instala��o

#### Node
Este projeto faz uso de ES6, portanto, requer vers�o 4+ do node. De prefer�ncia, instale a �ltima vers�o est�vel:
https://nodejs.org/en/download/

#### MongoDB
Para utilizar este projeto � necess�rio instalar MongoDB e garantir que h� uma inst�ncia rodando:
https://www.mongodb.com/download-center

Para verificar os dados que est�o sendo salvos � poss�vel utilizar alguma ferramenta de gest�o, como MongoChef
(Studio 3T):
https://studio3t.com/

#### M�dulos NPM
H� v�rios m�dulos NPM no projeto, mas para obt�-los basta instal�-los com:

```js
npm install
```

#### Executando o projeto

##### Executando em Dev
Esta execu��o est� configurada com nodemon, portanto, o servidor ir� atualizar automaticamente ap�s altera��es em c�digo.
```js
npm run dev
```

##### Executando em Prod
```js
npm start
```

## Muta��es e Queries
� poss�vel fazer as muta��es com o aux�lio de ferramentas como Postman, mas para isso, � necess�rio alterar o campo "content-type" para "GraphQL" e inserir a muta��o na aba "body".
As queries podem ser feitas diretamente na interface que o servidor prov�.

#### Muta��es

Para muta��es de cria��o e edi��o de usu�rio / post, ver arquivo "mutations.txt"

#### Queries

Para queries diversas implementadas no projeto, ver arquivo "queries.txt"

### Mongoose Schema
[userSchema.js](src/models/user/userSchema.js) e [postSchema.js](src/models/posts/postSchema.js) definem esquemas mongoose e implementam v�rias fun��es para que os Resolvers do GraphQL possam fazer as consultas.

### GraphQL Schema
[userType.js](src/models/user/userType.js) e [postType.js](src/models/posts/postType.js) criam os GraphQLObjectType que descrevem a estrutura dos modelos de dados.

[userMutations.js](src/models/user/userMutations.js), [postMutations.js](src/models/posts/postMutations.js), [userQueries.js](src/models/user/userQueries.js) e [postQueries.js](src/models/posts/postQueries.js) definem as opera��es dispon�veis e as relacionam com os Resolvers do GraphQL.