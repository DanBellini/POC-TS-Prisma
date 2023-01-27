# POC-TS-Prisma


Uma POC para treinamento geral do meu aprendizado até o momento.

## About

Essa POC é um treinamento completo, até o momento, sobre meu conhecimento de typeScript e Prisma.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file
5. Run all migrations

```bash
npm run dev:migration-generate
```

6. Seed db

```bash
npm run prisma:seed
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

7. Test all routes using the Thunder client collection of this project