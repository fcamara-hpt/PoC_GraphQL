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

* __Este projeto traz uma Api de usu�rios e posts com suporte � muta��es e queries em GraphQL__

## Vantagens do GraphQL
* Requisi��es, respostas do servidor e todo o processo de busca de dados � feito de maneira simples e intuitiva. Tudo
isso a partir de um �nico endpoint, caracter�stica esta que traz consigo um novo conceito para contrapor o conceito
aplicado em API�s REST;
* A estrutura da resposta do servidor para uma query � praticamente a mesma estrutura da pr�pria query, e o conte�do
desta resposta possui somente o que foi requisitado, evitando assim o comprometimento de performance ao processar
dados desnecess�rios;
* Por operar em um �nico endpoint, os dados podem ser entregues em pacotes, evitando m�ltiplas chamadas para atingir o
mesmo resultado;
* As fun��es descritas no Schema oferecem recurso de autocomplete para cria��o de queries, tornando a experi�ncia de
explora��o de dados mais f�cil. Tal recurso faz com que seja desnecess�rio conhecer os relacionamentos entre dados que
est�o modelados na API;
* Recursos auxiliares para cria��o de queries, como fragment, diretivas, cria��o de vari�veis, entre outros.

## Desvantagens do GraphQL
* Escassez de material de apoio devido ao GraphQL ser relativamente novo;
* Todos os atributos, tipos e fun��es da API devem ser modelados manualmente, fato este que gera uma complexidade elevada
de implementa��o em casos onde a API � relativamente robusta;
* Uma API feita com GraphQL � dependente do banco de dados. Logo, sua implementa��o varia conforme o banco que est� sendo
usado;
* H� poucas libs disponibilizadas pela comunidade para facilitar o processo de consumir uma API com GraphQL.


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