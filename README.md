# POC-TS-Prisma

Uma POC para treinamento geral do meu aprendizado até o momento.

## Introdução

Este repositório é uma Prova de Conceito (POC) que explora o uso de **TypeScript** em conjunto com o ORM **Prisma**. O objetivo principal é demonstrar como integrar essas tecnologias para criar uma base sólida e eficiente para aplicações back-end, facilitando o desenvolvimento, manutenção e escalabilidade.

## Sobre

Essa POC é um treinamento completo, até o momento, sobre meu conhecimento de TypeScript e Prisma.

## Finalidade do Projeto

A proposta deste projeto é servir como referência prática para desenvolvedores que desejam iniciar projetos utilizando TypeScript e Prisma. Ele inclui exemplos de configuração, modelagem de dados, migrações e interações básicas com o banco de dados, além de boas práticas de organização do código e tipagem estática.

## Funcionalidades

- Configuração do ambiente com TypeScript
- Integração do Prisma para modelagem e manipulação dos dados
- Exemplos de operações CRUD (Create, Read, Update, Delete)
- Estrutura de projeto escalável e fácil de manter
- Scripts de migração e gerenciamento do banco de dados

## How to run for development

1. **Clone este repositório**
   ```bash
   git clone https://github.com/DanBellini/POC-TS-Prisma.git
   ```
2. **Instale todas as dependências**
   ```bash
   npm i
   ```
3. **Crie um banco de dados PostgreSQL com qualquer nome**
4. **Configure o arquivo `.env`** usando o arquivo `.env.example` como referência
5. **Execute todas as migrações**
   ```bash
   npx prisma migrate dev
   ```
6. **Seed no banco de dados (popular com dados iniciais)**
   ```bash
   npm run prisma:seed
   ```
7. **Execute o back-end em ambiente de desenvolvimento**
   ```bash
   npm run dev
   ```
8. **Teste todas as rotas usando a coleção Thunder Client deste projeto**

## Estrutura do Projeto

- `/src`: Código fonte principal
- `/prisma`: Modelos e migrações do banco de dados
- `.env`: Configuração de variáveis de ambiente

## Tecnologias Utilizadas

- TypeScript
- Prisma ORM
- Node.js
- PostgreSQL

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.

## Autor

- [DanBellini](https://github.com/DanBellini)

---

> Este projeto tem caráter demonstrativo e pode ser adaptado para projetos reais conforme necessidade.
