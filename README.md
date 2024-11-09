<h1 align="center">
     Programação WEB
</h1>

<h3 align="center">
    Repositório destinado a atividades e projetos da disciplina programação web do P6, manhã.
</h3>

<h4 align="center">
	    Finalizado. 🚀 
</h4>

---

## 💻 Atividade 01-02

#### Questão 01: 
Seguindo esse padrão da primeira aula de css, tente estilizar o máximo esse site pessoal seu, imagine que está produzindo um blog. Utilize também o display flex para dimensionar os elementos.

#### Questão 02: 
Adicione um fundo azul, com um card branco simulando perfis de usuários. Use o display flex e as propriedades vistas na sala, não necessariamente precisa ficar igual a imagem mas deixar de uma forma semelhante.

#### Questão 3: 

Quando seria mais adequado utilizar CSS Grid em vez de display flex? Dê exemplos de layouts onde o Grid seria a melhor escolha.

Após sua pesquisa tente replicar esse layout abaixo utilizando grid


---
## 💻 Atividade 03

### Consumo de API do CEP com Promises e ES6

#### Descrição:
Crie uma página web que permita ao usuário consultar um CEP através da API pública do ViaCEP. A página deve conter um card centralizado com um título "Consulta de CEP", um campo de input para o usuário digitar o CEP e um botão para realizar a consulta. Após a consulta, os dados retornados pela API (como logradouro, bairro, cidade, estado) devem ser exibidos em um texto abaixo do botão, com o título "Resultado".

#### Requisitos:

##### Estrutura HTML:
- Um título "Consulta de CEP".
- Um campo de input para o usuário digitar o CEP.
- Um botão para enviar a consulta.
- Uma área abaixo do botão para exibir os resultados.

##### Estilização CSS:
- O card deve ser centralizado na página e estilizado com uma cor de fundo e um espaçamento adequado.
- A área de resultados deve ter um tamanho de fonte menor e ser organizada de maneira clara.

##### Lógica JavaScript:
- Utilize fetch para realizar a requisição à API do ViaCEP (https://viacep.com.br/ws/{cep}/json/).
- Use Promises (ou async/await) para gerenciar a chamada à API e o retorno dos dados.
- Valide o CEP antes de enviar a requisição (certifique-se de que o CEP tem 8 dígitos).
- Utilize template literals, let/const, e arrow functions para organizar o código.


---
## 💻 Atividade 04

### Criar um Componente de Contador com Efeitos Colaterais

O contator deve ser parecido com o timer e ir incrementando 1 a cada 1000 milissegundos. 

### Criar um componente chamado Contador ou Counter

- Use o useState para manter o estado do contador.
- Use o useEffect para iniciar um intervalo que aumenta o contador a cada segundo (dica, use o setTimeout ou o setInterval junto).
- Adicione um botão para parar o contador, que deve limpar o intervalo.
- Exiba o valor atual do contador na tela.

---
## 💻 Atividade 05 - 06

### vImplementando um CRUD de Animes com Node.js e Express
OBS: O início dessa atividade será feito no laboratório em sala (10/10/2024).

- Criação do Projeto
- inicialize o projeto com npm init -y.
- Instale o Express com o comando npm install express.
- Instale o nodemon como dependência de desenvolvimento npm install -D nodemon.
- Estrutura do Código
- Crie um arquivo chamado app.js e server.js.
- Dentro desse arquivo, configure seu servidor Express para rodar em alguma porta local.

### Defina um array inicial de animes com um objeto inicial (servirá como o nosso banco de dados em memória). Cada anime deve ter os seguintes atributos:
id: Número único ou UUID.
name: Nome do anime.
genre: Gênero do anime.
studio: Estúdio responsável pela produção do anime.

### Operações do CRUD
Realize essas operações, criar um anime, atualizar um anime por id, deletar um anime, listar todos os animes e listar um anime por id.

### Desafio Extra
- Adicione validações para evitar que um anime seja criado ou atualizado com campos em branco.
- Faça com que o ID do anime seja gerado automaticamente ao adicionar um novo anime.

### Arquitetura em camadas: Model, Service e Controller

Utilizando uma arquitetura em camadas, separando em pastas as entidades, camada de repositório, camada de serviço e camada de controller. Remodelar a atividade 05 para essa arquitetura utilizando um padrão mais orientado a objetos. Que será visto em sala no dia 16.

#### Requisitos: 
- Refatorar a atividade 05 para um padrão de arquitetura em camadas.
- Separar responsabilidades entre arquivos.
- Utilizar a mesma regra de negócio da atividade 05.

#### Bônus (Requisito não obrigatório):
- Criar um frontend adaptando todo o CRUD com REACT.


---

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**


---
