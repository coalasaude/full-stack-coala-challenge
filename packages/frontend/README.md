# Frontend - Bookshelf Elder

This is the frontend package for the **Bookshelf Elder** project, built using **Next.js**. It provides the user interface for managing a collection of books, including features like adding, filtering, and viewing books.

## Features

- **Book Management**: Add, edit, and delete books in your collection.
- **Filtering and Sorting**: Filter books by status or sort them by various criteria.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Radix UI Integration**: Accessible and customizable components using Radix UI.
- **Modern Styling**: Styled with Tailwind CSS for a clean and consistent design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v22 or higher)
- **npm** or **yarn**

### Installation

1. Navigate to the `packages/frontend` directory:
   ```bash
   cd packages/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to view the application.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be available in the `.next` directory.

## Project Structure

```bash
  packages/frontend/
  ├── public/                 # Static assets
  ├── src/
  │   ├── components/         # Reusable UI components
  │   ├── pages/              # Next.js pages
  │   ├── styles/             # Global styles
  │   ├── context/            # React context for state management
  │   └── hooks/              # Custom React hooks
  ├── .eslintrc.js            # ESLint configuration
  ├── tailwind.config.js      # Tailwind CSS configuration
  └── package.json            # Project metadata and scripts
```

## Technologies Used

- Next.js: React framework for server-side rendering and static site generation.
- Radix UI: Accessible and customizable UI components.
- Tailwind CSS: Utility-first CSS framework for styling.
- TypeScript: Strongly typed JavaScript for better developer experience.
