# Banco API Tests

## Objetivo
Este projeto tem como objetivo realizar a **automação de testes** da API Rest do projeto [Banco API](https://github.com/BrunaKalles/banco-api). 

---

## Stack utilizada
- **Linguagem**: JavaScript (Node.js)
- **Framework de testes**: [Mocha](https://mochajs.org/)
- **Biblioteca de asserções**: [Chai](https://www.chaijs.com/)
- **Biblioteca para requisições HTTP**: [Supertest](https://github.com/visionmedia/supertest)
- **Relatórios de testes**: [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## Estrutura de diretórios
```bash
banco-api-tests/
│
├── test/              # Contém os arquivos de testes automatizados
      ├──login.test.js
      ├──transferencias.test.js             
├── mochawesome-report/ # diretório gerado automaticamente com o relatório HTML dos testes
├── .env               # Arquivo de configuração de variáveis de ambiente
├── .gitignore
├── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do projeto
```

---

## Configuração do arquivo `.env`
O projeto depende de um arquivo `.env` na raiz do repositório, criei ele antes de rodar os testes. Ele deve conter a variável **BASE_URL** apontando para a URL da API a ser testada:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ Certifique-se de configurar corretamente a URL de acordo com o ambiente onde a API está rodando.

---

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/BrunaKalles/banco-api-tests.git
   cd banco-api-tests
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` conforme descrito acima.

---

## Execução dos testes
Para rodar todos os testes:
```bash
npm test
```

---

## Geração de relatórios
Após a execução dos testes, o **Mochawesome** gera automaticamente um relatório em HTML no diretório `mochawesome-report/`.

Para abrir o relatório, basta acessar o arquivo:
```bash
mochawesome-report/mochawesome.html
```

---

## Links úteis - Documentação das dependências
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## Autor
Projeto desenvolvido por [BrunaKalles](https://github.com/BrunaKalles).
