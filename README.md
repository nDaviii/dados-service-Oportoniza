# Criação de Service em Javascript para o Backend com Sails para plataforma web Oportoniza

&nbsp;&nbsp;&nbsp;&nbsp;A atividade apresentada foi desenvolvida pelo aluno Davi Nascimento de Jesus sob a instrução do professor orientador <a href="https://www.linkedin.com/in/cristiano-benites-687647a8/">Cristiano Benites</a>.

### Atividade

&nbsp;&nbsp;&nbsp;&nbsp;Este projeto Sails.js inclui um serviço `DadosService.js` para validação e tratamento de dados de formulários. As etapas que foram desenvolvidas para chegar nesse objetivo podem ser encontradas abaixo:

#### 1. Criação do Helper DadosService.js
&nbsp;&nbsp;&nbsp;&nbsp;Primeiramente, Foi criado o arquivo `DadosService.js` na pasta `helpers` e adicionadas as funções para validar tipos de dados, limpar dados, formatar dados, validar regras de negócio e tratar campos específicos do formulário. Estas que foram solicitadas pelo enunciado da atividade ponderada.

#### 2. Criação do Controller `FormController.js`

&nbsp;&nbsp;&nbsp;&nbsp;Em segunda análise, foi criado o arquivo `FormController.js` na pasta `controllers` e implementada uma função para processar o formulário, chamando as funções do `DadosService.js` para tratar cada campo antes de persistir os dados no banco de dados.

#### 3. Configuração das Rotas

&nbsp;&nbsp;&nbsp;&nbsp;Além dos processos dispostos nos itens anteriores, foi configurada a rota para processar o formulário no arquivo de rotas, definindo uma rota POST que chama a função de processamento de formulário da `FormController`.

### Conclusão

&nbsp;&nbsp;&nbsp;&nbsp;Portanto, o projeto foi configurado para validar e tratar dados de formulário utilizando Sails.js. As funcionalidades foram implementadas e integradas, garantindo que os dados sejam validados e formatados antes de serem salvos no banco de dados. O código está disponível na pasta `Aplicação Sails`, para revisão e possíveis correções.
