# Portfolio Next.js

Portfolio pessoal desenvolvido com `Next.js`, com foco em apresentar projetos, experiencia profissional e habilidades.

![Preview do projeto](https://github.com/user-attachments/assets/a5f2486f-be17-4273-bf32-2d44bb11a945)

## Visao geral

Este projeto foi construido para funcionar como site de apresentacao profissional, reunindo:

- secao inicial com apresentacao pessoal
- listagem de projetos
- resumo profissional e educacao
- formulario de contato com envio de email
- integracao com Google Analytics

## Tecnologias utilizadas

### Base da aplicacao

- `Next.js 16`
- `React 18`
- `JavaScript`

### Estilizacao e UI

- `Tailwind CSS`
- `tailwindcss-animate`
- `class-variance-authority`
- `tailwind-merge`
- `Radix UI Slot`
- `Vaul` para drawer
- `Embla Carousel`

### Animacoes e experiencia

- `Framer Motion`

### Integracoes

- `Resend` para envio de emails
- `Google Analytics` via `@next/third-parties`

### Qualidade de codigo

- `ESLint`
- `Prettier`

## Requisitos

Antes de rodar o projeto, tenha instalado:

- `Node.js 24.x`
- `npm` 10+ recomendado

O projeto possui `package-lock.json`, entao o gerenciador mais consistente aqui e o `npm`.

## Como rodar o projeto

### 1. Instale as dependencias

```bash
npm install
```

### 2. Configure as variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```bash
cp .env.example .env
```

Variaveis disponiveis:

- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: ID da propriedade do Google Analytics
- `RESEND_API_KEY`: chave da API do Resend usada no envio do formulario

Exemplo:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

### 3. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Depois disso, acesse:

```txt
http://localhost:3000
```

## Scripts disponiveis

```bash
npm run dev
```

Inicia a aplicacao em modo de desenvolvimento.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run start
```

Sobe a aplicacao em modo de producao apos a build.

```bash
npm run lint
```

Executa a verificacao de lint do projeto.
