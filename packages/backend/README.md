# Backend - Bookshelf Elder

This is the backend package for the **Bookshelf Elder** project. It provides the API and server-side logic for managing books, including CRUD operations, user interactions, and data persistence.

## Features

- **RESTful API**: Provides endpoints for managing books and user interactions.
- **Validation**: Ensures data integrity using validation pipes.
- **Error Handling**: Global error handling for consistent API responses.
- **Swagger Documentation**: Auto-generated API documentation for easy integration.
- **Database Integration**: Uses Prisma ORM for database management.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v22 or higher)
- **npm** or **yarn**
- **PostgreSQL** (or any supported database)

### Installation

1. Navigate to the `packages/backend` directory:
   ```bash
    cd packages/backend
   ```
2. Install dependencies:
   ```bash
    npm install
    # or
    yarn install
   ```
3. Set up the environment variables: Create a `.env` file in the root of the `packages/backend` directory and configure the following:
   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/bookshelf
   PORT=8080
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

### Running the Development Server

Start the development server:

```bash
npm run start:dev
# or
yarn start:dev
```

The server will be available at http://localhost:8080.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Start the production server:

```bash
npm run start:prod
# or
yarn start:prod
```

## API Documentation

The API documentation is available at `/api` when the server is running. It is generated using Swagger.

## Project Structure

```bash
packages/backend/
├── prisma/                  # Prisma schema and migrations
├── src/
│   ├── modules/             # Feature modules (e.g., books, users)
│   ├── main.ts              # Application entry point
│   ├── app.module.ts        # Root module
│   └── common/              # Shared utilities and middleware
├── .env                     # Environment variables
├── package.json             # Project metadata and scripts
└── tsconfig.json            # TypeScript configuration
```

## Technologies Used

- NestJS: A progressive Node.js framework for building efficient and scalable - server-side applications.
- Prisma: ORM for database management.
- Swagger: API documentation generator.
  TypeScript: Strongly typed JavaScript for better developer experience.
