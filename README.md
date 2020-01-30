# Desafio
### Esse repositório é uma implementação do desafio proposto (acertsis). Com base nas seguintes diretrizes: 

1. Liste os clientes ordenados pelo menor valor total em compras.
2. Mostre o cliente com maior compra única neste ano (2019).
3. Liste os clientes que mais realizaram compras no ano passado (2018).
4. Recomende uma peça de roupa para um determinado cliente a partir do histórico de compras.

Para criar esse software o neto do Sidinei (o Sidineizito) disponibilizou uma API com cadastro de
clientes (http://www.mocky.io/v2/5de67e9f370000540009242b) e histórico de compras
(http://www.mocky.io/v2/5dee4725330000355498460b).

## Implementação Back-end
Os dados da *API* disponibilizada foram persistidos em um banco de dados Postgresql na plataforma da heroku. Após os dados inseridos foi desenvolvido uma *API REST* com Node.Js e *framework* Express. A partir disso, foram criados os controllers para busca das informações na base de dados. Para simplificação e ganho de tempo, foram criadas tabelas básicas (cliente, itens, produtos). A tabela cliente contém o cpf, id e nome do cliente. A tabela itens armazena as informações de compra do cliente, como data, valor total, código do produto, código do cliente. A tabela produtos contém as informações básicas de um produto (marca, preço, tamanho, tipo).
## Implementação Front-end
A implementação do *front-end* foi feito utilizando React JS. Basicamente, a interface web busca os dados da API REST criada, para simplificação e ganho de tempo foi criada apenas uma página com todas as tarefas solicitadas. Além disso, foi criada uma página de login, para entrar é preciso informar o CPF do cliente. Após o login o usuário será direcionado para a sua *dashboard*, onde será recomendado um produto com base no seu histórico de compras. Para fins de testes, foi disponibilizado o *front-end* na plataforma da heroku no link https://siteacertsis.herokuapp.com 
O aplicativo *free* da plataforma da heroku "dorme" por algum tempo se não estiver recebendo solicitações. Dessa forma, os dados vão demorar alguns segundos para aparecer.


