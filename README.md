# TaskFlow — Gerenciador de Tarefas e Lista de Compras
Aplicação web full-stack desenvolvida como TCC da Pós-Graduação em Desenvolvimento Full Stack.

## Stack
- Frontend: React + Vite + Styled-Components
- Backend: Node.js + Express
- Banco: PostgreSQL

## Funcionalidades
- Cadastro e login de usuários
- CRUD completo de tarefas
- Marcar tarefas como concluídas
- Filtro por prioridade (alta, média, baixa)
- Data limite com alerta de prazo
- CRUD de listas de compras e itens
- Dark Mode
- Persistência no banco de dados

---

## Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- [PostgreSQL](https://www.postgresql.org/download/) v14 ou superior
- [Git](https://git-scm.com/)

---

## Como instalar e rodar

### 1. Clone o repositório

### 2. Configure o banco de dados

Abra o pgAdmin ou o terminal psql e execute o script SQL:

```bash
psql -U postgres -f database.sql
```

Ou copie e execute manualmente o conteúdo do arquivo `database.sql` no pgAdmin.

### 3. Configure e rode o Backend

```bash
cd backend
npm install
```

Crie o arquivo `.env` na pasta `backend/`:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:SUA_SENHA@localhost:5432/taskmanager
JWT_SECRET=uma_chave_secreta_forte_aqui
```

Substitua `SUA_SENHA` pela senha do seu PostgreSQL.

Inicie o servidor:

```bash
npm run dev
```

O backend estará rodando em: **http://localhost:5000**

### 4. Configure e rode o Frontend

Em outro terminal:

```bash
cd frontend
npm install
```

Crie o arquivo `.env` na pasta `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api
```

Inicie o frontend:

```bash
npm run dev
```

O frontend estará em: **http://localhost:5173**

---

---

## Rotas da API

### Autenticação
| Método | Rota               | Descrição       |
|--------|--------------------|-----------------|
| POST   | /api/auth/register | Cadastrar       |
| POST   | /api/auth/login    | Login           |

### Tarefas (requer token JWT)
| Método | Rota                   | Descrição               |
|--------|------------------------|-------------------------|
| GET    | /api/tasks             | Listar tarefas          |
| GET    | /api/tasks?priority=high | Filtrar por prioridade |
| POST   | /api/tasks             | Criar tarefa            |
| PUT    | /api/tasks/:id         | Atualizar tarefa        |
| PATCH  | /api/tasks/:id/toggle  | Marcar/desmarcar        |
| DELETE | /api/tasks/:id         | Deletar tarefa          |

### Listas de Compras (requer token JWT)
| Método | Rota                              | Descrição        |
|--------|-----------------------------------|------------------|
| GET    | /api/shopping/lists               | Listar listas    |
| POST   | /api/shopping/lists               | Criar lista      |
| DELETE | /api/shopping/lists/:id           | Deletar lista    |
| GET    | /api/shopping/lists/:id/items     | Listar itens     |
| POST   | /api/shopping/lists/:id/items     | Adicionar item   |
| PATCH  | /api/shopping/items/:id/toggle    | Marcar item      |
| DELETE | /api/shopping/items/:id           | Deletar item     |

---

## 🧑‍💻 Autora

Desenvolvido por **Tayná Lauton** — TCC Curso Desenvolvimento Full Stack — PUCRS — 2026
