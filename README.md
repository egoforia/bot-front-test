# Desafio fron-end - O Boticário
#### Criação do front-end para o sistema de cashback dos revendedores

# Análise da solução atual
#### Antes de iniciar o front-end, foi feita uma análise da solução atual a fim de entender os fluxos, UI components utilizados e propriedades css
#### Link: [Análise de UI/UX/Design System](https://whimsical.com/analise-de-ui-ux-design-system-EZH6nBs4kASe6ueQV61ZhX)

# Libs utilizadas
- [Ionic](https://ionicframework.com/docs)
- [Angular](https://angular.io/)
- [NGRX](https://ngrx.io/)

---

# API
#### Foi utilizado o [My JSON Server](https://my-json-server.typicode.com/) para criar uma fake API. Sua estrutura se encontra no arquivo `db.json`

---

# Para rodar local
#### Após clonar o repositório, executar os seguintes comandos
- `npm install`
- `ionic serve`

---

# Telas
### Login
#### Tela inicial do sistema onde é possível fazer o login. Foi criado um guard para impedir que o usuário acesse o sistema sem antes estar autenticado

##### Obs: qualquer email válido e senha de pelo menos 8 caracteres funcionam para acessar o sistema

### Cadastro de revendedor
#### Tela onde é possível se cadastrar como revendedor

### Home Page
#### Tela principal do sistema onde é possível ver a lista de vendas do revendedor, o saldo de cashback e cadastrar uma nova venda


---

# Tests
#### Foram utilizados Karma e Jasmine para escrever os testes
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Jasmine](https://jasmine.github.io/)

#### Para rodar os testes, utilize o seguinte comando
- `ng test`

---

# Obrigado pela oportunidade ;)
##### Espero ter notícias de vocês em breve e, quaisquer dúvidas que vocês tenham sobre o código ou como rodar no ambiente local, estou a disposição no whatsapp +55 41 9 8702-9948