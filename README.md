# Meu SaaS

SaaS multi-tenant em [Next.js](https://nextjs.org) (App Router), com Prisma no banco, NextAuth para login (Google e credenciais) e Stripe para pagamentos.

Cada empresa é uma organização com `slug` na URL (ex.: `/acme-corp`). O layout da área logada confere se o usuário pertence àquele tenant. Há telas de login/cadastro, onboarding para criar a primeira organização, dashboard e webhook da Stripe.

## Stack

- Next.js 16, React 19 e Tailwind CSS
- Prisma + PostgreSQL
- NextAuth v5
- Stripe

## Como rodar

1. Instale as dependências: `npm install`
2. Preencha o `.env` (`DATABASE_URL`, `AUTH_SECRET`, chaves da Stripe e do Google)
3. Gere o client do Prisma e aplique o schema no banco
4. Suba o app: `npm run dev`

Abra [http://localhost:3000](http://localhost:3000).

Repositório: [github.com/GuMFF/Meu-SaaS](https://github.com/GuMFF/Meu-SaaS)
