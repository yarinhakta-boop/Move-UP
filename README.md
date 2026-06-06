# Move Up

Site de treino, progresso e achadinhos fitness plus size com conta de usuário, banco SQLite e painel pessoal.

## Rodar localmente

```bash
npm install
npm start
```

Depois acesse:

```text
http://localhost:4177
```

## Hospedar no Render

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. Acesse `https://render.com`.
4. Clique em `New` e escolha `Blueprint`.
5. Conecte o repositório do projeto.
6. O Render vai ler o arquivo `render.yaml`.
7. Confirme a criação do serviço.

O app usa:

```text
Start Command: npm start
Banco: /var/data/fitcheck.sqlite
```

O disco persistente configurado no `render.yaml` evita perder o banco SQLite a cada reinício.

## Observação

Não hospede como site estático. O projeto precisa rodar `server.js` para login, banco, fotos e APIs funcionarem.
