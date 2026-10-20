# Site oficial da Norte One

Site institucional em Next.js. O formulário de contato envia mensagens por
meio da API da Resend e não persiste os dados em banco local.

## Ambiente local

Requisitos: Node.js 20.9+ e npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

O servidor de desenvolvimento fica disponível em `http://localhost:3000`.

## Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL`: origem canônica completa, com `https://` e sem barra final.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número público com código do país e DDD, somente dígitos. Número oficial: `5566999668355`.
- `RESEND_API_KEY`: chave privada da Resend usada apenas pelo servidor.
- `CONTACT_EMAIL_TO`: caixa postal que recebe os contatos; em produção, `contato@norteone.com.br`.

O remetente técnico do formulário é `site@norteone.com.br` e precisa estar
autorizado no provedor antes da publicação. Valores `NEXT_PUBLIC_*` são
públicos por definição; não use segredos neles.

## Verificação de produção

Os testes isolados de contato exigem Node.js 24+ e não fazem chamadas reais ao
provedor. Use `npm run test:contact` para validar schema, API e WhatsApp.

```bash
npm run test:contact
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Antes do release, confirme no ambiente de hospedagem as quatro variáveis,
valide o domínio do remetente na Resend e realize um envio controlado para a
caixa de destino, apenas com autorização. Uma resposta com ID da Resend confirma
aceitação pelo provedor, não entrega na caixa postal. Não há script de deploy
neste repositório.
