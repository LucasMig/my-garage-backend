# MyGarage Backend

Este é o repositório do backend do **MyGarage**, um diário automotivo que permite aos usuários registrar e gerenciar informações sobre seus veículos, incluindo manutenções, modificações, e lembretes automáticos.

## **Tecnologias Utilizadas**

- [NestJS](https://nestjs.com/): Framework para criação de APIs escaláveis e modulares.
- [Prisma](https://www.prisma.io/): ORM para modelagem e interação com o banco de dados.
- [PostgreSQL](https://www.postgresql.org/): Banco de dados relacional.
- [Docker](https://www.docker.com/) (opcional): Para configuração e gerenciamento de serviços em containers.

---

## **Funcionalidades do MVP**

### **Autenticação**

- Registro e login de usuários com e-mail e senha.
- Autenticação via JWT (com suporte a refresh tokens).

### **Gerenciamento de Veículos**

- Adicionar, listar, editar e excluir veículos de usuários.

### **Registros de Manutenção**

- Criar e visualizar manutenções associadas a veículos.
- Histórico de manutenções com detalhes (data, custo, tipo).

### **Dashboard**

- Resumo visual de:
  - Gastos acumulados em manutenção.
  - Projeção de gastos futuros.

### **Notificações**

- Agendamento de lembretes para revisões e outros eventos importantes.

---

## **Como Executar o Projeto**

### **Pré-requisitos**

- Node.js v18+ (recomendado).
- PostgreSQL instalado ou um serviço de banco de dados online (ex.: Railway, Supabase).

### **Configuração do Ambiente**

1. Clone o repositório:

   ```bash
   git clone https://github.com/LucasMig/my-garage-backend.git
   cd my-garage-backend
   ```

2. Instale as dependências:

   ```bash
    npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/dbname
   DATABASE_USER=postgres
   DATABASE_PASSWORD=postgres
   ```

   Substitua os valores de `DATABASE_URL`, `DATABASE_USER` e `DATABASE_PASSWORD` pelas credenciais do seu banco de dados.

4. Com o banco de dados configurado e rodando, execute as migrações do Prisma:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

### **Executando o Servidor**

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`.

### **Documentação da API**

A documentação da API está disponível em `http://localhost:3000/api`.

---

## **Contribuições**

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com sugestões, correções ou melhorias para o projeto.

## **Licença**

Este projeto é licenciado sob a licença MIT. Para mais informações, consulte o arquivo [LICENSE](LICENSE).

```

```
